appStore.subscribe(function(){
	//var t = appStore.getState().altrpPageState.data.altdata?.tables;
	var t = altrpHelpers.getDataByPath('altrppagestate.altdata.tables');
    if (!!t && !window.altrpInitilized){
        console.log('first in before force debouncedUpdateData');
        Object.keys(t).forEach(id=>t[id].context.debouncedUpdateData());
        window.altrpInitilized = 1;
    } else if (window.altrpInitilized == 1){ 
		window.altrpInitilized = 2;		
	}
	//console.log('appStore has been changed');
});
console.log('subscribe done for force first update altdata tables');
window.on_show_loader = function(show){
	var loader = document.getElementById('loader_element');
	var tbl = document.getElementsByClassName('altdata-table-body')[0];
    if (show){
		loader.oldParent = loader.parentElement;
		tbl.appendChild(loader);
		var rect = tbl.getBoundingClientRect();
		loader.style.left = rect.left + 'px';
		loader.style.top = rect.top + 'px';
		loader.style.width = rect.width + 'px';
		loader.style.height = rect.height + 'px';
		loader.lastChild.style.height = '100%';
		loader.lastChild.style.minHeight = '0px';
        loader.style.display = 'block';
	}
    else{
		loader.oldParent.appendChild(loader);
		loader.style.left = '';
		loader.style.top = '';
		loader.style.width = '';
		loader.style.height = '';
		loader.lastChild.style.height = '';
		loader.lastChild.style.minHeight = '';
        window.loader_element.style.display = 'none';
	}
};
setTimeout(function(){
	var head1 = document.getElementsByClassName('altdata-table-head')[0].getElementsByTagName('tr')[1];
	var head2 = document.getElementsByClassName('altdata-table-head')[0].getElementsByTagName('tr')[2];
	var body = document.getElementsByClassName('altdata-table-body')[0].getElementsByTagName('div')[1];
	body.onscroll = function(evt) {
		head1.style.transform = 'translateX(' + '-' + (body.scrollLeft) + 'px)';
		head2.style.transform = 'translateX(' + '-' + (body.scrollLeft) + 'px)';
	}
    console.log('on scroll ready');
}, 5000);
console.log('loader ready');
