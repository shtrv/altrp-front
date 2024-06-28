--/ajax/models/queries/uzik_arendas/uzik_kadastr_arenda_pagination?pageSize=50&page=1&status_id=1

with
    result_all_no_filter as
    (
        select count(*) cnt from altrpview_uzik_kadastr_arenda_list_excel z
        where 
            z.status_id = {{REQUEST:status_id}}
    ),
    pin_rows_id as
    (
        select unnest(ids_array) id from report_keys where id = try_cast('{{REQUEST:pin_rows_id}}')
    ),
    result_all as
    (
        select 
            z.*, '<div style="align:right">' || z.id::text || '</div>' id_div
            ,case when p.id is null then z."№ п/п"::text else z."№ п/п"::text || '📌' end as row_id
            ,case when p.id is null then 1 else 0 end as pinned_sort
        from 
            altrpview_uzik_kadastr_arenda_list_excel z   
            left join pin_rows_id p on p.id = z.id
        where 
            (
                z.status_id = {{REQUEST:status_id}}
                {{IF_AND_REQUEST:z."№ п/п":s_num}}
                {{IF_AND_REQUEST:z."Подразделение":s_dep:ILIKE}}
                {{IF_AND_REQUEST:z."Адрес (по договору аренды)":s_adr1:ILIKE}}
                {{IF_AND_REQUEST:z."Адрес в соотвествии с ЕГРН":s_adr2:ILIKE}}
                {{IF_AND_REQUEST:z.spec_id:s_spec_id}}
                {{IF_AND_REQUEST:z.im_vid:s_im_vid}}
                {{IF_AND_REQUEST:z.asset_type_id:s_asset_type_id}}
                {{IF_AND_REQUEST:z."Наименование объекта":s_name:ILIKE}}
                {{IF_AND_REQUEST:z."Расшифровка оборудования":s_rash:ILIKE}}
                {{IF_AND_REQUEST:z."Контрольные объекты":s_control:ILIKE}}
                {{IF_AND_REQUEST:z."Кадастровый номер":s_kadastr:ILIKE}}
                {{IF_AND_REQUEST:z."№ Проекта договора аренды":s_projnum:ILIKE}}
                {{IF_AND_REQUEST:z."№ Договора Аренды":s_arendanum:ILIKE}}
                {{IF_AND_REQUEST:z.dog_srok_vid_id:s_dog_srok_vid_id}}
                {{IF_AND_REQUEST:z.insurance_id:s_insurance_id}}
                {{IF_AND_REQUEST:z."Примечание (страхование)":s_strah_prim:ILIKE}}
                {{IF_AND_REQUEST:z."Примечание (общая информация)":s_other_prim:ILIKE}}
                {{IF_AND_REQUEST:z."№ Распоряжения ДГИ":s_dgi_num}}
                {{IF_AND_REQUEST:z."№ Распоряжения о внесении изменений":s_dgi_edit_num}}
                {{IF_AND_REQUEST:z."Наименование комплекса сооружений":s_soor_name:ILIKE}}
            )
            or
            (
                z.id in (select p.id from pin_rows_id p)
            )
    ),
    result as
    (
        select *, 1 _sort_symmetry_
        from 
            result_all r
        order by pinned_sort
		    {{REQUEST:order_column}} {{REQUEST:order_direction}}
		    ,"№ п/п" asc
        limit {{REQUEST:pageSize}} offset ({{REQUEST:page}}-1)*{{REQUEST:pageSize}}    
    ),
    rows_count as 
    (
    	select count(*) as cnt from result_all
    ),
    rows_count_on_page as 
    (
    	select count(*) as cnt from result
    )
select 
	coalesce(json_agg(r), '[]'::json) as rows
	,(
		select row_to_json(s)
		from 
		(
		    select 
		        case when {{REQUEST:page}} > last_page then last_page else {{REQUEST:page}} end as current_page --Название поля не менять
		        ,last_page
		        ,case when rows_count = 0 then 'Нет данных для отображения' else 'Записи ' || row_num_begin::text || ' - ' || row_num_end::text || ' из ' || to_ch(rows_count, 'FM999 999 999') end rows_count_info
		        ,case when rows_count != rows_count_no_filter then ', всего ' || to_ch(rows_count_no_filter, 'FM999 999 999') else null end rows_count_no_filter
		        ,pinned_count
		        ,coalesce(rows_count - pinned_count, 0) as filtered_count --Количество отобранных строк без учета закрепленных
		    from
		    (
    			select
    				(((select cnt from rows_count) / {{REQUEST:pageSize}})::int+1) as last_page --Название поля не менять
    				,(select cnt from rows_count) as rows_count
    				,(select cnt from result_all_no_filter) as rows_count_no_filter
    				,({{REQUEST:page}}-1) * {{REQUEST:pageSize}} + 1 as row_num_begin
    				,({{REQUEST:page}}-1) * {{REQUEST:pageSize}} + (select cnt from rows_count_on_page) as row_num_end
    				,(select count(*) from pin_rows_id) as pinned_count
    		)s
		)s	
	) as meta
from result r

