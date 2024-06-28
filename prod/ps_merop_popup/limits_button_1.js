var price = altrpHelpers.getDataByPath('altrpforms.edit_form.price') || 0;
var round_price = Number(price).toFixed(3);
altrpHelpers.setDataByPath('altrpforms.edit_form.price', round_price);