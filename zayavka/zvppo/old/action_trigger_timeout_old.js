/*             Item #1          */

saveFormValuesToPageMeta('filter', 'zvppfilter');
//RaiseActions('refresh_button');

	window._search_in_reestr_.addEventListener("keydown", function (event) {if (event.keyCode == 13) {RaiseActions('_btn_quick_search_');}});


/*             Item #2          */

document.querySelectorAll('[Title="Toggle SortBy"]').forEach(function(i)
{
	i.title = 'Кликните для сортировки';
	i.style.textDecoration = 'underline';
});


/*             Item #3          */
//setdata
//altrppagestate.list {{altrpdata.list}}


/*             Item #4          */
//condition
//altrpdata.list empty


/*             Item #5          */
RaiseActions('refresh_button');