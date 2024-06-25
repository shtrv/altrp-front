(async () => 
    {
        ToggleElements('filter_panel,progress_bar');
        saveFormValuesToPageMeta('filter', 'zvfilter');
        await RaiseActions('refresh_button');
        ToggleElements('progress_bar');
    })()