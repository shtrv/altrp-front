// Функция для извлечения параметров из текущей ссылки и записи их через altrpHelpers.setDataByPath
function getURLParametersAndSetData() {
    let queryString = window.location.search.slice(1); // Получаем строку параметров после знака '?'
    let params = new URLSearchParams(queryString); // Создаем объект URLSearchParams для работы с параметрами

    // Перебираем все параметры и записываем их через altrpHelpers.setDataByPath
    for (let param of params) {
        altrpHelpers.setDataByPath(`altrppagestate.current_table.${param[0]}`, param[1]);
    }
}

// Получаем все параметры из текущей ссылки и записываем их через altrpHelpers.setDataByPath
getURLParametersAndSetData();