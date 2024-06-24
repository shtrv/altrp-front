/* change action */

var pp_bdObj = GetWidgetFullValue(GetWidget('edit_snos_fields_pp_', 'id'));
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_pp.bd_id', pp_bdObj.id);
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_pp.bd_number', pp_bdObj.recordNumber);
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_pp.bd_date', pp_bdObj.recordDate);
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_pp.bd_title', pp_bdObj.title);


/* on search action */

window.bd_load_end_pp = function(){
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
	altrpHelpers.setDataByPath('altrppagestate.bd_result_pp', res);    
}
var searchText = this.data._element.wrapper.elementRef.current.popoverRef.current.querySelector('.bp3-input').value;
if (searchText?.length >= 4){
	const req = new XMLHttpRequest();
	req.addEventListener("load", window.bd_load_end_pp);
	req.open('GET', '{{altrpdata.userinfo.env.bd}}/-/g/records?recordNumber=' + searchText);
	req.withCredentials = true;
	req.send();
}
else
	altrpHelpers.setDataByPath('altrppagestate.bd_result_pp', null);






/* change action */

var dgi_bdObj = GetWidgetFullValue(GetWidget('edit_snos_fields_dgi_', 'id'));
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_dgi.bd_id', dgi_bdObj.id);
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_dgi.bd_number', dgi_bdObj.recordNumber);
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_dgi.bd_date', dgi_bdObj.recordDate);
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_dgi.bd_title', dgi_bdObj.title);


/* on search action */

window.bd_load_end_dgi = function(){
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
	altrpHelpers.setDataByPath('altrppagestate.bd_result_dgi', res);    
}
var searchText = this.data._element.wrapper.elementRef.current.popoverRef.current.querySelector('.bp3-input').value;
if (searchText?.length >= 4){
	const req = new XMLHttpRequest();
	req.addEventListener("load", window.bd_load_end_dgi);
	req.open('GET', '{{altrpdata.userinfo.env.bd}}/-/g/records?recordNumber=' + searchText);
	req.withCredentials = true;
	req.send();
}
else
	altrpHelpers.setDataByPath('altrppagestate.bd_result_dgi', null);
	





/* change action */

var zak_bdObj = GetWidgetFullValue(GetWidget('edit_snos_fields_zak_', 'id'));
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_zak.bd_id', zak_bdObj.id);
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_zak.bd_number', zak_bdObj.recordNumber);
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_zak.bd_date', zak_bdObj.recordDate);
altrpHelpers.setDataByPath('altrpforms.edit_snos_fields_zak.bd_title', zak_bdObj.title);


/* on search action */

window.bd_load_end_zak = function(){
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
	altrpHelpers.setDataByPath('altrppagestate.bd_result_zak', res);    
}
var searchText = this.data._element.wrapper.elementRef.current.popoverRef.current.querySelector('.bp3-input').value;
if (searchText?.length >= 4){
	const req = new XMLHttpRequest();
	req.addEventListener("load", window.bd_load_end_zak);
	req.open('GET', '{{altrpdata.userinfo.env.bd}}/-/g/records?recordNumber=' + searchText);
	req.withCredentials = true;
	req.send();
}
else
	altrpHelpers.setDataByPath('altrppagestate.bd_result_zak', null);
