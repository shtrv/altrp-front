var jsonData = altrpHelpers.getDataByPath('altrpforms.stage.json_data') || {};
var fire = jsonData.fire || {};

fire[this.data._element.settings.field_id] = this.data._element.getValue();

jsonData.fire = fire;

altrpHelpers.setDataByPath('altrpforms.stage.json_data', jsonData);



{{{}}} ?? altrpHelpers.getDataByPath('altrpforms.stage.json_data.fire.' + this.props.element.settings.field_id)


var jsonData = altrpHelpers.getDataByPath('altrpforms.stage.json_data') || {};
var fire = jsonData.fire || {};

if (this.data._element.getValue() == 0) {
    fire = {};
    fire[this.data._element.settings.field_id] = this.data._element.getValue();
} else {
    fire[this.data._element.settings.field_id] = this.data._element.getValue();
}


jsonData.fire = fire;

altrpHelpers.setDataByPath('altrpforms.stage.json_data', jsonData);