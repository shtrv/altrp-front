(
    function () {

        var copySVG = '<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M18.875 2.5H8.875C8.70924 2.5 8.55027 2.56585 8.43306 2.68306C8.31585 2.80027 8.25 2.95924 8.25 3.125V6.25H5.125C4.95924 6.25 4.80027 6.31585 4.68306 6.43306C4.56585 6.55027 4.5 6.70924 4.5 6.875V16.875C4.5 17.0408 4.56585 17.1997 4.68306 17.3169C4.80027 17.4342 4.95924 17.5 5.125 17.5H15.125C15.2908 17.5 15.4497 17.4342 15.5669 17.3169C15.6842 17.1997 15.75 17.0408 15.75 16.875V13.75H18.875C19.0408 13.75 19.1997 13.6842 19.3169 13.5669C19.4342 13.4497 19.5 13.2908 19.5 13.125V3.125C19.5 2.95924 19.4342 2.80027 19.3169 2.68306C19.1997 2.56585 19.0408 2.5 18.875 2.5ZM14.5 16.25H5.75V7.5H14.5V16.25ZM18.25 12.5H15.75V6.875C15.75 6.70924 15.6842 6.55027 15.5669 6.43306C15.4497 6.31585 15.2908 6.25 15.125 6.25H9.5V3.75H18.25V12.5Z" fill="#636266"/>\n' +
            '</svg>\n';
        var viewSVG = '<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M8.875 7.5C8.875 7.33424 8.94085 7.17527 9.05806 7.05806C9.17527 6.94085 9.33424 6.875 9.5 6.875H14.5C14.6658 6.875 14.8247 6.94085 14.9419 7.05806C15.0592 7.17527 15.125 7.33424 15.125 7.5C15.125 7.66576 15.0592 7.82473 14.9419 7.94194C14.8247 8.05915 14.6658 8.125 14.5 8.125H9.5C9.33424 8.125 9.17527 8.05915 9.05806 7.94194C8.94085 7.82473 8.875 7.66576 8.875 7.5ZM9.5 10.625H14.5C14.6658 10.625 14.8247 10.5592 14.9419 10.4419C15.0592 10.3247 15.125 10.1658 15.125 10C15.125 9.83424 15.0592 9.67527 14.9419 9.55806C14.8247 9.44085 14.6658 9.375 14.5 9.375H9.5C9.33424 9.375 9.17527 9.44085 9.05806 9.55806C8.94085 9.67527 8.875 9.83424 8.875 10C8.875 10.1658 8.94085 10.3247 9.05806 10.4419C9.17527 10.5592 9.33424 10.625 9.5 10.625ZM12 11.875H9.5C9.33424 11.875 9.17527 11.9408 9.05806 12.0581C8.94085 12.1753 8.875 12.3342 8.875 12.5C8.875 12.6658 8.94085 12.8247 9.05806 12.9419C9.17527 13.0592 9.33424 13.125 9.5 13.125H12C12.1658 13.125 12.3247 13.0592 12.4419 12.9419C12.5592 12.8247 12.625 12.6658 12.625 12.5C12.625 12.3342 12.5592 12.1753 12.4419 12.0581C12.3247 11.9408 12.1658 11.875 12 11.875ZM19.5 3.75V12.2414C19.5005 12.4056 19.4684 12.5683 19.4055 12.72C19.3426 12.8717 19.2502 13.0093 19.1336 13.125L15.125 17.1336C15.0093 17.2502 14.8717 17.3426 14.72 17.4055C14.5683 17.4684 14.4056 17.5005 14.2414 17.5H5.75C5.41848 17.5 5.10054 17.3683 4.86612 17.1339C4.6317 16.8995 4.5 16.5815 4.5 16.25V3.75C4.5 3.41848 4.6317 3.10054 4.86612 2.86612C5.10054 2.6317 5.41848 2.5 5.75 2.5H18.25C18.5815 2.5 18.8995 2.6317 19.1339 2.86612C19.3683 3.10054 19.5 3.41848 19.5 3.75ZM5.75 16.25H13.875V12.5C13.875 12.3342 13.9408 12.1753 14.0581 12.0581C14.1753 11.9408 14.3342 11.875 14.5 11.875H18.25V3.75H5.75V16.25ZM15.125 13.125V15.3672L17.3664 13.125H15.125Z" fill="#636266"/>\n' +
            '</svg>\n';
        var editSVG = '<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M19.7586 5.73203L16.268 2.24062C16.1519 2.12452 16.0141 2.03242 15.8624 1.96958C15.7107 1.90675 15.5482 1.8744 15.384 1.8744C15.2198 1.8744 15.0572 1.90675 14.9056 1.96958C14.7539 2.03242 14.6161 2.12452 14.5 2.24062L4.86641 11.875C4.74983 11.9907 4.65741 12.1283 4.59451 12.28C4.5316 12.4317 4.49948 12.5944 4.50001 12.7586V16.25C4.50001 16.5815 4.6317 16.8995 4.86612 17.1339C5.10054 17.3683 5.41849 17.5 5.75001 17.5H9.24141C9.40563 17.5005 9.5683 17.4684 9.71999 17.4055C9.87168 17.3426 10.0094 17.2502 10.125 17.1336L19.7586 7.5C19.8747 7.38392 19.9668 7.24611 20.0296 7.09443C20.0925 6.94276 20.1248 6.78019 20.1248 6.61601C20.1248 6.45184 20.0925 6.28927 20.0296 6.13759C19.9668 5.98592 19.8747 5.84811 19.7586 5.73203ZM9.24141 16.25H5.75001V12.7586L12.625 5.88359L16.1164 9.375L9.24141 16.25ZM17 8.49062L13.5086 5L15.3836 3.125L18.875 6.61562L17 8.49062Z" fill="#636266"/>\n' +
            '</svg>\n';
        var deleteSVG = '<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M18.875 3.75H15.75V3.125C15.75 2.62772 15.5525 2.15081 15.2008 1.79917C14.8492 1.44754 14.3723 1.25 13.875 1.25H10.125C9.62772 1.25 9.15081 1.44754 8.79917 1.79917C8.44754 2.15081 8.25 2.62772 8.25 3.125V3.75H5.125C4.95924 3.75 4.80027 3.81585 4.68306 3.93306C4.56585 4.05027 4.5 4.20924 4.5 4.375C4.5 4.54076 4.56585 4.69973 4.68306 4.81694C4.80027 4.93415 4.95924 5 5.125 5H5.75V16.25C5.75 16.5815 5.8817 16.8995 6.11612 17.1339C6.35054 17.3683 6.66848 17.5 7 17.5H17C17.3315 17.5 17.6495 17.3683 17.8839 17.1339C18.1183 16.8995 18.25 16.5815 18.25 16.25V5H18.875C19.0408 5 19.1997 4.93415 19.3169 4.81694C19.4342 4.69973 19.5 4.54076 19.5 4.375C19.5 4.20924 19.4342 4.05027 19.3169 3.93306C19.1997 3.81585 19.0408 3.75 18.875 3.75ZM9.5 3.125C9.5 2.95924 9.56585 2.80027 9.68306 2.68306C9.80027 2.56585 9.95924 2.5 10.125 2.5H13.875C14.0408 2.5 14.1997 2.56585 14.3169 2.68306C14.4342 2.80027 14.5 2.95924 14.5 3.125V3.75H9.5V3.125ZM17 16.25H7V5H17V16.25ZM10.75 8.125V13.125C10.75 13.2908 10.6842 13.4497 10.5669 13.5669C10.4497 13.6842 10.2908 13.75 10.125 13.75C9.95924 13.75 9.80027 13.6842 9.68306 13.5669C9.56585 13.4497 9.5 13.2908 9.5 13.125V8.125C9.5 7.95924 9.56585 7.80027 9.68306 7.68306C9.80027 7.56585 9.95924 7.5 10.125 7.5C10.2908 7.5 10.4497 7.56585 10.5669 7.68306C10.6842 7.80027 10.75 7.95924 10.75 8.125ZM14.5 8.125V13.125C14.5 13.2908 14.4342 13.4497 14.3169 13.5669C14.1997 13.6842 14.0408 13.75 13.875 13.75C13.7092 13.75 13.5503 13.6842 13.4331 13.5669C13.3158 13.4497 13.25 13.2908 13.25 13.125V8.125C13.25 7.95924 13.3158 7.80027 13.4331 7.68306C13.5503 7.56585 13.7092 7.5 13.875 7.5C14.0408 7.5 14.1997 7.56585 14.3169 7.68306C14.4342 7.80027 14.5 7.95924 14.5 8.125Z" fill="#636266"/>\n' +
            '</svg>\n';

        var defaultSVG = '<svg width="24" height="24" viewBox="0 0 800 800" fill="none" class="tabulator-default-svg">\n' +
            '<g opacity="0.15" clip-path="url(#clip0_1234_9953)">\n' +
            '<rect width="800" height="800" fill="#CCCCCC"/>\n' +
            '<line x1="104.825" y1="-1.23223" x2="-701.232" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="204.825" y1="-1.23223" x2="-601.232" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="304.825" y1="-1.23223" x2="-501.232" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="404.825" y1="-1.23223" x2="-401.232" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="504.825" y1="-1.23223" x2="-301.232" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="604.825" y1="-1.23223" x2="-201.232" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="704.825" y1="-1.23223" x2="-101.232" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="804.825" y1="-1.23223" x2="-1.23211" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="904.825" y1="-1.23223" x2="98.7679" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="1004.82" y1="-1.23223" x2="198.768" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="1104.82" y1="-1.23223" x2="298.768" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="1204.82" y1="-1.23223" x2="398.768" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="1304.82" y1="-1.23223" x2="498.768" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="1404.82" y1="-1.23223" x2="598.768" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '<line x1="1504.82" y1="-1.23223" x2="698.768" y2="804.825" stroke="#4D4D4D" stroke-width="5"/>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<clipPath id="clip0_1234_9953">\n' +
            '<rect width="800" height="800" fill="white"/>\n' +
            '</clipPath>\n' +
            '</defs>\n' +
            '</svg>';
        var resource;
        window.__gol_s_storage = window.__gol_s_storage || {};
        var __gol_s_storage = window.__gol_s_storage;
        function callback() {
            resource = new altrpHelpers.Resource({
                route: '/ajax/models/tabulators/customizers/tabulator_update_settings_jsx137k63'
            })
            var wrappers = document.querySelectorAll('[data-tabulator]')
            if (!wrappers.length) {
                return
            }

            _.forEach(wrappers, function (wrapper) {
                var id = wrapper.getAttribute('data-tabulator');
                var spread = wrapper.getAttribute('data-spread');
                if (__gol_s_storage[id]) {
                    // if(__gol_s_storage[id] === 'loading' ||
                    //     document.contains(__gol_s_storage[id].element) ){
                    //     return;
                    // }
                    if (document.contains(__gol_s_storage[id].element)) {
                        return;
                    }
                }
                //__gol_s_storage[id] = 'loading';

                var path = '/ajax/models/tabulators/customizers/tabulator_settings_qddsck05i';
                if (spread && spread.toLowerCase() === 'yes') {
                    spread = true
                    path = '/ajax/models/tabulators/customizers/tabulator_spreadsheet_settings_y3uxzotg0';

                }
                let url = new URL(location.origin
                    + path);
                url.searchParams.set('id', id);

                var xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.open('GET', url);
                xhr.send();
                xhr.onload = function () {
                    var responseObj = xhr.response;
                    mapElement(wrapper, responseObj.data || {});
                };


            })
            window.removeEventListener('h-altrp-loaded', callback);
        }

        window.addEventListener('h-altrp-loaded', callback);
        window.altrpHelpers && callback();

        function listEditor(cell, onRendered, success, cancel) {
            var data = cell.getData();
            var column = cell.getColumn();
            var definition = column.getDefinition();
            var values = definition.editorParams.values
            var select = document.createElement("select");
            onRendered(function () {
                select.focus();
            });
            _.forEach(values, function (label, idx) {
                var opt = document.createElement('option');

                opt.value = idx;
                opt.innerHTML = label;
                select.appendChild(opt);
            });
            select.addEventListener("blur", cancel);
            select.addEventListener('change', function onChange() {
                if (select.value) {
                    success(values[select.value]);
                    if (definition.editorField) {
                        data[definition.editorField] = select.value;
                        tab.element.classList.add('altrp-disabled');
                        updateResource.put('', data).finally(function () {
                            tab.element.classList.remove('altrp-disabled');
                        });
                    }
                } else {
                    cancel();
                }
            });

            return select
        }

        function parseSettings(settings) {
            var columns = settings.columns || []
            var afterFilters = [];

            settings.dataFiltered = function (tab) {
                _.forEach(afterFilters, function (clb) {
                    clb(tab);
                })
            };
            columns = _.map(columns, function (c) {
                if (c.formatter === 'image') {
                    c.formatter = function (cell) {
                        var column = cell.getColumn();
                        var definition = column.getDefinition();
                        if (!cell.getValue()) {
                            return definition.defaultSVG || defaultSVG;
                        }
                        return '<img src="' + cell.getValue() + '"/>'
                    }
                }
                if (c.editor === 'list' && _.isString(_.get(c, 'editorParams.values'))) {
                    var path = c.editorParams.values;

                    path = path.replace('{{', '').replace('}}', '')
                    var values = c.editorParams.values = {};
                    c.editorParams.reverseValues = {};

                    _.forEach(altrpHelpers.getDataByPath(path, []), function (option) {
                        c.editorParams.values[option.value] = option.label;
                        c.editorParams.reverseValues[option.label] = option.value;
                    });

                    c.mutatorEdit = function (value, data) {
                        if (!c.editorField) {
                            return value
                        }
                        value = values[value] || value || values[data[c.editorField]];
                        return value;
                    };
                }
                if (c.headerFilter && c.headerFilterParams && _.isString(c.headerFilterParams.values)) {
                    var filterPath = c.headerFilterParams.values;

                    filterPath = filterPath.replace('{{', '').replace('}}', '')
                    c.headerFilterParams.values = {};

                    _.forEach(altrpHelpers.getDataByPath(filterPath, []), function (option) {
                        c.headerFilterParams.values[option.value] = option.label;
                    });
                    afterFilters.push(function (tab) {
                        var filters = tab.getFilters(true);

                        var headerValue = _.find(filters, function (f) {
                            return f.field === c.field;
                        });

                        if (!headerValue) {
                            headerValue = '';
                        }
                        headerValue = headerValue.value;
                        altrpHelpers.updateQueryString(c.filterField || c.field, headerValue);
                    });

                }
                if (c.headerFilter && c.filterRemote) {

                    afterFilters.push(function (tab) {
                        var filters = tab.getFilters(true);

                        var headerValue = _.find(filters, function (f) {
                            return f.field === c.field;
                        });

                        if (!headerValue) {
                            headerValue = '';
                        }
                        headerValue = headerValue.value;
                        // if(! headerValue){
                        //     return;
                        // }

                        var searches = altrpHelpers.qs.parse(location.search.replace('?', '')).searches || {};
                        if (searches[c.filterField || c.field] === headerValue) {
                            return;
                        }
                        searches[c.filterField || c.field] = headerValue;
                        altrpHelpers.updateQueryString('searches', searches);
                    });
                }
                if (c.editor && settings.dblClickEdit) {
                    c.editable = false;
                    c.cellDblClick = function (e, cell) {
                        cell.edit(true);
                    }
                }
                return c;
            })
            settings.columns = columns;
        }
        var updateResource;
        function mapElement(wrapper, settings) {
            var contextEditName = wrapper.getAttribute('data-context-edit') || 'context_edit';
            var contextViewName = wrapper.getAttribute('data-context-view') || 'context_view';
            var contextDeleteName = wrapper.getAttribute('data-context-delete') || 'context_delete';
            var contextCopyName = wrapper.getAttribute('data-context-copy') || 'context_copy';
            var spread = wrapper.getAttribute('data-spread');
            if (spread && spread.toLowerCase() === 'yes') {
                spread = true
            }
            var defaultContext = [
                {

                    label: viewSVG + _.get(settings, 'lang.rowContextMenu.View', 'View'),
                    action: function (e, cell) {
                        var customEvent = new CustomEvent(contextViewName, {
                            detail: {
                                data: cell.getData(),

                            }
                        }
                        );
                        document.dispatchEvent(customEvent);

                    },
                }, {

                    label: editSVG + _.get(settings, 'lang.rowContextMenu.Edit', 'Edit'),
                    action: function (e, cell) {
                        var customEvent = new CustomEvent(contextEditName, {
                            detail: {
                                data: cell.getData(),

                            }
                        }
                        );
                        document.dispatchEvent(customEvent);

                    },
                }, {
                    label: deleteSVG + _.get(settings, 'lang.rowContextMenu.Delete', 'Delete'),
                    action: function (e, cell) {
                        var customEvent = new CustomEvent(contextDeleteName, {
                            detail: {
                                data: cell.getData(),

                            }
                        }
                        );
                        document.dispatchEvent(customEvent);

                    },
                }, {
                    label: copySVG + _.get(settings, 'lang.rowContextMenu.Copy', 'Copy'),

                    action: function (e, cell) {
                        var customEvent = new CustomEvent(contextCopyName, {
                            detail: {
                                data: cell.getData(),

                            }
                        }
                        );
                        document.dispatchEvent(customEvent);

                    },
                },
            ];
            var qs = altrpHelpers.qs;

            parseSettings(settings)

            var tab;

            if (settings.updateURL) {
                updateResource = new altrpHelpers.Resource({
                    route: settings.updateURL
                })
            }

            var id = wrapper.getAttribute('data-tabulator')

            var initialSort = [];

            if (altrpHelpers.qs
                && _.isArray(altrpHelpers.qs.parse(location.search.replace('?', '')).sort)) {
                initialSort = altrpHelpers.qs.parse(location.search.replace('?', '')).sort;
                _.forEach(initialSort, function (s) {
                    s.column = s.field;
                });
            }

            var headerContextMenu = settings.columns || []

            headerContextMenu = _.map(headerContextMenu, function (column) {

                if (column.title === '№') {
                    return;
                }
                var headerContextMenuItem = {
                    label: function () {
                        var columns = tab.getColumns()
                        if (_.find(columns, function (c) {
                            if (column.field && c.getField()) {
                                return column.field === c.getField() && c.isVisible();

                            }
                            var definition = c.getDefinition()
                            return definition.title === column.title && c.isVisible();

                        })) {
                            return '✓ <span class="tabulator-menu__label">' + column.title + '</span>';
                        }
                        return '<span class="tabulator-menu__label">' + column.title + '</span>';

                    },
                    action: function (e) {
                        var target = e.target;
                        target = target.closest('.tabulator-menu-item');
                        target = target.querySelector('.tabulator-menu__label');

                        var columns = tab.getColumns();

                        var title = target.innerHTML;
                        title = title.trim();

                        var column = _.find(columns, function (c) {
                            var element = c.getElement();
                            element = element.querySelector('.tabulator-col-title');

                            var t = element.innerHTML.trim();

                            return title === t;
                        })
                        var visible = column.isVisible();
                        visible = !visible;
                        column.toggle();
                        tab.element.classList.add('altrp-disabled');

                        resource.post({
                            param: 'visible',
                            value: visible + '',
                            id,
                            field: column.getField(),
                        }).finally(function () {
                            tab.element.classList.remove('altrp-disabled');
                        });
                    }
                };
                return headerContextMenuItem;
            })
            headerContextMenu = _.filter(headerContextMenu, function (headerContextMenuItem) {
                return headerContextMenuItem
            })


            var defaultParams = {
                tabulator: true
            };

            if (spread) {
                defaultParams.spread = true;
                settings.addonsSpread = true;
            }

            if (settings.dataTree) {
                defaultParams.dataTree = settings.dataTree;
            }
            var rowFormatter
            if (_.isObject(settings.nestedTables)) {
                rowFormatter = function (row) {
                    var rowData = row.getData();
                    _.forEach(settings.nestedTables, function (nestedTable, fieldName) {
                        var holderEl = document.createElement("div");
                        var tableEl = document.createElement("div");
                        holderEl.appendChild(tableEl);
                        var data = rowData[fieldName];
                        if (!_.isArray(data) || _.isEmpty(data)) {
                            return;
                        }
                        holderEl.classList.add('tabulator-row-sub-tab-wrapper')

                        row.getElement().appendChild(holderEl);
                        var subTable = new Tabulator(tableEl, {
                            layout: "fitColumns",
                            data: data,
                            columns: nestedTable.columns,
                        })
                    });
                }
            }

            var params = wrapper.getAttribute('data-params');

            params = qs.parse(params);

            var rowHeader = {
                headerSort: false,
                resizable: false,
                frozen: true,
                width: settings.rowSelectWidth || 50,
                border: 0,
                headerHozAlign: settings.rowSelecHeaderHozAlign || "center",
                hozAlign: settings.rowSelecHozAlign || "center",
                formatter: "rowSelection",
                titleFormatter: "rowSelection",
                contextMenu: [
                    {
                        label: 'Copy',
                        action: function (e, cell) {
                            var customEvent = new CustomEvent('context_copy', {
                                detail: {
                                    data: cell.getData(),

                                }
                            }
                            );
                            document.dispatchEvent(customEvent);

                        },
                    }
                ],
                cellClick: function (e, cell) {
                    cell.getRow().toggleSelect();
                }
            };

            if (spread) {
                rowHeader = undefined;
            }
            function editCheck(cell) {
                if (!spread) {
                    return;
                }
                var data = cell.getData();

                if (data._id == 1) {
                    return false;
                }
                return true;
            }
            tab = new Tabulator(wrapper, _.merge(settings, {
                defaultSettings: _.cloneDeep(settings),
                startParams: params,
                spreadsheetColumnDefinition: {
                    editorParams: {
                        filterFunc: function (term, label) {

                            term = term.split(' ');

                            for (let i = 0; i < term.length; i++) {
                                var t = term[i];
                                t = t.toLowerCase();
                                if (label.toLowerCase().indexOf(t) >= 0) {
                                    return true
                                }
                            }

                            return false;
                        },
                        valuesLookup: function (cell, filterTerm) {
                            //cell - the cell component for the current cell
                            //filterTerm - the current value of the input element

                            var field = cell.getField();
                            var values = [];
                            var pathToValues;
                            switch (field.toLowerCase()) {
                                case 'a': {
                                    pathToValues = 'spreadSheetColumns.0.autocomplete';
                                } break;
                                case 'b': {
                                    pathToValues = 'spreadSheetColumns.1.autocomplete';
                                } break;
                                case 'c': {
                                    pathToValues = 'spreadSheetColumns.2.autocomplete';
                                } break;
                                case 'd': {
                                    pathToValues = 'spreadSheetColumns.3.autocomplete';
                                } break;
                                case 'e': {
                                    pathToValues = 'spreadSheetColumns.4.autocomplete';
                                } break;
                                case 'f': {
                                    pathToValues = 'spreadSheetColumns.5.autocomplete';
                                } break;
                            }
                            pathToValues = _.get(settings, pathToValues);
                            if (!pathToValues) {
                                return values;
                            }
                            values = altrpHelpers.getDataByPath(pathToValues) || values;
                            values = _.map(values, function (i) {
                                return i.label;
                            });
                            return values;
                        }
                    },
                    editable: editCheck,
                },
                ajaxParams: _.merge(
                    {},
                    defaultParams,
                    qs.parse(location.search.replace('?', '')),
                    params
                ),
                initialSort: initialSort,
                rowFormatter: rowFormatter,
                ajaxResponse: function (url, params, response) {
                    var res = _.clone(response.data);
                    delete res.meta;
                    res = _.merge(res, response.data.meta);

                    var rows = wrapper.getAttribute('data-rows');

                    if (rows) {
                        res.data = _.get(res, rows) || res.data || res.rows || [];
                    } else {
                        res.data = res.data || res.rows || [];
                    }

                    if (!settings.pagination) {
                        return res.data;
                    }
                    return res;
                },
                rowContextMenu: settings?.withoutContext ? [] : defaultContext,
                columnDefaults: {
                    headerContextMenu: headerContextMenu
                },
                rowHeader: rowHeader

            }));
            __gol_s_storage[id] = tab;


            tab.on("groupVisibilityChanged", function (group, visible) {
                var groups = tab.getGroups()
                var visibly = 0
                _.forEach(groups, function (gr) {
                    if (gr.isVisible()) {
                        ++visibly;
                    }
                })
                altrpHelpers.setDataByPath('altrppagestate.' + id + '.expandedAll', groups.length === visibly)
                altrpHelpers.setDataByPath('altrppagestate.' + id + '.expanded_all', groups.length === visibly)
            });
            tab.on("dataFiltered", function () {
                settings.dataFiltered(tab);
            });

            tab.on("dataSorted", function (sorters, rows) {
                _.forEach(sorters, s => {
                    delete s.column;
                })
                altrpHelpers.updateQueryString('sort', sorters);
            });

            function updateData(data, cell) {

                if (updateResource) {

                    data = _.cloneDeep(data);
                    var column;
                    if (cell) {
                        column = cell.getColumn();

                    }
                    var definition;
                    if (column) {
                        definition = column.getDefinition();
                    }

                    var updateParams = settings.updateParams;
                    if (updateParams) {
                        _.forEach(updateParams, function (value, key) {
                            data[key] = altrpHelpers.replaceContentWithData(value);
                        });
                    }
                    if (definition && definition.editorField) {

                        data[definition.editorField] = definition.editorParams.reverseValues[cell.getValue()];
                        //cell.setValue(definition.editorParams.values[cell.getValue()], true);

                        tab.element.classList.add('altrp-disabled');

                        updateResource.put('', data).finally(function () {
                            tab.element.classList.remove('altrp-disabled');
                            if (definition.editorUpdateAfter) {
                                tab.setData();
                            }
                        });

                        return;
                    }

                    // if(definition.editorField){
                    //     return;
                    // }

                    tab.element.classList.add('altrp-disabled');
                    updateResource.put('', data).finally(function () {
                        tab.element.classList.remove('altrp-disabled');
                        if (definition && definition.editorUpdateAfter) {
                            tab.setData();
                        }
                    });
                }
            }
            tab.on("cellEdited", function (cell) {
                var data = cell.getData();
                updateData(data, cell);
            });

            tab.on("clipboardPasted", function () {
                if (!spread) {
                    return;
                }
                var data = tab.getData();

                data = _.filter(data, function (value, idx) {
                    var empty = true;
                    if (idx === 0) {
                        return false;
                    }
                    _.forEach(value, function (value, idx) {
                        if (idx === '_id') {
                            return
                        }
                        if (!empty) {
                            return;
                        }
                        if (value || value == 0) {
                            empty = false;
                        }
                    });
                    return !empty
                });
                updateData({
                    rows: data
                })
            });
            tab.on("columnResized", function (column) {
                var width = column.getWidth();
                tab.element.classList.add('altrp-disabled');

                resource.post({
                    param: 'width',
                    value: width + '',
                    id,
                    field: column.getField(),
                }).finally(function () {
                    tab.element.classList.remove('altrp-disabled');
                });
            });
            var formPath = 'altrpforms.'
                + wrapper.getAttribute('data-bulk-form')
                + '.items';

            function selectChange() {
                var selectedRows = tab.getSelectedData();
                if (!wrapper.getAttribute('data-bulk-form')) {
                    return
                }
                var currentItems = _.map(selectedRows, function (sr) {
                    if (!sr.uuid) {
                        console.error('Error data row!', sr);
                        return;
                    }
                    return sr.uuid;
                })
                altrpHelpers.setDataByPath(formPath, currentItems);
            }

            tab.on("rowSelectionChanged", selectChange);
            tab.on("pageLoaded", function () {
                altrpHelpers.setDataByPath(formPath, null);

            });
        }

        function queryUpdateCallback() {
            _.forEach(window.__gol_s_storage, function (tab) {

                if (!document.body.contains(tab.element)) {
                    return;
                }
                var settings = tab.options.defaultSettings || {};

                if (settings.addonsSpread) {
                    return;
                }
                var defaultParams = {
                    tabulator: true
                };
                if (settings.dataTree) {
                    defaultParams.dataTree = settings.dataTree;
                }
                var newAjaxParams = _.merge(
                    {},
                    defaultParams,
                    altrpHelpers.qs.parse(location.search.replace('?', '')),
                    tab.options.startParams || {},
                )

                if (_.isEqual(newAjaxParams, tab.modules.ajax.requestParams())) {
                    return;
                }
                tab.modules.ajax.setOption('ajaxParams', _.cloneDeep(newAjaxParams))

                tab.setData(tab.options.ajaxURL, newAjaxParams).finally(function (r) {

                });
            });
        }
        document.addEventListener('altrp-query-updated', queryUpdateCallback);

        window.reloadTable = function () {
            _.forEach(window.__gol_s_storage, function (tab) {
                tab.setData();
            });
        };
        window.collapseTreeAllTables = function () {
            _.forEach(window.__gol_s_storage, function (tab) {
                var rows = tab.getRows();

                _.forEach(rows, function (r) {
                    r.treeCollapse();
                });
            });
        };
        window.expandTreeAllTables = function () {
            _.forEach(window.__gol_s_storage, function (tab) {
                var rows = tab.getRows();

                _.forEach(rows, function (r) {
                    r.treeExpand();
                });
            });
        };

        window.collapseAllTables = function () {
            _.forEach(window.__gol_s_storage, function (tab) {
                var rows = tab.getRows();

                _.forEach(rows, function (r) {
                    var group = r.getGroup();
                    group.hide();
                });
            });
        };

        function _toggleTabFilters(tab) {
            if (!tab) {
                return
            }
            var element = tab.element;
            var wrapper = element.closest('.altrp-widget_html');

            wrapper.classList.toggle('thirtypx');
            tab.redraw();

        }
        function _showTabFilters(tab) {
            if (!tab) {
                return
            }
            var element = tab.element;
            var wrapper = element.closest('.altrp-widget_html');

            wrapper.classList.remove('thirtypx');
            tab.redraw();

        }
        function _hideTabFilters(tab) {
            if (!tab) {
                return
            }
            var element = tab.element;
            var wrapper = element.closest('.altrp-widget_html');

            wrapper.classList.add('thirtypx');
            tab.redraw();

        }

        window.toggleTabFilters = function (tabName) {
            if (!tabName) {

                _.forEach(window.__gol_s_storage, function (tab) {
                    _toggleTabFilters(tab)
                });
            } else {
                _toggleTabFilters(window.__gol_s_storage[tabName])

            }
        };

        window.hideTabFilters = function (tabName) {
            if (!tabName) {

                _.forEach(window.__gol_s_storage, function (tab) {
                    _hideTabFilters(tab)
                });
            } else {
                _hideTabFilters(window.__gol_s_storage[tabName])

            }
        };

        window.showTabFilters = function (tabName) {
            if (!tabName) {

                _.forEach(window.__gol_s_storage, function (tab) {
                    _showTabFilters(tab)
                });
            } else {
                _showTabFilters(window.__gol_s_storage[tabName])

            }
        };

        window.expandAllTables = function () {
            _.forEach(window.__gol_s_storage, function (tab) {
                var rows = tab.getRows();
                // var groups = tab.getGroups();
                // for(var i = 0; i<groups.length; i++){
                //     var group = groups[i];
                //     setTimeout(function () {
                //         group.show();
                //     }, 2);
                // }

                _.forEach(rows, function (r) {
                    var group = r.getGroup();
                    group.show();
                });

            });
        };
    }

)();
