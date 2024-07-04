WITH
	related_structures_filter AS (
		SELECT ARRAY(
    		SELECT str::int id 
    		FROM unnest(string_to_array('{{REQUEST:related_structures}}', ',')) WITH ORDINALITY a(str, num)
    	) ids
	),
	responsible_structures_filter AS (
		SELECT ARRAY(
    		SELECT str::int id 
    		FROM unnest(string_to_array('{{REQUEST:responsible_structures}}', ',')) WITH ORDINALITY a(str, num)
    	) ids
	),
	coworkers_filter AS (
		SELECT ARRAY(
    		SELECT str::int id 
    		FROM unnest(string_to_array('{{REQUEST:coworkers}}', ',')) WITH ORDINALITY a(str, num)
    	) ids
	),
	structures_filter AS (
		SELECT str::int id 
		FROM unnest(string_to_array('{{REQUEST:develop_structure_id}}', ',')) WITH ORDINALITY a(str, num)
	),
	zv_id AS (
		SELECT CASE WHEN id = '' THEN 0 ELSE id::int END id 
		FROM (SELECT '{{REQUEST:zv_id}}' id) s
	),
	ws_list AS (
		SELECT t.*,
			spec.short_name AS spec_name,
			creator.egis_user_name AS creator_name,
			editor.egis_user_name AS editor_name,
			s.name AS develop_structure,
			CONCAT_WS('<br/>', work_kind.short_name, t.work_kind_comment) AS work_kind_txt,
			COALESCE(to_ch(t.begin_date), 'н/д') AS begin_date_str,
			COALESCE(to_ch(t.end_date), 'н/д') AS end_date_str,
			'{"color":"blue"}' AS link_col_style,
			CASE WHEN t.spec_code = 1 THEN 'В' WHEN t.spec_code = 2 THEN 'К' END AS spec_str,
			CASE WHEN t.spec_code = 1 THEN '{"background-color":"Cyan", "min-width":"60px"}'
				 WHEN t.spec_code = 2 THEN '{"background-color":"PaleGreen", "min-width":"60px"}'
				 WHEN t.spec_code = 3 THEN '{"background-color":"LemonChiffon", "min-width":"60px"}'
			END AS spec_color,
			'' AS back_color,
			CASE WHEN t.file_id > 0 THEN '📝' ELSE NULL END AS file_exist,
			'{"font-size":"20px"}' AS file_exist_style,
			t.id AS value,
			CONCAT_WS(' ', '№' || t.id::text || CASE WHEN t.is_training = 1 THEN ' Ⓣ' ELSE '' END 
				|| '.', to_ch(t.begin_date), ' - ', to_ch(t.end_date), '|', 
				work_kind.short_name || COALESCE(' (' || t.work_kind_comment || ')', '')) 
				|| '<a title="Перейти к графику" target="_blank" href="/work_schedule/show/' || t.id::text || '">🔗</a>' AS label,
			array_to_string(json_to_intarray(t.coworkers), ',') AS coworkers_str,
			stat.short_name AS status_name,
			t.id::text AS ws_number,
			CASE WHEN t.is_training = 1 THEN 'Ⓣ' ELSE '' END AS caption,
			COALESCE(z.number, z.id) AS zv_number,
			cardinality(work_schedule_equips_array) AS work_schedule_equips_count,
			fs.landmark_text AS landmark_text_from_fs
		FROM work_schedules t
		JOIN structures s ON s.id = t.develop_structure_id
		JOIN classifier_values spec ON spec.id = t.spec_code
		JOIN classifier_values work_kind ON work_kind.id = t.work_kind
		JOIN classifier_values stat ON stat.id = t.status_id
		LEFT JOIN users creator ON creator.id = t.creator_id 
		LEFT JOIN users editor ON editor.id = t.editor_id
		LEFT JOIN structures_filter sf ON sf.id = t.develop_structure_id
		LEFT JOIN zvs z ON z.id = t.zv_id
		LEFT JOIN facility_stations fs ON fs.id = t.main_facility_stations_id
		WHERE t.deleted_at IS NULL
			{{IF_AND_REQUEST:t.id:id:IN}}
			{{IF_AND_REQUEST:z.number:zv_number}}
			{{IF_AND_REQUEST:t.spec_code:spec_code:IN}}
			{{IF_AND_REQUEST:t.work_kind:work_kind:IN}}
			AND ('{{REQUEST:any_dep}}' = '1' OR NOT sf.id IS NULL)
			{{IF_AND_REQUEST:t.status_id:status_id:IN}}
			AND (COALESCE(t.is_training, 0) = TRY_CAST('{{REQUEST:is_training}}', 0))
			AND (ARRAY(SELECT json_array_elements_text(t.related_structures)::int) && (SELECT ids FROM related_structures_filter) OR '{{REQUEST:related_structures}}' = '')
			AND (ARRAY(SELECT json_array_elements_text(t.responsible_structures)::int) && (SELECT ids FROM responsible_structures_filter) OR '{{REQUEST:responsible_structures}}' = '')    
			AND (ARRAY(SELECT json_array_elements_text(t.coworkers)::int) && (SELECT ids FROM coworkers_filter) OR '{{REQUEST:coworkers}}' = '')
			AND (
				{{IS_NULL:date_start}}
				OR
				NULLIF('{{REQUEST:date_start}}', '')::timestamp <= t.begin_date
				OR
				NULLIF('{{REQUEST:date_start}}', '')::timestamp <= t.end_date
			)
			AND (
				{{IS_NULL:date_finish}}
				OR
				NULLIF('{{REQUEST:date_finish}}', '')::timestamp + INTERVAL '1day' >= t.begin_date
				OR
				NULLIF('{{REQUEST:date_finish}}', '')::timestamp + INTERVAL '1day' >= t.end_date
			)
	),
	paginated_ws_list AS (
		SELECT *,
			ROW_NUMBER() OVER (ORDER BY COALESCE(begin_date, created_at) DESC, id) AS row_num
		FROM ws_list
		WHERE 1=1
			{{IF_AND_REQUEST:t.landmark_text_from_fs:landmark_text:ILIKE}}
			AND (
				t.landmark_text_from_fs ILIKE '%' || TRIM('{{REQUEST:search_text}}') || '%'
				OR t.work_kind_txt ILIKE '%' || TRIM('{{REQUEST:search_text}}') || '%'
				OR t.develop_structure ILIKE '%' || TRIM('{{REQUEST:search_text}}') || '%'
				OR t.graphic_name ILIKE '%' || TRIM('{{REQUEST:search_text}}') || '%'
				OR t.description ILIKE '%' || TRIM('{{REQUEST:search_text}}') || '%'
				OR t.id = TRY_CAST(TRIM('{{REQUEST:search_text}}') AS INTEGER)
			)
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
from paginated_ws_list r