//Action Добавить документ
window.add_doc = async function(){
	if(!ValidateFormDefault('bd_letter', 'edit')){
		window.last_validation_field?.reportValidity();
		altrpHelpers.setDataByPath('altrppagestate.in_wait', 0);
		return;
	}
	window.add_letter.style.display = 'none';
	var assets = [...altrpHelpers.getDataByPath('altrppagestate.assets')];
	var id = altrpHelpers.getDataByPath('altrppagestate.curr_asset_id');
	var bd = altrpHelpers.getDataByPath('altrpforms.bd_letter');
	var mode = altrpHelpers.getDataByPath('altrppagestate.letter_mode');
	var pp;
	var dgi;
	var zak;
	if (mode == 'PP'){
		pp = {
			bd_id: bd.id,
			bd_date: bd.date,
			bd_title: bd.title,
			bd_number: bd.number,
			comment: bd.comment?.trim() 
		};
		pp.bd_grid_display = (pp.bd_number ?? '') + (pp.bd_date ? ' от ' + (new Date(pp.bd_date)).toLocaleDateString() : '');
	}
	else if (mode == 'DGI'){
		dgi = {
			bd_id: bd.id,
			bd_date: bd.date,
			bd_title: bd.title,
			bd_number: bd.number,
			rd_number: bd.rd_number,
			rd_date: bd.rd_date,
			comment: bd.comment?.trim()
		};
		dgi.bd_grid_display = (dgi.bd_number ?? '') + (dgi.bd_date ? ' от ' + (new Date(dgi.bd_date)).toLocaleDateString() : '');
		dgi.rd_grid_display = (dgi.rd_number ?? '') + (dgi.rd_date ? ' от ' + (new Date(dgi.rd_date)).toLocaleDateString() : '');
	}
	else if (mode == 'ZAK'){
		zak = {
			bd_id: bd.id,
			bd_date: bd.date,
			bd_title: bd.title,
			bd_number: bd.number,
			comment: bd.comment?.trim()
		};
		zak.bd_grid_display = (zak.bd_number ?? '') + (zak.bd_date ? ' от ' + (new Date(zak.bd_date)).toLocaleDateString() : '');
	}
	var v = [];
	if (bd.edit == 1)
		v = assets.filter(i=>i.id == id);
	else if (bd.edit == 2 && mode == 'PP')
		v = assets.filter(i=>(!i.pp?.bd_grid_display && !i.pp?.comment && !i.pp?.rd_grid_display) || i.id == id);
	else if (bd.edit == 2 && mode == 'DGI')
		v = assets.filter(i=>(!i.dgi?.bd_grid_display && !i.dgi?.comment && !i.dgi?.rd_grid_display) || i.id == id);
	else if (bd.edit == 2 && mode == 'ZAK')
		v = assets.filter(i=>(!i.zak?.bd_grid_display && !i.zak?.comment && !i.zak?.rd_grid_display) || i.id == id);
	else if (bd.edit == 3)
		v = assets;
	v.forEach(v=>{
		if (pp)
			v.pp = pp;
		if (dgi)
			v.dgi = dgi;
		if (zak)
			v.zak = zak;
	});
	altrpHelpers.setDataByPath('altrppagestate.assets', 1);
	await altrpHelpers.getComponentByElementId('assets_table').forceUpdate();
	altrpHelpers.setDataByPath('altrppagestate.assets', assets);
	await altrpHelpers.getComponentByElementId('assets_table').forceUpdate();
	altrpHelpers.getAppContext().data.altrpforms.changedField = 'edit_form.object_name';
}