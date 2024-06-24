window.init_edit_card = async function() {
    
    /*
    //Получаем строки из текущего состояния таблицы, извлекаем их id
    var current_table = altrpHelpers.getDataByPath('altrpdata.current_table');
    var current_table_ids = current_table.rows.map(item => item.id);
    altrpHelpers.setDataByPath('altrppagestate.current_table_ids', current_table_ids);
    */

    //Получаем snos_fields текущих строк и записываем в altrppagestate.assets
    var raw_assets = altrpHelpers.getDataByPath('altrppagestate.altdata.tables.544d06c5-08eb-406a-ab90-56a457a7a9b7.context.data.rows');
    var assets = raw_assets.map(({ id, snos_fields }) => ({ id: id.toString(), snos_fields }));
    altrpHelpers.setDataByPath('altrppagestate.assets', 1);
    altrpHelpers.setDataByPath('altrppagestate.assets', assets);

    //Запись писем в altrpforms.edit_form.XXX
    var curr_asset_id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
    var curr_asset = assets.find(asset => asset.id === curr_asset_id);
    console.log(curr_asset);
    var snos_fields = assets.find(asset => asset.id === curr_asset_id)?.snos_fields || {};
    console.log(snos_fields);
    var pp = snos_fields.pp || {};
    var dgi = snos_fields.dgi || {};
    var zak = snos_fields.zak || {};


    altrpHelpers.setDataByPath('altrpforms.edit_form.letters_pp', pp);
    altrpHelpers.setDataByPath('altrpforms.edit_form.letters_to_dgi', dgi);
    altrpHelpers.setDataByPath('altrpforms.edit_form.letters_to_zak', zak);


    //Отображение карточки
    var edit_type = altrpHelpers.getDataByPath('altrppagestate.edit_type');
    window.add_letter.style.display = 'block';
    window.add_letter.style.position = 'fixed';
    window.add_letter.style.zIndex = '999999';
    window.add_letter.style.top = '0';
    window.add_letter.style.left = '0';
    window.add_letter.style.height = '100%';

    switch(edit_type) {
        case 'pp':
            altrpHelpers.setDataByPath('altrppagestate.caption', 'Заявка от ПП по сносу');
            altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'PP');
            altrpHelpers.setDataByPath('altrppagestate.letter_type', 'Письмо в IRM');
            var id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
                        
            var assets = altrpHelpers.getDataByPath('altrppagestate.assets');
            //var assets_empty = assets.filter(i=>(!i.pp?.bd_grid_display && !i.pp?.comment && !i.pp?.rd_grid_display));
            var assets_empty = assets.filter(item => (
                (!item.snos_fields.pp || (
                    !item.snos_fields.pp.bd_id && 
                    !item.snos_fields.pp.bd_date && 
                    !item.snos_fields.pp.bd_title && 
                    !item.snos_fields.pp.bd_number && 
                    !item.snos_fields.pp.comment
                ))
            ));            
            var options = [];
            options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
            if (assets_empty.length != assets.length && assets_empty.length > 0)
                options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
            options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
            altrpHelpers.setDataByPath('altrppagestate.options', options);
            //altrpHelpers.setDataByPath('altrppagestate.curr_bd', assets.filter(i=>i.id==id)[0].pp);
            altrpHelpers.setDataByPath('altrppagestate.curr_bd', pp);
            ResetValuesOnForm('bd_letter');
            ResetValuesOnForm('bd_letter_');
            WidgetCalculate('bd_letter_', 'date_str');
            break;
        case 'dgi':
            altrpHelpers.setDataByPath('altrppagestate.caption', 'Письмо в ДГИ о выпуске РД');
            altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'DGI');
            altrpHelpers.setDataByPath('altrppagestate.letter_type', 'Письмо в IRM');
            var id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
            
            var assets = altrpHelpers.getDataByPath('altrppagestate.assets');
            var assets_empty = assets.filter(i=>(!i.dgi?.bd_grid_display && !i.dgi?.comment && !i.dgi?.rd_grid_display));
            var options = [];
            options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
            if (assets_empty.length != assets.length && assets_empty.length > 0)
                options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
            options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
            altrpHelpers.setDataByPath('altrppagestate.options', options);
            altrpHelpers.setDataByPath('altrppagestate.curr_bd', dgi);
            ResetValuesOnForm('bd_letter');
            ResetValuesOnForm('bd_letter_');
            WidgetCalculate('bd_letter_', 'date_str');
            break;
        case 'zak':
            altrpHelpers.setDataByPath('altrppagestate.caption', 'Письмо заказчику по сносу');
            altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'ZAK');
            altrpHelpers.setDataByPath('altrppagestate.letter_type', 'Письмо в IRM');
            var id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
            
            var assets = altrpHelpers.getDataByPath('altrppagestate.assets');
            var assets_empty = assets.filter(i=>(!i.zak?.bd_grid_display && !i.zak?.comment && !i.zak?.rd_grid_display));
            var options = [];
            options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
            if (assets_empty.length != assets.length && assets_empty.length > 0)
                options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
            options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
            altrpHelpers.setDataByPath('altrppagestate.options', options);
            altrpHelpers.setDataByPath('altrppagestate.curr_bd', zak);
            ResetValuesOnForm('bd_letter');
            ResetValuesOnForm('bd_letter_');
            WidgetCalculate('bd_letter_', 'date_str');
            break;
    }
}    
    