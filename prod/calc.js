var frm = altrpHelpers.getDataByPath('altrpforms.edit_form');
var pricePerYear = (frm.price / frm.limits.length).toFixed(3);
var limits = altrpHelpers.getDataByPath('altrpforms.limit');
var l = 0;
var lastLimit;
for (var limit in limits) {
	if (limit != 'NaN' && !!limit){
		lastLimit = limit;
		l += pricePerYear;
		altrpHelpers.setDataByPath('altrpforms.limit.' + limit, pricePerYear);
	}
}
altrpHelpers.setDataByPath('altrpforms.limit.' + lastLimit, Number(frm.price - (pricePerYear * (frm.limits.length-1))).toFixed(3));
RaiseActions('_calc_sum_');




var l = 0;
var limits = altrpHelpers.getDataByPath('altrpforms.limit');
for (var limit in limits) {
	if (limit != 'NaN' && !!limit){
		l += Number(limits[limit]);
	}
}
altrpHelpers.setDataByPath('altrpforms.edit_form_calc.price', Number(l.toFixed(3))); 





//Action Показать таблицу лимитов
var frm = altrpHelpers.getDataByPath('altrpforms.edit_form');
if (frm.year_end - frm.year_begin > 11)
	alert('Проверьте корректность значений в полях Год начала/окончания');
else {
	window.limits_table.style.display = 'block';
	window.limits_table.style.position = 'fixed';
	window.limits_table.style.zIndex = '999999';
	window.limits_table.style.top = '0px';
	window.limits_table.style.left = '0px';
	window.limits_table.getElementsByClassName('altrp-column')[0].style.minHeight = (document.getElementsByClassName('popup-content')[0].clientHeight+42) + 'px';
	window.limits_table.getElementsByClassName('altrp-column')[0].style.minWidth = (document.getElementsByClassName('popup-content')[0].clientWidth) + 'px';

	var limits = altrpHelpers.getDataByPath('altrpforms.limit');
	for (var limit in limits)
		delete limits[limit]

	var limits = frm.limits ?? [];
	if (limits == '')
		limits = [];
	var newLimits = [];
	for (var i = frm.year_begin; i <= frm.year_end; i++) {
		var limit = limits.filter(l => l.year == i)[0]?.limit ?? 0;
		newLimits.push(
			{
				year: Number(i),
				limit: Number(limit).toFixed(3)
			}
		);
	}
	altrpHelpers.setDataByPath('altrpforms.edit_form.limits', 1);
	altrpHelpers.getComponentByElementId('limits_cards').updateElement();
	altrpHelpers.setDataByPath('altrpforms.edit_form.limits', newLimits);
	altrpHelpers.getComponentByElementId('limits_cards').updateElement();
	RaiseActions('_calc_sum_');
}




//Change Actions
var price = altrpHelpers.getDataByPath('altrpforms.edit_form.price');
var round_price = Number(price).toFixed(3);
altrpHelpers.setDataByPath('altrpforms.edit_form.price', round_price);