//Показываем форму, инициализируем поля
window.right_panel.style.position = 'fixed';
var CurrentBreakpoint = altrpHelpers.getCurrentBreakpoint();
if (CurrentBreakpoint !== 'Big-Phone' && CurrentBreakpoint !== 'Small-Phone') {
    window.right_panel.style.width = '60%';
    window.right_panel.style.top = '90px';
    window.right_panel.style.left = '40%';
    window.right_panel.style.right = '';
    window.right_panel.style.bottom = '10%';
}
var doc = altrpHelpers.getDataByPath('altrppagestate._list__current_row');
var mode = 'show';
if (appStore.getState().currentUser.data.roles.filter(i=>i.display_name == 'Z_RsuAllDistrict' || i.display_name == 'Z_RsuDistrictChief' || i.display_name == 'Z_Admin').length > 0 && appStore.getState().currentDataStorage.data.approve_all?.result != 1)
	mode = 'edit';
var work_info = {
	mode: mode,
	doc: doc,
	form: 'form_info'
};
altrpHelpers.setDataByPath('altrppagestate.selected_obj', work_info.doc);
altrpHelpers.setDataByPath('altrppagestate.uip_number', work_info.doc.uip_number); //Чтобы работали условные visible, disable
altrpHelpers.setDataByPath('altrppagestate.temporary_number', work_info.doc.temporary_number);
altrpHelpers.setDataByPath('altrppagestate.form_info', work_info);
ResetValuesOnForm('form_info');
ResetValuesOnForm('form_info_');
ResetValuesOnForm('obj_info');
ResetValuesOnForm('obj_info_');
ResetValuesOnForm('popup');
//altrpHelpers.setDataByPath('altrpforms.form_info.boss_user_id', altrpHelpers.getDataByPath('altrppagestate.form_info.doc.boss_user_id'));
altrpHelpers.setDataByPath('altrppagestate.altrpforms_boss', altrpHelpers.getDataByPath('altrpforms.boss'));
appStore.getState().formsStore.changedField = null;