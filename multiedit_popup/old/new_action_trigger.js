//uzik_snos_popup action trigger
window.init_popup = async function()
{
	//var fi = altrpHelpers.getDataByPath('altrppagestate.popup_info');
    var fi = altrpHelpers.getDataByPath('altrpdata.current_table');
	var assets = fi.rows;
    console.log(assets);
	var assets_ids = assets.map(i=>Number(i.id));
	//assets_ids = assets_ids.filter(i=>i!=41925);
	//var letters_to_dgi = fi.doc.letters_to_dgi;
	//var letters_pp = fi.doc.letters_pp;
	//var letters_to_zak = fi.doc.letters_to_zak;
	
	
	altrpHelpers.setDataByPath('altrppagestate.assets', 1);
	altrpHelpers.setDataByPath('altrppagestate.assets', assets);
	//altrpHelpers.getComponentByElementId('assets_table').forceUpdate();
	
	var edit_type = altrpHelpers.getDataByPath('altrppagestate.edit_type');

    switch(edit_type) {
        case 'pp':
            altrpHelpers.setDataByPath('altrppagestate.caption', 'Заявка от ПП по сносу');
            altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'PP');
            altrpHelpers.setDataByPath('altrppagestate.letter_type', 'Письмо в IRM');
            var id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
            window.add_letter.style.display = 'block';
            window.add_letter.style.position = 'fixed';
            window.add_letter.style.zIndex = '999999';
            window.add_letter.style.top = '0px';
            window.add_letter.style.left = '0px';
            window.add_letter.getElementsByClassName('altrp-column')[0].style.minHeight = (document.getElementsByClassName('popup-content')[0].clientHeight) + 'px';
            window.add_letter.getElementsByClassName('altrp-column')[0].style.minWidth = (document.getElementsByClassName('popup-content')[0].clientWidth) + 'px';

            var assets = altrpHelpers.getDataByPath('altrppagestate.assets');
            var assets_empty = assets.filter(i=>(!i.Заявки_от_ПП_по_сносу?.bd_grid_display && !i.Заявки_от_ПП_по_сносу?.comment && !i.Заявки_от_ПП_по_сносу?.rd_grid_display));
            var options = [];
            options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
            if (assets_empty.length != assets.length && assets_empty.length > 0)
                options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
            options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
            altrpHelpers.setDataByPath('altrppagestate.options', options);
            altrpHelpers.setDataByPath('altrppagestate.curr_bd', assets.filter(i=>i.id==id)[0].Заявки_от_ПП_по_сносу);
            ResetValuesOnForm('bd_letter');
            ResetValuesOnForm('bd_letter_');
            WidgetCalculate('bd_letter_', 'date_str');
            break;
        case 'dgi':
            altrpHelpers.setDataByPath('altrppagestate.caption', 'Письмо в ДГИ о выпуске РД');
            altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'DGI');
            altrpHelpers.setDataByPath('altrppagestate.letter_type', 'Письмо в IRM');
            var id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
            window.add_letter.style.display = 'block';
            window.add_letter.style.position = 'fixed';
            window.add_letter.style.zIndex = '999999';
            window.add_letter.style.top = '0px';
            window.add_letter.style.left = '0px';
            window.add_letter.getElementsByClassName('altrp-column')[0].style.minHeight = (document.getElementsByClassName('popup-content')[0].clientHeight) + 'px';
            window.add_letter.getElementsByClassName('altrp-column')[0].style.minWidth = (document.getElementsByClassName('popup-content')[0].clientWidth) + 'px';

            var assets = altrpHelpers.getDataByPath('altrppagestate.assets');
            var assets_empty = assets.filter(i=>(!i.dgi?.bd_grid_display && !i.dgi?.comment && !i.dgi?.rd_grid_display));
            var options = [];
            options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
            if (assets_empty.length != assets.length && assets_empty.length > 0)
                options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
            options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
            altrpHelpers.setDataByPath('altrppagestate.options', options);
            altrpHelpers.setDataByPath('altrppagestate.curr_bd', assets.filter(i=>i.id==id)[0].dgi);
            ResetValuesOnForm('bd_letter');
            ResetValuesOnForm('bd_letter_');
            WidgetCalculate('bd_letter_', 'date_str');
            break;
        case 'zak':
            altrpHelpers.setDataByPath('altrppagestate.caption', 'Письмо заказчику по сносу');
            altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'ZAK');
            altrpHelpers.setDataByPath('altrppagestate.letter_type', 'Письмо в IRM');
            var id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
            window.add_letter.style.display = 'block';
            window.add_letter.style.position = 'fixed';
            window.add_letter.style.zIndex = '999999';
            window.add_letter.style.top = '0px';
            window.add_letter.style.left = '0px';
            window.add_letter.getElementsByClassName('altrp-column')[0].style.minHeight = (document.getElementsByClassName('popup-content')[0].clientHeight) + 'px';
            window.add_letter.getElementsByClassName('altrp-column')[0].style.minWidth = (document.getElementsByClassName('popup-content')[0].clientWidth) + 'px';

            var assets = altrpHelpers.getDataByPath('altrppagestate.assets');
            var assets_empty = assets.filter(i=>(!i.zak?.bd_grid_display && !i.zak?.comment && !i.zak?.rd_grid_display));
            var options = [];
            options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
            if (assets_empty.length != assets.length && assets_empty.length > 0)
                options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
            options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
            altrpHelpers.setDataByPath('altrppagestate.options', options);
            altrpHelpers.setDataByPath('altrppagestate.curr_bd', assets.filter(i=>i.id==id)[0].zak);
            ResetValuesOnForm('bd_letter');
            ResetValuesOnForm('bd_letter_');
            WidgetCalculate('bd_letter_', 'date_str');
            break;
    }


	InitPopupFunctions({
		validate: async function(){
			var ret = [];
				//Сбор данных из гриды и преобразование
				var assets = altrpHelpers.getDataByPath('altrppagestate.assets');
				var pps = [];
				var dgis = [];
				var zaks = [];
				assets.forEach(a=>{
					var pp = {...a.pp};
					if (pp.bd_grid_display || pp.comment){
						delete pp.bd_grid_display;
						var ppi = pps.filter(p=>p._id_ == JSON.stringify(pp))[0];
						if (!ppi){
							ppi = pp;
							ppi._id_ = JSON.stringify(pp);
							ppi.kadastrs = [];
							pps.push(ppi);        
						}
						ppi.kadastrs.push(a.id);
					}
					var dgi = {...a.dgi};
					if (dgi.bd_grid_display || dgi.comment || dgi.rd_grid_display){
						delete dgi.bd_grid_display;
						delete dgi.rd_grid_display;
						var dgii = dgis.filter(p=>p._id_ == JSON.stringify(dgi))[0];
						if (!dgii){
							dgii = dgi;
							dgii._id_ = JSON.stringify(dgi);
							dgii.kadastrs = [];
							dgis.push(dgii);        
						}
						dgii.kadastrs.push(a.id);
					}   
					var zak = {...a.zak};
					if (zak.bd_grid_display || zak.comment){
						delete zak.bd_grid_display;
						var zaki = zaks.filter(p=>p._id_ == JSON.stringify(zak))[0];
						if (!zaki){
							zaki = zak;
							zaki._id_ = JSON.stringify(zak);
							zaki.kadastrs = [];
							zaks.push(zaki);        
						}
						zaki.kadastrs.push(a.id);
					}    
				});
				pps.map(i=>delete i._id_);
				dgis.map(i=>delete i._id_);
				zaks.map(i=>delete i._id_);
				altrpHelpers.setDataByPath('altrpforms.edit_form.letters_pp', pps);
				altrpHelpers.setDataByPath('altrpforms.edit_form.letters_to_dgi', dgis);
				altrpHelpers.setDataByPath('altrpforms.edit_form.letters_to_zak', zaks);
			return ret;
		},
		afterChange: async function(button, id){
			var f = altrpHelpers.getDataByPath('altrpforms.edit_form');
			if (button == 'save' || button == 'duplicate'){
				setPageParams('id', null);
			}
			/*else if (button == 'add_and_continue'){
				alert('Новая кадастровая карточка успешно добавлена.');
			}
			else if (button == 'duplicate'){
				altrpHelpers.setDataByPath('altrpforms.edit_form.kadastr_number', null);
				altrpHelpers.setDataByPath('altrpforms.edit_form.egrn_number', null);
				altrpHelpers.setDataByPath('altrpforms.edit_form.cert_num', null);
				altrpHelpers.setDataByPath('altrpforms.edit_form.egrn_date', null);
				altrpHelpers.setDataByPath('altrpforms.edit_form.file_id', null);
				altrpHelpers.setDataByPath('altrpforms.edit_form.file_on_network_drive', null);
				altrpHelpers.setDataByPath('altrppagestate.popup_info.doc', null);
			}
			if (f.uzik_arenda_id > 0)
				await UpdateDataSource('kadastrs');
			else{
				var t = altrpHelpers.getDataByPath('altrppagestate.altdata.tables');
				Object.keys(t).forEach(id=>t[id].context.updateDataWithCurrentQuery());	//Рефреш таблицы
			}*/
		}
	});
};
