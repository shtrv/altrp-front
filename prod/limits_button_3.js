//Action Показать таблицу лимитов
var frm = altrpHelpers.getDataByPath('altrpforms.edit_form');
if (frm.year_end - frm.year_begin > 1100000) //Убрал проверку до 35 года
	alert('Проверьте корректность значений в полях Год начала/окончания');
else {
	window.limits_table.style.display = 'block';
	window.limits_table.style.position = 'fixed';
	window.limits_table.style.zIndex = '999999';
	window.limits_table.style.top = '0px';
	window.limits_table.style.left = '0px';
	window.limits_table.getElementsByClassName('altrp-column')[0].style.minHeight = (document.getElementsByClassName('popup-content')[0].clientHeight+42) + 'px';
	window.limits_table.getElementsByClassName('altrp-column')[0].style.minWidth = (document.getElementsByClassName('popup-content')[0].clientWidth) + 'px';
    window.limits_table.style.height = (document.getElementsByClassName('popup-window')[0].clientHeight + 'px');
    window.limits_table.style.overflowY = 'scroll';

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