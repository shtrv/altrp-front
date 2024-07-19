let status_id = altrpHelpers.getDataByPath('altrpdata.doc.status_id');

if (status_id == 1) {
        InitPopup({
            model:'uzik_kadastrs',
            form:'edit_form',
            mode:'edit',
            docpath:'altrpdata.doc'
        });
} else if (status_id == 2) {
        InitPopup({
            model:'uzik_kadastrs',
            form:'edit_form',
            mode:'show',
            docpath:'altrpdata.doc'
        });
}

altrpHelpers.setDataByPath('altrppagestate.popup_info.kadastr_owner_mode', 1); //Форма в режиме собственности