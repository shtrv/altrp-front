window.update_form_snos_fields = async function() {

    var edit_type = altrpHelpers.getDataByPath('altrppagestate.edit_type');

    CorrectAllWidgets();

    switch(edit_type) {
        case 'pp':
            ResetValuesOnForm('bd_letter');
            ResetValuesOnForm('bd_letter_');
            WidgetCalculate('bd_letter_', 'date_str');
            break;
        case 'dgi':
            ResetValuesOnForm('bd_letter');
            ResetValuesOnForm('bd_letter_');
            WidgetCalculate('bd_letter_', 'date_str');
            break;
        case 'zak':
            ResetValuesOnForm('bd_letter');
            ResetValuesOnForm('bd_letter_');
            WidgetCalculate('bd_letter_', 'date_str');
            break;
        case 'snos':
            ResetValuesOnForm('bd_snos');
            break;
    }
}
