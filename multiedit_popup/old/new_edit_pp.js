altrpHelpers.setDataByPath('altrppagestate.caption', 'Заявка от ПП по сносу');
altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'PP');
altrpHelpers.setDataByPath('altrppagestate.letter_type', 'Письмо в IRM');
var id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
window.add_letter.style.display = 'block';
window.add_letter.style.position = 'fixed';
window.add_letter.style.zIndex = '999999';
window.add_letter.style.top = '0px';
window.add_letter.style.left = '0px';
window.add_letter.getElementsByClassName('altrp-column')[0].style.minHeight = (document.getElementsByClassName('popup-content')[0].clientHeight) + 'px';
window.add_letter.getElementsByClassName('altrp-column')[0].style.minWidth = (document.getElementsByClassName('popup-content')[0].clientWidth) + 'px';

var assets = altrpHelpers.getDataByPath('altrppagestate.assets');
var assets_empty = assets.filter(i=>(!i.Заявки_от_ПП_по_сносу?.bd_grid_display && !i.Заявки_от_ПП_по_сносу?.comment && !i.Заявки_от_ПП_по_сносу?.rd_grid_display));
var options = [];
options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
if (assets_empty.length != assets.length && assets_empty.length > 0)
	options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
altrpHelpers.setDataByPath('altrppagestate.options', options);
altrpHelpers.setDataByPath('altrppagestate.curr_bd', assets.filter(i=>i.id==id)[0].Заявки_от_ПП_по_сносу);
ResetValuesOnForm('bd_letter');
ResetValuesOnForm('bd_letter_');
WidgetCalculate('bd_letter_', 'date_str');