http://192.168.100.204:45000/table1
ip поменялся из-за обновления компа (хостится на виртуалке)

Кастомайзеры:
1. {{название}}_data_for_show_all_page:
    - запрос к бд 
    - !!!селектит те столбцы, которые указаны в модели!!!
    - поиск из {s} по определенным столбцам
    - пагинация

2. _update_robotizer 
   _bulk_update_robotizer:
    - указать нужные для валидации колонки
    - или пропустить блок с валидацией

3. 	txn_f_table_settings:
    - блок "txn_f_term", можно настроить колонки, возможность редактирования, сортировки и тд..
    - если ширина колонки не задана или не влазит, то она поместится в новую строку для каждой строки


- Для показа таблицы поместить в виджет html:

    <script src="/storage/media/libs/tabulator/tabulator.min.js"></script>
    <script src="/storage/media/static/tab-int.js?__generaterandom__"></script>
    <link rel="stylesheet" href="/storage/media/libs/tabulator/tabulator.min.css"/>
    <link rel="stylesheet" href="/storage/media/libs/tabulator/tabulator_semanticui.min.css"/>
    <div data-tabulator="txn_f_term" data-bulk-form="bulk_edit_txn_f_term.items"></div>


- Отладка в консоли:

    Tabulator.findTable("[data-tabulator='txn_f_term']");
    или
    Tabulator.registry.tables[0];

- Смена цвета строки:

    Tabulator.findTable("[data-tabulator='txn_f_term']")[0].getRow(6).getElement().style.backgroundColor = '#1e3b20'