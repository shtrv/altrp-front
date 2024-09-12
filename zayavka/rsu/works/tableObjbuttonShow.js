let cmp_id = '_table_result_';

var tblRow = this.data._element.root.cardModel.data;
altrpHelpers.setDataByPath('altrppagestate.selected_obj', tblRow);

RaiseActions('_SELECT_OBJ_');
