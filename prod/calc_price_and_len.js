var map_segments = altrpHelpers.getDataByPath('altrppagestate.map_segments');
var len = 0.0;
map_segments.forEach(i=>len = len + (Number(i.length_passport ?? 0.0)));
var wells = map_segments.filter(i=>!!i.layer.includes('wells')).length;
if (len > 0){
	var prevLenMap = altrpHelpers.getDataByPath('altrpforms.edit_form.length_by_map') ?? 0;
	len = len.toFixed(2);
	altrpHelpers.setDataByPath('altrpforms.edit_form.length_by_map', len);
	if (prevLenMap == altrpHelpers.getDataByPath('altrpforms.edit_form.length')) //одинаковые, значит человек не трогал
		altrpHelpers.setDataByPath('altrpforms.edit_form.length', len);
}
altrpHelpers.setDataByPath('altrpforms.edit_form.wells_count', wells);
altrpHelpers.getComponentByElementId('_objects_list_').updateElement();

var prices = altrpHelpers.getDataByPath('altrpdata.prices');
var frm = altrpHelpers.getDataByPath('altrpforms.edit_form');
var price;
if (frm.max_diameter > 0 && frm.laying_type > 0 && frm.length > 0 && frm.method_id == 2192){
    price = prices.filter(i=>i.laying_type_id == frm.laying_type && i.min_diameter < frm.max_diameter && i.max_diameter >= frm.max_diameter)[0]?.price * frm.length / 1000.0;
	altrpHelpers.setDataByPath('altrpforms.edit_form.price',  (!isNaN(price) ? price.toFixed(2) : 0.000));
	altrpHelpers.setDataByPath('altrpforms.edit_form.price_is_autocalculated', (price > 0 ? 1 : 0));
}
