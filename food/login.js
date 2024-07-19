var guest = altrpHelpers.getDataByPath('altrpuser.is_guest');
var roles = altrpHelpers.getDataByPath('altrpuser.roles');
const allowedRoles = ['admin', 'GeoMeal_Admin', 'GeoMeal_User']
if (guest) {
	altrpHelpers.setDataByPath('altrppagestate.need_login', true);
} else if (roles.filter(role => allowedRoles.includes(role.name)).lenght) {
    window.location.href = '/';
} else {
    window.location.href = '/forbidden';
}