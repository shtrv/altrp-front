var shOld = altrpHelpers.getDataByPath('altrpforms.edit_form.shifr_old');
if (!shOld){
	var d0 = GetWidgetFullValue(GetWidget('edit_form', 'spec_id'))?.value;
	var d1 = GetWidgetFullValue(GetWidget('edit_form', 'okrug_id'))?.json_data?.cuvs_id;
	var d2 = GetWidgetFullValue(GetWidget('edit_form', 'fyn_src_id'))?.sort_order;
	var d3 = GetWidgetFullValue(GetWidget('edit_form', 'vid_id'))?.sort_order;
	altrpHelpers.setDataByPath('altrpforms.edit_form.shifr', (d0 == 1 ? 'V' : (d0 == 2 ? 'К' : '_')) + '.' + (d1??'_') + '.' + (d2??'_') + '.' + (d3??'_') + '._');
}