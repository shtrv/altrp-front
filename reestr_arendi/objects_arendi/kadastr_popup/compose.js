// Получение данных из объекта altrpforms по указанным путям
var pp = altrpHelpers.getDataByPath('altrpforms.edit_snos_fields_pp');
var dgi = altrpHelpers.getDataByPath('altrpforms.edit_snos_fields_dgi');
var zak = altrpHelpers.getDataByPath('altrpforms.edit_snos_fields_zak');
var snos = altrpHelpers.getDataByPath('altrpforms.edit_snos_fields_snos');

// Создание нового объекта с проверкой на не пустое bd_date
var compose_snos_fields = {};

if (pp && pp.bd_date !== '') {
  compose_snos_fields.pp = pp;
}
if (dgi && dgi.bd_date !== '') {
  compose_snos_fields.dgi = dgi;
}
if (zak && zak.bd_date !== '') {
  compose_snos_fields.zak = zak;
}
if (snos && snos.bd_date !== '') {
  compose_snos_fields.snos = snos;
}

// Логирование объекта в консоль для проверки
console.log(compose_snos_fields);

// Установка данных по указанному пути в объекте altrpforms
altrpHelpers.setDataByPath('altrpforms.edit_form.snos_fields', compose_snos_fields);