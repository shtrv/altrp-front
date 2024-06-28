window.validate_snos_fields = async function() {

    var edit_snos_fields_dgi = altrpHelpers.getDataByPath('altrpforms.edit_snos_fields_dgi');
    var edit_snos_fields_snos = altrpHelpers.getDataByPath('altrpforms.edit_snos_fields_snos');

    let isValid = 1;


 

    if (!edit_snos_fields_snos.status) {
        console.error("Ошибка валидации: Поле 'status' не должно быть пустым");
        isValid = 0;
    }

    if (!edit_snos_fields_snos.customer) {
        console.error("Ошибка валидации: Поле 'status' не должно быть пустым");
        isValid = 0;
    }

    if ((edit_snos_fields_dgi.rd_number && !edit_snos_fields_dgi.rd_date) || (!edit_snos_fields_dgi.rd_number && edit_snos_fields_dgi.rd_date)) {
        console.error("Ошибка валидации: Поля 'rd_number' и 'rd_date' должны быть заполнены либо оба, либо ни одно из них");
        isValid = 0;
    }

    if (isValid) {
        console.log("Форма прошла валидацию.");
    } else {
        console.error("Форма не прошла валидацию.");
    }

    altrpHelpers.setDataByPath('altrppagestate.snos_fields.validate_result', isValid);

}