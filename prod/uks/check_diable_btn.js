var p = altrpHelpers.getDataByPath('altrpdata.pits');
var pc = altrpHelpers.getDataByPath('altrppagestate.pits');
var equals = true;
p.forEach(function(pit){
    var pit_frm = pc.filter(i=>i.pit_guid == pit.pit_guid)[0];
    if (!pit_frm)
        equals = false;
    else if ((pit.comment_result ?? '') != pit_frm.comment_result || (pit.fenc_result ?? '') != pit_frm.fenc_result || (pit.information_shield_result ?? '') != pit_frm.information_shield_result || (pit.mount_result ?? '') != pit_frm.mount_result)
        equals = false;
    else{
        var ph = pit.results_photos_id ?? [];
        var ph_frm = pit_frm.results_photos_id ?? [];
        ph.forEach(function(i){
            if (!ph_frm.filter(ii=>ii == i)[0])
                equals = false;
        })
        ph_frm.forEach(function(i){
            if (!ph.filter(ii=>ii == i)[0])
                equals = false;
        })        
    }
});
altrpHelpers.setDataByPath('altrppagestate.disable_save', equals ? 1 : 0);