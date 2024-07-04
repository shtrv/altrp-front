--http://zayavka.geobuilder.ru/ajax/models/queries/work_schedules/ws_list?id=2&spec_code=1
WITH
	related_structures_filter as  --Превращаем параметр вида "1,2,3,4" в строки и массивы
	(
		select array(
    		select str::int id 
    		from unnest(string_to_array('{{REQUEST:related_structures}}', ',')) WITH ORDINALITY a(str, num)
    	) ids
	),
	responsible_structures_filter as
	(
		select array(
    		select str::int id 
    		from unnest(string_to_array('{{REQUEST:responsible_structures}}', ',')) WITH ORDINALITY a(str, num)
    	) ids
	),
	coworkers_filter as
	(
		select array(
    		select str::int id 
    		from unnest(string_to_array('{{REQUEST:coworkers}}', ',')) WITH ORDINALITY a(str, num)
    	) ids
	),
	structures_filter as
	(
		select str::int id 
		from unnest(string_to_array('{{REQUEST:develop_structure_id}}', ',')) WITH ORDINALITY a(str, num)
	)
	,zv_id as 
	(select case when id = '' then 0 else id::int end id from (select '{{REQUEST:zv_id}}' id)s) --Прием для получения графиков, не привязанных с заявке.
    ,ws_list as
    (
        select t.*
            ,spec.short_name spec_name
        	,creator.egis_user_name creator_name
        	,editor.egis_user_name editor_name
        	,s.name develop_structure
        	,concat_ws('<br/>', work_kind.short_name, t.work_kind_comment) work_kind_txt
        	,coalesce(to_ch(t.begin_date), 'н/д') begin_date_str
        	,coalesce(to_ch(t.end_date), 'н/д') end_date_str
        	,'{"color":"blue"}' link_col_style
        	,case when t.spec_code = 1 then 'В' when t.spec_code = 2 then 'К' end spec_str
            ,case when t.spec_code = 1 then '{"background-color":"Cyan", "min-width":"60px"}' when t.spec_code = 2 then '{"background-color":"PaleGreen", "min-width":"60px"}' when t.spec_code = 3 then '{"background-color":"LemonChiffon", "min-width":"60px"}' end spec_color
        	,''/*case when t.spec_code = 1 then '{"background-color":"#33BAFF"}' when t.spec_code = 2 then '{"background-color":"#CE6518"}' end*/ back_color
        	--,knss.kns_names
        	,case when t.file_id > 0 then '📝' else null end file_exist
        	,'{"font-size":"20px"}' file_exist_style
        	,t.id value
        	,concat_ws(' ', '№' || t.id::text || case when t.is_training = 1 then ' Ⓣ'  else  '' end 
        	    || '.', to_ch(t.begin_date), ' - ', to_ch(t.end_date), '|', work_kind.short_name || coalesce(' (' || t.work_kind_comment || ')', '')) 
        	    || '<a title="Перейти к графику" target="_blank" href="/work_schedule/show/' || t.id::text || '">🔗</a>' label
        	,array_to_string(json_to_intarray(t.coworkers), ',') as coworkers_str
        	,stat.short_name as status_name
        	,t.id::text as ws_number
        	,case when t.is_training = 1 then 'Ⓣ'  
        	    else '' end caption        	    
        	,coalesce(z.number, z.id) as zv_number
        	,cardinality(work_schedule_equips_array) work_schedule_equips_count
        	,fs.landmark_text as landmark_text_from_fs
        from
            work_schedules t
            join structures s on s.id = t.develop_structure_id
            join classifier_values spec on spec.id = t.spec_code
            join classifier_values work_kind on work_kind.id = t.work_kind
            join classifier_values stat on stat.id = t.status_id
        	left join users creator on creator.id = t.creator_id 
        	left join users editor on editor.id = t.editor_id
        	left join structures_filter sf on sf.id = t.develop_structure_id
        	left join zvs z on z.id = t.zv_id
        	left join facility_stations fs on fs.id = t.main_facility_stations_id
        where --t.status_id != 44 --Удален
            t.deleted_at is null
            {{IF_AND_REQUEST:t.id:id:IN}}
            {{IF_AND_REQUEST:z.number:zv_number}}
            {{IF_AND_REQUEST:t.spec_code:spec_code:IN}}
            {{IF_AND_REQUEST:t.work_kind:work_kind:IN}}
            and ('{{REQUEST:any_dep}}' = '1' or not sf.id is null)
            {{IF_AND_REQUEST:t.status_id:status_id:IN}}
            and (
                (coalesce(t.is_training, 0) = try_cast('{{REQUEST:is_training}}', 0))
            )
            and (array(select json_array_elements_text(t.related_structures)::int) && (select ids from related_structures_filter) or '{{REQUEST:related_structures}}'='') --Массив related_structures пересекается с массивом related_structures, переданном в параметрах. Либо параметер related_structures пуст  
            and (array(select json_array_elements_text(t.responsible_structures)::int) && (select ids from responsible_structures_filter) or '{{REQUEST:responsible_structures}}'='')    
            and (array(select json_array_elements_text(t.coworkers)::int) && (select ids from coworkers_filter) or '{{REQUEST:coworkers}}'='')
            and
            (
                {{IS_NULL:date_start}}
                or
                nullif('{{REQUEST:date_start}}', '')::timestamp <= t.begin_date
                or
                nullif('{{REQUEST:date_start}}', '')::timestamp <= t.end_date
            )
            and
            (
                {{IS_NULL:date_finish}}
                or
                nullif('{{REQUEST:date_finish}}', '')::timestamp + INTERVAL '1day' >= t.begin_date
                or
                nullif('{{REQUEST:date_finish}}', '')::timestamp + INTERVAL '1day' >= t.end_date
            )
    )
select *
from
    ws_list t
where 1=1
    {{IF_AND_REQUEST:t.landmark_text_from_fs:landmark_text:ILIKE}} -- test 5
    and
    (
        t.landmark_text_from_fs ilike       '%' || trim('{{REQUEST:search_text}}') || '%'
        or t.work_kind_txt ilike    '%' || trim('{{REQUEST:search_text}}') || '%'
        or t.develop_structure ilike    '%' || trim('{{REQUEST:search_text}}') || '%'
        or t.graphic_name ilike     '%' || trim('{{REQUEST:search_text}}') || '%'
        or t.description ilike      '%' || trim('{{REQUEST:search_text}}') || '%'
        or t.id = try_cast(trim('{{REQUEST:search_text}}')) --Попытка найти по номеру графика
    )
order by
    coalesce(t.begin_date, t.created_at) desc, t.id
    -----
    -----