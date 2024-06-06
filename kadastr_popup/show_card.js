//Action Редактировать снос
window.edit_snos_fields.style.display = 'block';
window.edit_snos_fields.style.position = 'fixed';
window.edit_snos_fields.style.zIndex = '999999';
window.edit_snos_fields.style.top = '0px';
window.edit_snos_fields.style.left = '0px';
window.edit_snos_fields.getElementsByClassName('altrp-column')[0].style.minHeight = (document.getElementsByClassName('popup-content')[0].clientHeight) + 'px';
window.edit_snos_fields.getElementsByClassName('altrp-column')[0].style.minWidth = (document.getElementsByClassName('popup-content')[0].clientWidth) + 'px';

ResetValuesOnForm('edit_snos_fields_pp');
ResetValuesOnForm('edit_snos_fields_dgi');
ResetValuesOnForm('edit_snos_fields_zak');
ResetValuesOnForm('edit_snos_fields_snos');