var params = Object.fromEntries(new URLSearchParams(location.search));
Object.keys(appStore.getState().formsStore.filter).forEach(name=>{
	delete params[name];
});
window.history.replaceState(null, null, '?' + new URLSearchParams(params));
appStore.getState().altrpPage.setProperty('params', params);

ResetValuesOnForm('filter');
var t = altrpHelpers.getDataByPath('altrppagestate.altdata.tables');
Object.keys(t).forEach(id=>t[id].context.updateData());	//Рефреш таблицы

var params = Object.fromEntries(new URLSearchParams(location.search));
Object.keys(appStore.getState().formsStore.filter).forEach(name=>{
	delete params[name];
});
window.history.replaceState(null, null, '?' + new URLSearchParams(params));
appStore.getState().altrpPage.setProperty('params', params);