var params = Object.fromEntries(new URLSearchParams(location.search));
Object.keys(appStore.getState().formsStore.filter).forEach(name=>{
	delete params[name];
});
window.history.replaceState(null, null, '?' + new URLSearchParams(params));
appStore.getState().altrpPage.setProperty('params', params);