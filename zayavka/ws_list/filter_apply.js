var filter = altrpHelpers.getDataByPath("altrpforms.filter");

Object.keys(filter).forEach(key => {
  // Проверяем, что значение свойства не пустое (не null и не undefined)
  if (filter[key] !== null && filter[key] !== undefined && filter[key] !== '') {
    // Вызываем setPageParams для непустого свойства
    setPageParams(key, filter[key]);
  }
});

var t = altrpHelpers.getDataByPath('altrppagestate.altdata.tables');
Object.keys(t).forEach(id=>t[id].context.updateData());	//Рефреш таблицы


Object.keys(filter).forEach(key => {
  // Проверяем, что значение свойства не пустое (не null и не undefined)
  if (filter[key] !== null && filter[key] !== undefined && filter[key] !== '') {
    // Вызываем setPageParams для непустого свойства
    setPageParams(key, filter[key]);
  }
});

if (IsWidgetVisible('filter_panel')) {
  ToggleElements('filter_panel');
}