setPageParams('status_id', {{altrpforms.filter.status_id}});
var t = altrpHelpers.getDataByPath('altrppagestate.altdata.tables');
Object.keys(t).forEach(id=>t[id].context.updateData());	//Рефреш таблицы
setPageParams('status_id', {{altrpforms.filter.status_id}});