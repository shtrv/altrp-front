--http://zayavka.geobuilder.ru/ajax/models/queries/zvs/zv_list
with
	develop_structures as  --Превращаем параметр вида "1,2,3,4" в строки и массивы
	(
		select array(
    		select try_cast(str)::bigint id 
    		from unnest(string_to_array('{{REQUEST:develop_structure_id}}', ',')) WITH ORDINALITY a(str, num)
    	) ids
	),
    report_keys as
    (
        select *
        from
            report_keys
        where id in (0, try_cast('{{REQUEST:keys_id}}'))
    ),	
    result as
    (
        select * from altrpview_zv_list z
        where 1=1
            and
            (
                (   not exists(select * from report_keys)            
                    and (exists(select ids from develop_structures where z.develop_id = any(ids)) 
                        or exists(select ids from develop_structures where z.manage_id = any(ids)) 
                        or '{{REQUEST:any_dep}}' = '1'
                        or exists(select ids from develop_structures where z.coworkers_array && ids)
                    )
                    --and (develop.id::text in ({{REQUEST:develop_structure_id}}) or manage.id::text in ({{REQUEST:develop_structure_id}}))
                    {{IF_AND_REQUEST:z.ceh_id:ceh_id:IN}}
                    {{IF_AND_REQUEST:z.spec_code:spec_code:IN}}
                    {{IF_AND_REQUEST:(z.avar_or_plan+55):avar:IN}}
                    {{IF_AND_REQUEST:z.reason_id:reason:IN}}
                    {{IF_AND_REQUEST:z.landmark_text:landmark:ILIKE}}
                    {{IF_AND_REQUEST:z.created_at:date_created_begin:>=}}    
                    {{IF_AND_REQUEST:(z.created_at - INTERVAL '1 day'):date_created_end:<=}}
                    {{IF_AND_REQUEST:z.start_plan_date:date_plan_begin:>=}}    
                    {{IF_AND_REQUEST:(z.start_plan_date - INTERVAL '1 day'):date_plan_end:<=}}
                    {{IF_AND_REQUEST:z.class_id:class_id}}
                )
                or
                (
                    exists(select * from report_keys)
                    and
                    z.id in (select unnest(ids_array) from report_keys)
                )
            )                    
    )
select * 
from 
    result r
where
    (
        r.landmark_text ilike '%' || trim('{{REQUEST:search_text}}') || '%'
        or r.comment_on_create ilike '%' || trim('{{REQUEST:search_text}}') || '%'
        or r.dep_name ilike '%' || trim('{{REQUEST:search_text}}') || '%'
        or r.last_stage_name ilike '%' || trim('{{REQUEST:search_text}}') || '%'
        or r.last_comments ilike '%' || trim('{{REQUEST:search_text}}') || '%'
        or r.creator_name ilike '%' || trim('{{REQUEST:search_text}}') || '%'
        or r.fs_name ilike '%' || trim('{{REQUEST:search_text}}') || '%'
        or r.number = try_cast(trim('{{REQUEST:search_text}}')) --Попытка найти по номеру
    )
    and 
    (
        (   not exists(select * from report_keys)
            {{IF_AND_REQUEST:r.super_status:status:IN}}
        )
        or
        (
            exists(select * from report_keys)
        )        
    )
order by
created_at desc