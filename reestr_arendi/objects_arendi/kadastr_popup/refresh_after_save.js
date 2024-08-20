// Рефреш таблицы asset-rent после сохранения

var currentUrl = window.location.href;

// Проверяем, находится ли пользователь на странице assets-rent
if (currentUrl.includes('assets-rent')) {
    RaiseActions('_refresh_table_');}