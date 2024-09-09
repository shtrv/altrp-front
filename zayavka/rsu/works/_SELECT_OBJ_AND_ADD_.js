window.new_work= async function ()
{
	/*if (!!appStore.getState().formsStore.changedField){
		if(!await confirm('На форме есть несохраненные изменения. Вы уверены, что хотите продолжить?'))
			return;
	}
	appStore.getState().formsStore.changedField = null;
	if (!!window.prevRow){
		window.prevRow.style.backgroundColor = '';
		window.prevRow.style.borderStyle = '';
		window.prevRow.style.borderWidth = '';
		window.prevRow.style.borderColor = '';     
		window.prevRow.style.zIndex = '';
		window.prevRow.style.position = '';
		window.prevRow.style.left = '';
		window.prevRow.style.boxShadow = '';
		window.prevRow = null;
	}	*/
	
	InitForm({
		model:'rsu_works',
		form:'form_info',
		mode:'add',
		validate: function(){
			var fields = [];
			var f = altrpHelpers.getDataByPath('altrpforms.form_info');
			if (!f.landmark_guid && !!f.landmark_text)
				fields.push('Адрес необходимо выбирать из предлагаемых вариантов');
			return fields;
		},
		afterChange: function(button, id){
			if (button == 'add' && !!id){
				//Нажата кнопка "Добавить"
				//window.location.href = '/work_schedule/show/' + id;
			}else if (button == 'save_and_close'){
				//Нажата кнопка "Сохранить и закрыть"
				//window.location.href = '/work_schedule';
			}else{
				//Остаемся на странице, обновляем необходимые датасоурсы
				//UpdateDataSource('doc');
			}
		}	
	});	
	
	const CurrentBreakpoint = altrpHelpers.getCurrentBreakpoint();

	window.right_panel.style.position = 'fixed';
	window.modal_background.style.position = 'fixed';

	if (CurrentBreakpoint !== 'Big-Phone' && CurrentBreakpoint !== 'Small-Phone') {
		window.right_panel.style.width = '60%';
		window.right_panel.style.top = '10%';
		window.right_panel.style.left = '20%';
		window.right_panel.style.right = '10%';
		window.right_panel.style.bottom = '10%';
	}
	

	altrpHelpers.setDataByPath('altrppagestate.uip_number', altrpHelpers.getDataByPath('altrppagestate.selected_obj.uip_number')); //Чтобы работали условные visible, disable
	altrpHelpers.setDataByPath('altrppagestate.temporary_number', altrpHelpers.getDataByPath('altrppagestate.selected_obj.temporary_number'));
	altrpHelpers.getDataByPath('altrppagestate.form_info').doc = await UpdateDataSource('last_work_info'); //Получаем последние данные по этому объекту
	altrpHelpers.setDataByPath('altrppagestate.form_info.doc.boss_user_id', null); //Сбрасываем нач.участка
	ResetValuesOnForm('form_info');
	ResetValuesOnForm('form_info_');
	ResetValuesOnForm('obj_info');
	ResetValuesOnForm('obj_info_');
	ResetValuesOnForm('popup');	
}