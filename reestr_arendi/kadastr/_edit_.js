let status_id = altrpHelpers.getDataByPath('altrpforms.filter.status_id');

switch (status_id){
    case 1:
        InitPopup({
            model:'uzik_kadastrs',
            form:'edit_form',
            mode:'edit',
            docpath:'altrpdata.doc'
        });
        break;
    case 2:
        InitPopup({
            model:'uzik_kadastrs',
            form:'edit_form',
            mode:'show',
            docpath:'altrpdata.doc'
        });
        break;
    default:
        break;
}

altrpHelpers.setDataByPath('altrppagestate.popup_info.kadastr_owner_mode', 1); //Форма в режиме собственности