var frm = altrpHelpers.getDataByPath('altrpforms.edit_form');
var pkk = altrpHelpers.getDataByPath('altrpdata.userinfo.env.rosreestr_url');
var kadastrWithoutLedingZeros = frm.kadastr_number.replaceAll(':0', ':').replaceAll(':0', ':').replaceAll(':0', ':').replaceAll(':0', ':').replaceAll(':0', ':');
var url = pkk.replace('#KADASTR1#', encodeURIComponent(frm.kadastr_number)).replace('#KADASTR2#', encodeURIComponent(kadastrWithoutLedingZeros));
if (!!frm.kadastr_number)
	window.open(url, '_blank');