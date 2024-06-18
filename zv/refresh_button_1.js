//Определяем, установлен ли в данный момент фильтр
function clean(obj) {
    var propNames = Object.getOwnPropertyNames(obj);
    for (var i = 0; i < propNames.length; i++) {
      var propName = propNames[i];
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
        delete obj[propName];
      }
    }
  }
  var v_current = altrpHelpers.getDataByPath('altrpmeta.zvfilter');
  clean(v_current);
  altrpHelpers.setDataByPath('altrpmeta.zvfilter', null);
  ResetValuesOnForm('filter');
  saveFormValuesToPageMeta('filter', 'zvfilter');
  var v_default = altrpHelpers.getDataByPath('altrpmeta.zvfilter');
  clean(v_default);
  altrpHelpers.setDataByPath('altrpmeta.zvfilter', v_current);
  ResetValuesOnForm('filter');
  if (altrpHelpers.altrpCompare(v_current, v_default, '=='))
      altrpHelpers.setDataByPath('altrppagestate.is_filtered', null);
  else
      altrpHelpers.setDataByPath('altrppagestate.is_filtered', 1);