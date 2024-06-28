setPageParams(this.data._element.settings.field_id, this.data._element.getValue());
var t = altrpHelpers.getDataByPath('altrppagestate.altdata.tables');
Object.keys(t).forEach(id=>t[id].context.updateData());	//Рефреш таблицы
setPageParams(this.data._element.settings.field_id, this.data._element.getValue());