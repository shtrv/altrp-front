altrpHelpers.setDataByPath('altrppagestate.find_obj', 1);
window.find_obj.style.position = 'fixed';

var CurrentBreakpoint = altrpHelpers.getCurrentBreakpoint();
if (CurrentBreakpoint == 'Big-Phone' || CurrentBreakpoint == 'Small-Phone') {
    document.querySelector('.app-area.app-area_header').style.display = 'none';
}