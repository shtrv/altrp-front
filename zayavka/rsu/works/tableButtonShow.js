altrpHelpers.getComponentByElementId('_list_').updateElement();

let cmp_id = '_list_';
let tbl = altrpHelpers.getComponentByElementId(cmp_id);

(async () => {
	if (appStore.getState().formsStore.changedField?.startsWith('form_info.')){
		if(!await confirm('На форме есть несохраненные изменения. Вы уверены, что хотите продолжить?'))
			return;
	}	

	var tblRow = this.data._element.root.cardModel.data;
	altrpHelpers.setDataByPath('altrppagestate.' + cmp_id + '_current_row', tblRow);

	RaiseActions('hidden_row_click');
})()

//  путь для прошлого варианта
//  this.data._element.wrapper.elementWrapperRef 
