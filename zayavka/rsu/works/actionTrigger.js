//DBLCLICK
altrpHelpers.getComponentByElementId('_list_').updateElement();
let cmp_id = '_list_';
document.getElementById(cmp_id).getElementsByClassName('altrp-table-tbody')[0].addEventListener('dblclick', async function (evt) {
    let n = evt.target;
    let row;
    let tbl = altrpHelpers.getComponentByElementId(cmp_id);
    while (n.parentNode){
        if (n.parentNode.classList?.contains('altrp-table-tr')){
            row = n.parentNode;
			//if (window.last_row != row){
				if (appStore.getState().formsStore.changedField?.startsWith('form_info.')){
					if(!await confirm('На форме есть несохраненные изменения. Вы уверены, что хотите продолжить?'))
						return;
				}				
				var allRows = tbl.elementWrapperRef.current.getElementsByClassName('altrp-table-tr');
				for (let item of allRows) {
					item.style.backgroundColor = '';
					item.style.borderStyle = '';
					item.style.borderWidth = '';
					item.style.borderColor = '';
				}
				row.style.backgroundColor = '#dfe8f6';
				row.style.borderStyle  = 'dotted';
				row.style.borderWidth = '1.2px';
				row.style.borderColor = 'rgba(70, 70, 70, 0.4)';
				let idx = Number(row[Object.keys(row).filter(m=>m.includes('__reactFiber'))[0]].key.replace('row_', ''));
				var tblRow = altrpHelpers.getDataByPath(tbl.props.element.settings.table_datasource)[idx];
				altrpHelpers.setDataByPath('altrppagestate.' + cmp_id + '_current_row', tblRow);
				RaiseActions('hidden_row_click');
				window.last_row = row;
			//}
            break;
        }
        n = n.parentNode;
    }
    //console.log(evt);
}, false);