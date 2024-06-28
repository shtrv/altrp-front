window.prepare_snos_fields = async function() {
    
    var assets = altrpHelpers.getDataByPath('altrppagestate.assets');
    var curr_asset_id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
    var bd = altrpHelpers.getDataByPath('altrpforms.bd_letter');
    var bd_snos = altrpHelpers.getDataByPath('altrpforms.bd_snos');
    var edit_type = altrpHelpers.getDataByPath('altrppagestate.edit_type');
       
    if (bd.edit == 1) {
        let asset = assets.find(asset => asset.id === curr_asset_id);
    
        if (asset) {
            // Проверяем, существует ли уже snos_fields, и если нет, создаем пустой объект
            if (!asset.snos_fields) {
                asset.snos_fields = {};
            }

            switch (edit_type) {
                case "pp":
                    asset.snos_fields.pp = {
                        bd_id: bd.id,
                        bd_date: bd.date,
                        bd_title: bd.title,
                        bd_number: bd.number,
                        comment: bd.comment?.trim()
                    };
                    break;
                case "dgi":
                    asset.snos_fields.dgi = {
                        bd_id: bd.id,
                        bd_date: bd.date,
                        bd_title: bd.title,
                        bd_number: bd.number,
                        rd_number: bd.rd_number,
                        rd_date: bd.rd_date,
                        comment: bd.comment?.trim()
                    };
                    break;
                case "zak":
                    asset.snos_fields.zak = {
                        bd_id: bd.id,
                        bd_date: bd.date,
                        bd_title: bd.title,
                        bd_number: bd.number,
                        comment: bd.comment?.trim()
                    };
                    break;
                case "snos":
                    asset.snos_fields.snos = {
                        status: bd_snos.status,
                        obj_name: bd_snos.obj_name,
                        customer: bd_snos.customer,
                        comment: bd_snos.comment?.trim()
                    };
                    break;
                default:
                    break;
            }
            asset = [asset];
            altrpHelpers.setDataByPath('altrppagestate.assets_to_db_bulk', asset);
            //RaiseActions('_SNOS_PUT_');
        } else {
            console.log("Asset not found with id:", curr_asset_id);
        }
    } else if (bd.edit == 2) {
        switch (edit_type) {
            case "pp":
                var assets_empty = assets.filter(item => (
                    !item.snos_fields?.pp?.bd_id && 
                    !item.snos_fields?.pp?.bd_date && 
                    !item.snos_fields?.pp?.bd_title && 
                    !item.snos_fields?.pp?.bd_number && 
                    !item.snos_fields?.pp?.comment
                ) || item.id == curr_asset_id);
                assets_empty.forEach(asset => {
                    // Проверяем, существует ли уже snos_fields, и если нет, создаем пустой объект
                    if (!asset.snos_fields) {
                        asset.snos_fields = {};
                    }
                    asset.snos_fields.pp = {
                        bd_id: bd.id,
                        bd_date: bd.date,
                        bd_title: bd.title,
                        bd_number: bd.number,
                        comment: bd.comment?.trim()
                    };
                });
                break;
            case "dgi":
                var assets_empty = assets.filter(item => (
                    !item.snos_fields?.dgi?.bd_id && 
                    !item.snos_fields?.dgi?.bd_date && 
                    !item.snos_fields?.dgi?.bd_title && 
                    !item.snos_fields?.dgi?.bd_number && 
                    !item.snos_fields?.dgi?.rd_number &&
                    !item.snos_fields?.dgi?.rd_date &&
                    !item.snos_fields?.dgi?.comment
                ) || item.id == curr_asset_id);
                assets_empty.forEach(asset => {
                    // Проверяем, существует ли уже snos_fields, и если нет, создаем пустой объект
                    if (!asset.snos_fields) {
                        asset.snos_fields = {};
                    }
                    asset.snos_fields.dgi = {
                        bd_id: bd.id,
                        bd_date: bd.date,
                        bd_title: bd.title,
                        bd_number: bd.number,
                        comment: bd.comment?.trim()
                    };
                });
                break;
            case "zak":
                var assets_empty = assets.filter(item => (
                    !item.snos_fields?.zak?.bd_id && 
                    !item.snos_fields?.zak?.bd_date && 
                    !item.snos_fields?.zak?.bd_title && 
                    !item.snos_fields?.zak?.bd_number && 
                    !item.snos_fields?.zak?.comment
                ) || item.id == curr_asset_id);
                assets_empty.forEach(asset => {
                    // Проверяем, существует ли уже snos_fields, и если нет, создаем пустой объект
                    if (!asset.snos_fields) {
                        asset.snos_fields = {};
                    }
                    asset.snos_fields.zak = {
                        bd_id: bd.id,
                        bd_date: bd.date,
                        bd_title: bd.title,
                        bd_number: bd.number,
                        comment: bd.comment?.trim()
                    };
                });
                break;
            case "snos":
                var assets_empty = assets.filter(item => (
                    !item.snos_fields?.snos?.status && 
                    !item.snos_fields?.snos?.obj_name && 
                    !item.snos_fields?.snos?.customer && 
                    !item.snos_fields?.snos?.comment
                ) || item.id == curr_asset_id);
                assets_empty.forEach(asset => {
                    // Проверяем, существует ли уже snos_fields, и если нет, создаем пустой объект
                    if (!asset.snos_fields) {
                        asset.snos_fields = {};
                    }
                    asset.snos_fields.snos = {
                        status: bd_snos.status,
                        obj_name: bd_snos.obj_name,
                        customer: bd_snos.customer,
                        comment: bd_snos.comment?.trim()
                    };
                });
                break;
            default:
                break;
        }
        altrpHelpers.setDataByPath('altrppagestate.assets_to_db_bulk', assets_empty);
        //RaiseActions('_SNOS_PUT_BULK_');
    } else if (bd.edit == 3) {
        assets.forEach(asset => {
            // Проверяем, существует ли уже snos_fields, и если нет, создаем пустой объект
            if (!asset.snos_fields) {
                asset.snos_fields = {};
            }

            switch (edit_type) {
                case "pp":
                    asset.snos_fields.pp = {
                        bd_id: bd.id,
                        bd_date: bd.date,
                        bd_title: bd.title,
                        bd_number: bd.number,
                        comment: bd.comment?.trim()
                    };
                    break;
                case "dgi":
                    asset.snos_fields.dgi = {
                        bd_id: bd.id,
                        bd_date: bd.date,
                        bd_title: bd.title,
                        bd_number: bd.number,
                        rd_number: bd.rd_number,
                        rd_date: bd.rd_date,
                        comment: bd.comment?.trim()
                    };
                    break;
                case "zak":
                    asset.snos_fields.zak = {
                        bd_id: bd.id,
                        bd_date: bd.date,
                        bd_title: bd.title,
                        bd_number: bd.number,
                        comment: bd.comment?.trim()
                    };
                    break;
                case "snos":
                    asset.snos_fields.snos = {
                        status: bd_snos.status,
                        obj_name: bd_snos.obj_name,
                        customer: bd_snos.customer,
                        comment: bd_snos.comment?.trim()
                    };
                    break;
                default:
                    break;
            }
        });

        altrpHelpers.setDataByPath('altrppagestate.assets_to_db_bulk', assets);
        //RaiseActions('_SNOS_PUT_BULK_');
    }
    
    //console.log(assets); // Выводим обновленный массив assets
}