let cmp_id = '_table_result_';
document.getElementById(cmp_id).getElementsByClassName('altrp-table-tbody')[0].addEventListener('dblclick', function (evt) {
    let n = evt.target;
    let row;
    let tbl = altrpHelpers.getComponentByElementId(cmp_id);
    while (n.parentNode){
        if (n.parentNode.classList?.contains('altrp-table-tr')){
            row = n.parentNode;
            var allRows = tbl.elementWrapperRef.current.getElementsByClassName('altrp-table-tr');
            let idx = Number(row[Object.keys(row).filter(m=>m.includes('__reactFiber'))[0]].key.replace('row_', ''));
            var tblRow = altrpHelpers.getDataByPath(tbl.props.element.settings.table_datasource)[idx];
			console.log(tblRow);
            altrpHelpers.setDataByPath('altrppagestate.selected_obj', tblRow);
			RaiseActions('_SELECT_OBJ_');
            break;
        }
        n = n.parentNode;
    }
}, false);

if (!altrpHelpers.getDataByPath('altrpdata.obj_list.length'))
	altrpHelpers.setDataByPath('altrppagestate.show_empty', 1);