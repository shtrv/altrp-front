//zv_show Action Trigger
var doc = altrpHelpers.getDataByPath('altrpdata.doc');
var mode = 'edit';
if (!doc)
	mode = 'add';
else if (!IsUserCanEditThisTemplate(this)) //Проверяем *ROLES* на форме
	mode = 'show';
else{ 
	//Накладываем ограничение по оргштатке
	var ui = altrpHelpers.getDataByPath('altrpdata.userinfo');
	if (ui.pp_id != doc.develop_structure_id && ui.pp_ids?.length > 0){
		if (ui.pp_ids?.filter(m=>m==doc.develop_structure_id).length == 0)
			mode = 'show';
	}
}
if (mode == 'edit'){
	altrpHelpers.setDataByPath('altrppagestate.can_add_stage', 1);
	if ((doc.avar_or_plan == 2 && doc.reason_id != 568 /*По графику*/) || (doc.avar_or_plan == 1 && [51,585 /*Неиспр.оборудования, Отключение электроснабжения*/].indexOf(Number(doc.reason_id)) >= 0))
		altrpHelpers.setDataByPath('altrppagestate.can_link_to_ws', 1);
}
else if (mode == 'show'){
	//Ищем свое подразделение среди соисполнителей чтобы разрешить создание этапов
	if (!doc.coworkers_array)
		doc.coworkers_array = [];
	if (doc.coworkers_array.filter(u=>u==ui.pp_id).length > 0)
		altrpHelpers.setDataByPath('altrppagestate.can_add_stage', 1);
}

if (!!doc?.equips_json){
//Инициализируем таблицу eq_list 
	var eq_list = altrpHelpers.mbParseJSON(doc.equips_json);
	altrpHelpers.setDataByPath('altrppagestate.eq_list', eq_list);
}
if (doc?.avar_or_plan == 1)
	altrpHelpers.getComponentByElementId('srok_ustranenia')?.setState({elementDisplay: true});

//if (doc?.status_id > 41) //Если любой статус, кроме Черновик, то дизеблим форму
//	mode = 'show';
InitForm({
	model:'zvs',
	form:'edit_form',
	mode:mode,
	validate: async function(){
		var fields = [];
		var fi = altrpHelpers.getDataByPath('altrppagestate.form_info');
		var zv_obj = altrpHelpers.getDataByPath('altrpforms.edit_form');
		var equips = altrpHelpers.getDataByPath('altrppagestate.eq_list');
		if (zv_obj.avar_or_plan == 2 && zv_obj.reason_id == 568){ //Для плановой заявки с причиной "Работы по графику"
			if (!zv_obj.work_schedule_id)
				fields.push('Для работ по графику необходимо указать график производства работ');
		}
		else if (zv_obj.avar_or_plan == 1 && fi.mode == 'add'){ //При создании аварийной предупреждаем, если нет оборудования
			if(!equips?.length)
				fields.push('Не добавлено ни одного оборудования. Вы действительно хотите продолжить?');
		}
		else if (zv_obj.avar_or_plan == 2 && fi.mode == 'add' && zv_obj.reason_id != 568){//Для  плановых (кроме работ по графику) должно быть оборудование
			if(!equips?.length)
				fields.push('Не добавлено ни одного оборудования!');
		}
		if (zv_obj.avar_or_plan == 1 &&((!!zv_obj.elimination_date && !zv_obj.elimination_person) || (!zv_obj.elimination_date && !!zv_obj.elimination_person)))
			fields.push('Укажите срок устранения работ вместе с ФИО согласовавшего');
		return fields;
	},
	afterChange: async function(button, id){
		if (button == 'add' && !!id){
			window.location.href = '/zv/show/' + id;
		}else if (button == 'save_and_close' || button == 'close'){
			window.location.href = '/zv';
		}else{
			await UpdateDataSource('doc');
			await UpdateDataSource('zv_stages');
			altrpHelpers.setDataByPath('altrppagestate.zv_stages', 0);
			altrpHelpers.setDataByPath('altrppagestate.zv_stages', altrpHelpers.getDataByPath('altrpdata.zv_stages'));
		}
	}	
});

CorrectAllWidgets();
WidgetCalculate('edit_form_', 'develop_structure_raw');	
WidgetCalculate('title', 'title');
