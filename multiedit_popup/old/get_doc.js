var doc_data = altrpHelpers.getDataByPath('altrpdata.current_table');
var curr_asset_id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
var doc_current = doc_data.rows.filter(function(item) {
    return doc_data.id === curr_asset_id;
});
altrpHelpers.setDataByPath('altrppagestate.doc_current', doc_current);


InitPopup({
    model:'uzik_arenda',
    form:'edit_form',
    mode:'edit',
    docpath:'altrppagestate.doc_current'
    });