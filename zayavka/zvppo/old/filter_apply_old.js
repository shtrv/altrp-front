window.saveToMeta = async function()
{
	ToggleElements('filter_panel,progress_bar');
	saveFormValuesToPageMeta('filter', 'zvppfilter');
	await RaiseActions('refresh_button');
	ToggleElements('progress_bar');
};