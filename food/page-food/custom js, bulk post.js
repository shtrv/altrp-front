// Получаем данные из датасоурса food_list
const food_week = altrpHelpers.getDataByPath("altrpdata.food");

// Фильтруем объекты по условию avaliable_status === 1 && item.user_id === null и оставляем только поля date и user_id
const bulk_food_week = food_week
    .filter(item => Number(item.available_status) === 1 && item.user_id === null)
    .map(({ date_id, user_id }) => ({ date_id, user_id }));

// Присваиваем модифицированные данные в переменную altrppagestate.bulk_food_week
altrpHelpers.setDataByPath("altrppagestate.bulk_food_week", bulk_food_week);