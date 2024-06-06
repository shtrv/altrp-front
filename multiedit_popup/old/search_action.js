window.bd_load_end = function(){
	console.log(this.responseText);
    var res = JSON.parse(this.responseText);
	res.forEach(function(m)
		{
			m.value = m.id; 
			m.recordDateStr = (new Date(m.recordDate)).toLocaleDateString();
			m.label = '<div>'
					+ '<strong>Номер: </strong>' + m.recordNumber + '<br>' 
					+ '<strong>Дата: </strong>' + m.recordDateStr + '<br>' 
					+ '<strong>Заголовок: </strong>' + m.title
					+ '</div>';
		}
	);
	altrpHelpers.setDataByPath('altrppagestate.bd_result', res);    
}
var searchText = this.data._element.wrapper.elementRef.current.popoverRef.current.querySelector('.bp3-input').value;
if (searchText?.length >= 4){
	const req = new XMLHttpRequest();
	req.addEventListener("load", window.bd_load_end);
	req.open('GET', '{{altrpdata.userinfo.env.bd}}/-/g/records?recordNumber=' + searchText);
	req.withCredentials = true;
	req.send();
}
else
	altrpHelpers.setDataByPath('altrppagestate.bd_result', null);	