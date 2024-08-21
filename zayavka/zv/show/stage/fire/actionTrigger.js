var pi = altrpHelpers.getDataByPath('altrppagestate.popup_info');
var parent_validate = pi.validate;
var parent_afterChange = pi.afterChange;
InitPopupFunctions({
	validate: async function(){
		var ret = await parent_validate();
		var fire = altrpHelpers.getDataByPath('altrpforms.fire');

		if (!ValidateFormDefault('fire')) {
            ret.push('Заполните обязательные поля');
        }
		
        if (fire.existence == 1 && !fire.category) {
            ret.push('Укажите категорию пожара');
        }
		
        altrpHelpers.setDataByPath('altrpforms.stage.json_data', fire);

        var existenceText = `Наличие пожара - ${fire.existence ? 'да' : 'нет'}`;
        var categoryText = ` ${fire.category ? fire.category + ' категории' : 'Без категории'}`;
		var display = existenceText + categoryText;
        
        altrpHelpers.setDataByPath('altrpforms.stage.display',  display);
		
        return ret;
	},
	afterChange: async function(button, id){
		await parent_afterChange(button, id);
	}
});