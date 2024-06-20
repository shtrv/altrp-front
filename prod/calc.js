var frm = altrpHelpers.getDataByPath('altrpforms.edit_form');
var pricePerYear = (frm.price / frm.limits.length).toFixed(2);
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
altrpHelpers.setDataByPath('altrpforms.limit.' + lastLimit, Number(frm.price - (pricePerYear * (frm.limits.length-1))).toFixed(2));
RaiseActions('_calc_sum_');




var l = 0;
var limits = altrpHelpers.getDataByPath('altrpforms.limit');
for (var limit in limits) {
	if (limit != 'NaN' && !!limit){
		l += Number(limits[limit]);
	}
}
altrpHelpers.setDataByPath('altrpforms.edit_form_calc.price', Number(l.toFixed(2))); 
