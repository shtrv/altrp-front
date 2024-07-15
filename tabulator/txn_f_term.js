{
    ... {{context.default_settings}},
    updateURL: '/ajax/models/txn_f_terms/customizers/txn_f_term_update_robotizer_5lvfwbv56wakr7rk',
    dblClickEdit: true,
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("zakazchik", {
                domain: 'cmn_f',
                lang: {{context.lang}},
            }),
            width: 300,
            editor: true,
            field: "title"
        },
        {
            title:await __("object_name", {
                domain: 'cmn_f',   
                lang: {{context.lang}},
            }),
            editor: true,
            field: "description"
        },
    ],
    ajaxURL: '/ajax/models/txn_f_terms/customizers/txn_f_term_data_for_show_all_page_433201fg14h1l0im',
}