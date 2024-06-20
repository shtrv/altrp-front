var t = altrpHelpers.getDataByPath('altrppagestate.altdata.tables');
Object.keys(t).forEach(id=>t[id].context.updateData());	//Рефреш таблицы
var filter = altrpHelpers.getDataByPath("altrpforms.filter");
setPageParams('search_text', filter.search);
Object.keys(t).forEach(id=>t[id].context.updateData());	//Рефреш таблицы