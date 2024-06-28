--http://zayavka.geobuilder.ru/ajax/models/queries/zvs/zv_list
with
	develop_structures as  --Превращаем параметр вида "1,2,3,4" в строки и массивы
	(
		select array(
    		select str::bigint id 
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
    result_all as
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
                )
                or
                (
                    exists(select * from report_keys)
                    and
                    z.id in (select unnest(ids_array) from report_keys)
                )
            ) 
            and
            (
                z.landmark_text ilike '%' || trim('{{REQUEST:search_text}}') || '%'
                or z.comment_on_create ilike '%' || trim('{{REQUEST:search_text}}') || '%'
                or z.dep_name ilike '%' || trim('{{REQUEST:search_text}}') || '%'
                or z.last_stage_name ilike '%' || trim('{{REQUEST:search_text}}') || '%'
                or z.last_comments ilike '%' || trim('{{REQUEST:search_text}}') || '%'
                or z.creator_name ilike '%' || trim('{{REQUEST:search_text}}') || '%'
                or z.number = try_cast(trim('{{REQUEST:search_text}}')) --Попытка найти по номеру
            )
            and 
            (
                (   not exists(select * from report_keys)
                    {{IF_AND_REQUEST:z.super_status:status:IN}}
                )
                or
                (
                    exists(select * from report_keys)
                )        
            )            
    ),
    result as
    (
        select *
        from 
            result_all r
        order by created_at desc
        limit {{REQUEST:pageSize}} offset ({{REQUEST:page}}-1)*{{REQUEST:pageSize}}    
    ),
    rows_count_all as 
    (
    	select count(*) as cnt from result_all
    ),
    rows_count as 
    (
    	select count(*) as cnt from result
    )
select 
    coalesce(json_agg(r), '[]'::json) as rows,
    (
        select row_to_json(s)
        from 
        (
            select 
                case when {{REQUEST:page}} > last_page then last_page else {{REQUEST:page}} end as current_page, -- Название поля не менять
                last_page,
                case when rows_count_all = 0 then 'Нет данных для отображения' else 'Записи ' || row_num_begin::text || ' - ' || row_num_end::text || ' из ' || to_ch(rows_count_all, 'FM999 999 999') end rows_count_info,
                null as rows_count_no_filter,
                0 as pinned_count,
                coalesce(rows_count_all - 0, 0) as filtered_count -- Количество отобранных строк без учета закрепленных
            from
            (
                select
                    (((select cnt from rows_count_all) / {{REQUEST:pageSize}})::int+1) as last_page, -- Название поля не менять
                    (select cnt from rows_count_all) as rows_count_all,
                    (select cnt from rows_count) as rows_count,
                    ({{REQUEST:page}}-1) * {{REQUEST:pageSize}} + 1 as row_num_begin,
                    ({{REQUEST:page}}-1) * {{REQUEST:pageSize}} + (select cnt from rows_count) as row_num_end
            ) s
        ) s    
    ) as meta
from result r

