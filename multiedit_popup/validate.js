window.validate_snos_fields = async function() {

    var bd_letter = altrpHelpers.getDataByPath('altrpforms.bd_letter');
    var bd_snos = altrpHelpers.getDataByPath('altrpforms.bd_snos');
    var edit_type = altrpHelpers.getDataByPath('altrppagestate.edit_type');

    let isValid = 1;

    switch(edit_type) {
        case 'pp': 

            if (!bd_letter.id) {
                console.error("Ошибка валидации: Поле 'id' не должно быть пустым");
                isValid = 0;
            }

            if (!bd_letter.number) {
                console.error("Ошибка валидации: Поле 'number' не должно быть пустым");
                isValid = 0;
            }

            if (!bd_letter.date) {
                console.error("Ошибка валидации: Поле 'date' не должно быть пустым");
                isValid = 0;
            }

            break;

        case 'dgi':

            if (!bd_letter.id) {
                console.error("Ошибка валидации: Поле 'id' не должно быть пустым");
                isValid = 0;
            }

            if (!bd_letter.number) {
                console.error("Ошибка валидации: Поле 'number' не должно быть пустым");
                isValid = 0;
            }

            if (!bd_letter.date) {
                console.error("Ошибка валидации: Поле 'date' не должно быть пустым");
                isValid = 0;
            }

            if ((bd_letter.rd_number && !bd_letter.rd_date) || (!bd_letter.rd_number && bd_letter.rd_date)) {
                console.error("Ошибка валидации: Поля 'rd_number' и 'rd_date' должны быть заполнены либо оба, либо ни одно из них");
                isValid = 0;
            }

            break;

        case 'zak':

            if (!bd_letter.id) {
                console.error("Ошибка валидации: Поле 'id' не должно быть пустым");
                isValid = 0;
            }

            if (!bd_letter.number) {
                console.error("Ошибка валидации: Поле 'number' не должно быть пустым");
                isValid = 0;
            }

            if (!bd_letter.date) {
                console.error("Ошибка валидации: Поле 'date' не должно быть пустым");
                isValid = 0;
            }

            break;

        case 'snos':

            if (!bd_snos.status) {
                console.error("Ошибка валидации: Поле 'status' не должно быть пустым");
                isValid = 0;
            }

            if (!bd_snos.obj_name) {
                console.error("Ошибка валидации: Поле 'obj_name' не должно быть пустым");
                isValid = 0;
            }

            if (!bd_snos.customer) {
                console.error("Ошибка валидации: Поле 'customer' не должно быть пустым");
                isValid = 0;
            }

            break;

        default:
            break;

    }


    if (isValid) {
        console.log("Форма прошла валидацию.");
    } else {
        console.error("Форма не прошла валидацию.");
    }

    altrpHelpers.setDataByPath('altrppagestate.snos_fields.validate_result', isValid);

}