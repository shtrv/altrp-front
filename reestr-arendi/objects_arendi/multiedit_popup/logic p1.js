window.prepare_edit_snos_fields = async function() {

    //Получаем snos_fields текущих строк и записываем в altrppagestate.assets
    var raw_assets = altrpHelpers.getDataByPath('altrppagestate.altdata.tables.544d06c5-08eb-406a-ab90-56a457a7a9b7.context.data.rows');
    var assets = raw_assets.map(({ id, snos_fields }) => ({ id: id.toString(), snos_fields }));
    altrpHelpers.setDataByPath('altrppagestate.assets', 1);
    altrpHelpers.setDataByPath('altrppagestate.assets', assets);

    var curr_asset_id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
    var snos_fields = assets.find(asset => asset.id === curr_asset_id)?.snos_fields || {};  // Для текущего asset_id
    var pp = snos_fields.pp ? snos_fields.pp : {};
    var dgi = snos_fields.dgi ? snos_fields.dgi : {};
    var zak = snos_fields.zak ? snos_fields.zak : {};
    var snos = snos_fields ? snos_fields.snos : {};
    var edit_type = altrpHelpers.getDataByPath('altrppagestate.edit_type');


    switch(edit_type) {
        case 'pp':
            altrpHelpers.setDataByPath('altrppagestate.caption', 'Заявка от ПП по сносу');
            altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'PP');
            altrpHelpers.setDataByPath('altrppagestate.letter_type', 'Письмо в IRM');
            altrpHelpers.setDataByPath('altrppagestate.caption_save_button', 'Добавить документ');
            altrpHelpers.setDataByPath('altrppagestate.remark', 'Примечание');
            
            var assets_empty = assets.filter(item => (
                !item.snos_fields?.pp?.bd_id && 
                !item.snos_fields?.pp?.bd_date && 
                !item.snos_fields?.pp?.bd_title && 
                !item.snos_fields?.pp?.bd_number && 
                !item.snos_fields?.pp?.comment
            ));
            var options = [];
            options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
            if (assets_empty.length != assets.length && assets_empty.length > 0)
                options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
            if (assets.length > 1)
                options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
            altrpHelpers.setDataByPath('altrppagestate.options', options);
            altrpHelpers.setDataByPath('altrppagestate.curr_bd', pp);

            break;
        case 'dgi':
            altrpHelpers.setDataByPath('altrppagestate.caption', 'Письмо в ДГИ о выпуске РД');
            altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'DGI');
            altrpHelpers.setDataByPath('altrppagestate.letter_type', 'Письмо в IRM');
            altrpHelpers.setDataByPath('altrppagestate.caption_save_button', 'Добавить документ');
            altrpHelpers.setDataByPath('altrppagestate.remark', 'Примечание');
            
            var assets_empty = assets.filter(item => (
                !item.snos_fields?.dgi?.bd_id && 
                !item.snos_fields?.dgi?.bd_date && 
                !item.snos_fields?.dgi?.bd_title && 
                !item.snos_fields?.dgi?.bd_number && 
                !item.snos_fields?.dgi?.rd_number &&
                !item.snos_fields?.dgi?.rd_date &&
                !item.snos_fields?.dgi?.comment
            ));
            var options = [];
            options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
            if (assets_empty.length != assets.length && assets_empty.length > 0)
                options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
            if (assets.length > 1)    
                options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
            altrpHelpers.setDataByPath('altrppagestate.options', options);
            altrpHelpers.setDataByPath('altrppagestate.curr_bd', dgi);

            break;
        case 'zak':
            altrpHelpers.setDataByPath('altrppagestate.caption', 'Письмо заказчику по сносу');
            altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'ZAK');
            altrpHelpers.setDataByPath('altrppagestate.letter_type', 'Письмо в IRM');
            altrpHelpers.setDataByPath('altrppagestate.caption_save_button', 'Добавить документ');
            altrpHelpers.setDataByPath('altrppagestate.remark', 'Примечание по взаимодействию с заказчиками по сносу');
            
            var assets_empty = assets.filter(item => (
                !item.snos_fields?.zak?.bd_id && 
                !item.snos_fields?.zak?.bd_date && 
                !item.snos_fields?.zak?.bd_title && 
                !item.snos_fields?.zak?.bd_number && 
                !item.snos_fields?.zak?.comment
            ));
            var options = [];
            options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
            if (assets_empty.length != assets.length && assets_empty.length > 0)
                options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
            if (assets.length > 1)
                options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
            altrpHelpers.setDataByPath('altrppagestate.options', options);
            altrpHelpers.setDataByPath('altrppagestate.curr_bd', zak);

            break;
        case 'snos':
            altrpHelpers.setDataByPath('altrppagestate.caption', 'Объект сноса');
            altrpHelpers.setDataByPath('altrppagestate.letter_mode', 'SNOS');
            altrpHelpers.setDataByPath('altrppagestate.caption_save_button', 'Сохранить');

            var assets_empty = assets.filter(item => (
                !item.snos_fields?.snos?.status && 
                !item.snos_fields?.snos?.obj_name && 
                !item.snos_fields?.snos?.customer && 
                !item.snos_fields?.snos?.comment
            ));
            var options = [];
            options.push({value:1, label: 'Применить только к текущей ячейке (к.н. ' + altrpHelpers.getDataByPath('altrppagestate.curr_asset_kadastr_number') + ')'});
            if (assets_empty.length != assets.length && assets_empty.length > 0)
                options.push({value:2, label: 'Применить к текущей и пустым ячейкам (+' + assets_empty.length + ' шт.)'});
            if (assets.length > 1)
                options.push({value:3, label: 'Применить ко всему столбцу (' + assets.length + ' шт.)'});
            altrpHelpers.setDataByPath('altrppagestate.options', options);
            altrpHelpers.setDataByPath('altrppagestate.curr_bd', snos);

            break;
    }
}
