const selectForSQLEditor = require("../../helpers/selectForSQLEditor").default
const empty = __importDefault(require("../../helpers/empty")).default;
const Source = __importDefault(require("../Models/Source")).default;
const axios = __importDefault(require("axios")).default;
const Database = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const DB = Database.default;
const _ = __importStar(require("lodash"));
const Validator = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");


const tabulator = require('../AltrpModels/tabulator').default
const AltrpBaseController = require('../Controllers/AltrpBaseController').default


class tabulatorController extends AltrpBaseController {





  async filters(httpContext) {

    if (! await httpContext.auth?.user?.hasRole(['admin'])) {
      httpContext.response.status(403);
      return httpContext.response.json({ success: false, message: 'Permission denied' });
    }



  }

  async update_column(httpContext) {

    if (! await httpContext.auth?.user?.hasRole(['admin'])) {
      httpContext.response.status(403);
      return httpContext.response.json({ success: false, message: 'Permission denied' });
    }



    let oldModel = await tabulator.find(httpContext.params.tabulator);
    if (!oldModel) {
      httpContext.response.status(404);
      return httpContext.response.json({ success: false, message: 'not found' })
    }
    oldModel[httpContext.params.column] = httpContext.request.input('column_value');
    await oldModel.save();
    return httpContext.response.json({ success: true, });

  }

  async update(httpContext) {

    if (! await httpContext.auth?.user?.hasRole(['admin'])) {
      httpContext.response.status(403);
      return httpContext.response.json({ success: false, message: 'Permission denied' });
    }



    let oldModel = await tabulator.find(httpContext.params.tabulator);
    if (!oldModel) {
      httpContext.response.status(404);
      return httpContext.response.json({ success: false, message: 'not found' })
    }
    oldModel.merge(httpContext.request.all());
    await oldModel.save();
    return httpContext.response.json({ success: true, data: oldModel.serialize() });

  }

  async destroy(httpContext) {

    if (! await httpContext.auth?.user?.hasRole(['admin'])) {
      httpContext.response.status(403);
      return httpContext.response.json({ success: false, message: 'Permission denied' });
    }



    let oldModel = await tabulator.find(httpContext.params.tabulator);
    if (!oldModel) {
      httpContext.response.status(404);
      return httpContext.response.json({ success: false, message: 'not found' })
    }
    await oldModel.delete();
    return httpContext.response.json({ success: true, });

  }

  async add(httpContext) {

    if (! await httpContext.auth?.user?.hasRole(['admin'])) {
      httpContext.response.status(403);
      return httpContext.response.json({ success: false, message: 'Permission denied' });
    }



    let newModel = new tabulator();
    const newModelData = httpContext.request.all();
    if (newModelData.altrp_ajax) {
      delete newModelData.altrp_ajax;
    }
    newModel.fill(newModelData);
    await newModel.save();
    return httpContext.response.json({ success: true, data: newModel.serialize() });

  }

  async index(httpContext) {



    const query = tabulator.query();

    let search = httpContext.request.qs().s;
    let page = parseInt(httpContext.request.qs().page);
    let limit = parseInt(httpContext.request.qs().pageSize);
    let filters = {};

    if (httpContext.request.qs().filters) {
      try {
        filters = JSON.parse(httpContext.request.qs().filters);
      } catch (e) {

      }
    }

    for (let filter in filters) {
      if (filters.hasOwnProperty(filter)) {
        query.orWhere(filter, 'like', `%${filters[filter]}%`);
      }
    }

    if (search) {

    }

    const order = httpContext.request.qs()?.order === 'asc' ? 'asc' : 'desc';
    query.orderBy(httpContext.request.qs()?.order_by || 'id', order);

    if (page && limit) {
      let paginate = (await query.paginate(page, limit)).serialize()
      let hasMore = page < paginate.meta.last_page
      let pageCount = paginate.meta.last_page

      return httpContext.response.json({
        hasMore,
        pageCount,
        data: paginate.data
      });
    }

    return httpContext.response.json({
      hasMore: false,
      pageCount: 0,
      data: await query.select('*')
    });

  }

  async show(httpContext) {



    return httpContext.response.json((await tabulator.find(httpContext.params.tabulator))?.serialize());

  }

  async options(httpContext) {



    let query = tabulator.query();

    let filters = {};

    if (httpContext.request.qs().filters) {
      try {
        filters = JSON.parse(httpContext.request.qs().filters);
      } catch (e) {

      }
    }

    for (let filter in filters) {
      if (filters.hasOwnProperty(filter)) {
        query.orWhere(filter, 'like', `%${filters[filter]}%`);
      }
    }

    if (httpContext.request.qs().s) {
      query.where(query => {
        query.orWhere('id', 'like',
          `%${httpContext.request.qs().s}%`);
        query.orWhere('id', 'like',
          `%${httpContext.request.qs().s}%`);
      })
    }

    let result = (await query.select(
      { 'label': 'id', 'value': 'id' }
    )).map(result => result.$extras);

    return httpContext.response.json(result);

  }

  async get_tabulator_default(httpContext) {

    if (! await httpContext.auth?.user?.hasRole(['admin'])) {
      httpContext.response.status(403);
      return httpContext.response.json({ success: false, message: 'Permission denied' });
    }




    this.setCustomizerData('context.CurrentModel', tabulator);
    this.setCustomizerData('context.request', httpContext.request);
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext.request);
    this.setCustomizerData('context.response', httpContext.response);
    this.setCustomizerData('response', httpContext.response);
    this.setCustomizerData('session', httpContext.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('current_user', httpContext.auth?.user);
    this.setCustomizerData('context.current_user', httpContext.auth?.user);

    this.setCustomizerData('context.data.data', await require('../AltrpModels/tabulator').default.all());
    return httpContext.response.json(this.getCustomizerData(`context.data`));

  }

  async get_by_id_tabulator_default(httpContext) {

    if (! await httpContext.auth?.user?.hasRole(['admin'])) {
      httpContext.response.status(403);
      return httpContext.response.json({ success: false, message: 'Permission denied' });
    }




    this.setCustomizerData('context.CurrentModel', tabulator);
    this.setCustomizerData('context.request', httpContext.request);
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext.request);
    this.setCustomizerData('context.response', httpContext.response);
    this.setCustomizerData('response', httpContext.response);
    this.setCustomizerData('session', httpContext.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('current_user', httpContext.auth?.user);
    this.setCustomizerData('context.current_user', httpContext.auth?.user);

    this.setCustomizerData('context.data.data', await require('../AltrpModels/tabulator').default.find(httpContext.request.qs().id));
    return httpContext.response.json(this.getCustomizerData(`context.data`));

  }

  async post_tabulator_default(httpContext) {

    if (! await httpContext.auth?.user?.hasRole(['admin'])) {
      httpContext.response.status(403);
      return httpContext.response.json({ success: false, message: 'Permission denied' });
    }




    this.setCustomizerData('context.CurrentModel', tabulator);
    this.setCustomizerData('context.request', httpContext.request);
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext.request);
    this.setCustomizerData('context.response', httpContext.response);
    this.setCustomizerData('response', httpContext.response);
    this.setCustomizerData('session', httpContext.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('current_user', httpContext.auth?.user);
    this.setCustomizerData('context.current_user', httpContext.auth?.user);

    this.setCustomizerData('context.order', httpContext.request.all());

    this.unsetCustomizerData('context.order.altrp_ajax', null);

    this.setCustomizerData('context.order.creator_id', this.getCustomizerData('current_user.id'));

    this.setCustomizerData('context.order.editor_id', this.getCustomizerData('current_user.id'));

    this.setCustomizerData('context.data.data', await require('../AltrpModels/tabulator')
      .default
      .create(this.getCustomizerData(`context.order`)));

    this.setCustomizerData('context.data.data', await require('../AltrpModels/tabulator')
      .default
      .query()
      .where('id', this.getCustomizerData(`context.data`).data.id)
      .first());
    return httpContext.response.json(this.getCustomizerData(`context.data`));

  }

  async put_tabulator_default(httpContext) {

    if (! await httpContext.auth?.user?.hasRole(['admin'])) {
      httpContext.response.status(403);
      return httpContext.response.json({ success: false, message: 'Permission denied' });
    }




    this.setCustomizerData('context.CurrentModel', tabulator);
    this.setCustomizerData('context.request', httpContext.request);
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext.request);
    this.setCustomizerData('context.response', httpContext.response);
    this.setCustomizerData('response', httpContext.response);
    this.setCustomizerData('session', httpContext.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('current_user', httpContext.auth?.user);
    this.setCustomizerData('context.current_user', httpContext.auth?.user);

    this.setCustomizerData('context.data.data', await require('../AltrpModels/tabulator')
      .default
      .find(Number(httpContext.request.all().id)));
    if (this.getCustomizerData('context.data.data') == null) {
      this.setCustomizerData('context.data.success', 'Нет в БД');

      this.setCustomizerData('context._', this.getCustomizerData('context.response').status('405'));
      return httpContext.response.json(this.getCustomizerData(`context.data`));
    } if (this.getCustomizerData('context.data.data') != null) {
      this.setCustomizerData('context.order', httpContext.request.all());

      this.unsetCustomizerData('context.order.altrp_ajax', null);

      this.setCustomizerData('context.order.editor_id', this.getCustomizerData('current_user.id'));

      this.setCustomizerData('context.data.data', await this.getCustomizerData(`context.data.data`)
        .merge(this.getCustomizerData(`context.order`))
        .save());

      this.setCustomizerData('context.data.success', 'true');
      return httpContext.response.json(this.getCustomizerData(`context.data`));
    }

  }

  async delete_tabulator_default(httpContext) {

    if (! await httpContext.auth?.user?.hasRole(['admin'])) {
      httpContext.response.status(403);
      return httpContext.response.json({ success: false, message: 'Permission denied' });
    }




    this.setCustomizerData('context.CurrentModel', tabulator);
    this.setCustomizerData('context.request', httpContext.request);
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext.request);
    this.setCustomizerData('context.response', httpContext.response);
    this.setCustomizerData('response', httpContext.response);
    this.setCustomizerData('session', httpContext.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('current_user', httpContext.auth?.user);
    this.setCustomizerData('context.current_user', httpContext.auth?.user);

    this.setCustomizerData('context.data', this.getCustomizerData('current_user.id'));

    this.setCustomizerData('context.data', await require('../AltrpModels/tabulator')
      .default
      .query()
      .where("id", httpContext.request.qs().id)
      .update({
        editor_id: this.getCustomizerData(`context.data`)
        , deleted_at: new Date()
      }));
    return httpContext.response.json(this.getCustomizerData(`context.data`));

  }

  async tabulator_settings_qddsck05i(httpContext) {




    this.setCustomizerData('context.CurrentModel', tabulator);
    this.setCustomizerData('context.request', httpContext.request);
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext.request);
    this.setCustomizerData('context.response', httpContext.response);
    this.setCustomizerData('response', httpContext.response);
    this.setCustomizerData('session', httpContext.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('current_user', httpContext.auth?.user);
    this.setCustomizerData('context.current_user', httpContext.auth?.user);

    try {
      if (this.getCustomizerData('request')) {
        const {
          schema, rules
        } = Validator
        const validatorSchema = schema.create({
          "id": schema.string({}, [
          ]),
        });
        this.setCustomizerData('context.data',
          await this.getCustomizerData('request').validate(
            {
              schema: validatorSchema,
              messages: {},
            }
          ))
      }
    } catch (e) {
      console.error('Error in Validator Node "validator"');
      //console.error(e);
      throw e;
    }

    this.setCustomizerData('context.default_settings', {
      placeholder: await __("No Data Available", {
        lang: this.getCustomizerData(`context.lang`),
        domain: 'cmn_f'
      }),
      dataLoaderLoading: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2.25C6.95344 2.25 3 4.55625 3 7.5V16.5C3 19.4438 6.95344 21.75 12 21.75C17.0466 21.75 21 19.4438 21 16.5V7.5C21 4.55625 17.0466 2.25 12 2.25ZM19.5 12C19.5 12.9019 18.7612 13.8216 17.4741 14.5238C16.0247 15.3141 14.0803 15.75 12 15.75C9.91969 15.75 7.97531 15.3141 6.52594 14.5238C5.23875 13.8216 4.5 12.9019 4.5 12V10.44C6.09938 11.8463 8.83406 12.75 12 12.75C15.1659 12.75 17.9006 11.8425 19.5 10.44V12ZM6.52594 4.97625C7.97531 4.18594 9.91969 3.75 12 3.75C14.0803 3.75 16.0247 4.18594 17.4741 4.97625C18.7612 5.67844 19.5 6.59812 19.5 7.5C19.5 8.40188 18.7612 9.32156 17.4741 10.0237C16.0247 10.8141 14.0803 11.25 12 11.25C9.91969 11.25 7.97531 10.8141 6.52594 10.0237C5.23875 9.32156 4.5 8.40188 4.5 7.5C4.5 6.59812 5.23875 5.67844 6.52594 4.97625ZM17.4741 19.0238C16.0247 19.8141 14.0803 20.25 12 20.25C9.91969 20.25 7.97531 19.8141 6.52594 19.0238C5.23875 18.3216 4.5 17.4019 4.5 16.5V14.94C6.09938 16.3463 8.83406 17.25 12 17.25C15.1659 17.25 17.9006 16.3425 19.5 14.94V16.5C19.5 17.4019 18.7612 18.3216 17.4741 19.0238Z" fill="#1A1A1A"/>
</svg>`,
      sortMode: "remote",
      paginationSize: 20,
      ajaxResponse: function (url, params, response) {
        var res = _.clone(response.data);
        delete res.meta;
        res = _.merge(res, response.data.meta)
        return res;
      },
      columnDefaults: {
        tooltip: true,
      },
      pagination: true,
      rowHeader: {
        headerSort: false,
        resizable: false,
        frozen: true,
        width: 50,
        border: 0,
        headerHozAlign: "center",
        hozAlign: "center",
        formatter: "rowSelection",
        titleFormatter: "rowSelection",
        cellClick: function (e, cell) {
          cell.getRow().toggleSelect();
        },
        rowFormatter: function (row) {
          //row - row component

          var data = row.getData();
          console.log("-------------------------data: " + data);
          if (data.id > 2) {
            row.getElement().style.backgroundColor = "#1e3b20";
          }
        },
      },

      columns: [ //set column definitions for imported table data
        {
          title: "№",
          headerSort: false,
          formatter: "rownum"
        },
      ],
      layout: "fitDataFill",
      responsiveLayout: "collapse",
      dataSendParams: {
        "size": "pageSize",
      },
      paginationMode: "remote",
      langs: {
        'default': {
          'pagination': {
            "next": await __("Next", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),

            }),

            "prev": await __("Prev", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),
            }),
            "last": await __("Last", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),
            }),

            "first": await __("First", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),
            }),
          },
          'data': {
            "loading": await __("Loading", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),

            }),
            "error": await __("Error", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),

            }),
          },
          'groups': {
            "item": await __("item", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),

            }),
            "items": await __("items", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),

            }),
          }
        },
        rowContextMenu: {
          "View": await __("View", {
            domain: 'cmn_f',
            lang: this.getCustomizerData(`context.lang`),
          }),
          "Edit": await __("Edit", {
            domain: 'cmn_f',
            lang: this.getCustomizerData(`context.lang`),
          }),
          "Delete": await __("Delete", {
            domain: 'cmn_f',
            lang: this.getCustomizerData(`context.lang`),
          }),
          "Copy": await __("Copy", {
            domain: 'cmn_f',
            lang: this.getCustomizerData(`context.lang`),
          }),
        }
      },

    });

    this.setCustomizerData('context.lang', httpContext.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));

    this.setCustomizerData('context.uzik_kadastr', {
      ... this.getCustomizerData(`context.default_settings`),
      updateURL: '/ajax/models/uzik_kadastrs/customizers/uzik_kadastr_update_robotizer_wk0dxoyxy',
      dblClickEdit: true,
      rowSelecHeaderHozAlign: 'left',
      rowSelecHozAlign: 'left',
      autoColumns: true,
      columns: [ //set column definitions for imported table data
      ],
      ajaxURL: '/ajax/models/uzik_kadastrs/customizers/uzik_kadastr_data_for_show_all_page_26s9i514a',
    });
    return await (
      async () => {

        const {
          id,
        } = this.getCustomizerData(`context.data`)
        const res = {
          success: true,
          data: this.getCustomizerData(`context`)[id],
        }

        res.data.columns = res.data.columns || []


        let tabSettings = httpContext.session.get(`tab_settings.${id}`) || {}
        console.log(tabSettings, 'tabSettings')

        let columns = tabSettings.columns = tabSettings.columns || []
        console.log(res.data.columns)
        res.data.columns = res.data.columns.map(column => {
          const _c = columns.find(c => c.field === column.field)

          if (_c) {
            return {
              ...column,
              ..._c,
            }
          }
          return column
        })
        console.log(res.data.columns)
        return res

      }
    )()
      ;

  }

  async tabulator_update_settings_jsx137k63(httpContext) {




    this.setCustomizerData('context.CurrentModel', tabulator);
    this.setCustomizerData('context.request', httpContext.request);
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext.request);
    this.setCustomizerData('context.response', httpContext.response);
    this.setCustomizerData('response', httpContext.response);
    this.setCustomizerData('session', httpContext.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('current_user', httpContext.auth?.user);
    this.setCustomizerData('context.current_user', httpContext.auth?.user);
    return await (
      async () => {
        let {
          id,
          field,
          param,
          value,
        } = this.getCustomizerData(`context.data`)

        let tabSettings = httpContext.session.get(`tab_settings.${id}`) || {}

        let columns = tabSettings.columns = tabSettings.columns || []
        let column = columns.find(c => c.field === field)

        if (!column) {
          column = {
            field,
          }
          columns.push(column)
        }


        switch (value) {
          case 'true': {
            value = true;
          } break;
          case 'false': {
            value = false;
          } break;
        }


        column[param] = value

        httpContext.session.put(`tab_settings.${id}`, tabSettings)
        return {
          success: true,
          data: httpContext.session.get(`tab_settings.${id}`),
        }
      }
    )();

  }

  async tabulator_spreadsheet_settings_y3uxzotg0(httpContext) {




    this.setCustomizerData('context.CurrentModel', tabulator);
    this.setCustomizerData('context.request', httpContext.request);
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext.request);
    this.setCustomizerData('context.response', httpContext.response);
    this.setCustomizerData('response', httpContext.response);
    this.setCustomizerData('session', httpContext.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('current_user', httpContext.auth?.user);
    this.setCustomizerData('context.current_user', httpContext.auth?.user);

    try {
      if (this.getCustomizerData('request')) {
        const {
          schema, rules
        } = Validator
        const validatorSchema = schema.create({
          "id": schema.string({}, [
          ]),
        });
        this.setCustomizerData('context.data',
          await this.getCustomizerData('request').validate(
            {
              schema: validatorSchema,
              messages: {},
            }
          ))
      }
    } catch (e) {
      console.error('Error in Validator Node "validator"');
      //console.error(e);
      throw e;
    }

    this.setCustomizerData('context.default_settings', {
      placeholder: await __("No Data Available", {
        lang: this.getCustomizerData(`context.lang`),
        domain: 'cmn_f'
      }),
      dataLoaderLoading: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2.25C6.95344 2.25 3 4.55625 3 7.5V16.5C3 19.4438 6.95344 21.75 12 21.75C17.0466 21.75 21 19.4438 21 16.5V7.5C21 4.55625 17.0466 2.25 12 2.25ZM19.5 12C19.5 12.9019 18.7612 13.8216 17.4741 14.5238C16.0247 15.3141 14.0803 15.75 12 15.75C9.91969 15.75 7.97531 15.3141 6.52594 14.5238C5.23875 13.8216 4.5 12.9019 4.5 12V10.44C6.09938 11.8463 8.83406 12.75 12 12.75C15.1659 12.75 17.9006 11.8425 19.5 10.44V12ZM6.52594 4.97625C7.97531 4.18594 9.91969 3.75 12 3.75C14.0803 3.75 16.0247 4.18594 17.4741 4.97625C18.7612 5.67844 19.5 6.59812 19.5 7.5C19.5 8.40188 18.7612 9.32156 17.4741 10.0237C16.0247 10.8141 14.0803 11.25 12 11.25C9.91969 11.25 7.97531 10.8141 6.52594 10.0237C5.23875 9.32156 4.5 8.40188 4.5 7.5C4.5 6.59812 5.23875 5.67844 6.52594 4.97625ZM17.4741 19.0238C16.0247 19.8141 14.0803 20.25 12 20.25C9.91969 20.25 7.97531 19.8141 6.52594 19.0238C5.23875 18.3216 4.5 17.4019 4.5 16.5V14.94C6.09938 16.3463 8.83406 17.25 12 17.25C15.1659 17.25 17.9006 16.3425 19.5 14.94V16.5C19.5 17.4019 18.7612 18.3216 17.4741 19.0238Z" fill="#1A1A1A"/>
</svg>`,
      langs: {
        'default': {
          'pagination': {
            "next": await __("Next", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),

            }),

            "prev": await __("Prev", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),
            }),
            "last": await __("Last", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),
            }),

            "first": await __("First", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),
            }),
          },
          'data': {
            "loading": await __("Loading", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),

            }),
            "error": await __("Error", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),

            }),
          },
          'groups': {
            "item": await __("item", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),

            }),
            "items": await __("items", {
              domain: 'cmn_f',
              lang: this.getCustomizerData(`context.lang`),

            }),
          }
        },
        rowContextMenu: {
          "View": await __("View", {
            domain: 'cmn_f',
            lang: this.getCustomizerData(`context.lang`),
          }),
          "Edit": await __("Edit", {
            domain: 'cmn_f',
            lang: this.getCustomizerData(`context.lang`),
          }),
          "Delete": await __("Delete", {
            domain: 'cmn_f',
            lang: this.getCustomizerData(`context.lang`),
          }),
          "Copy": await __("Copy", {
            domain: 'cmn_f',
            lang: this.getCustomizerData(`context.lang`),
          }),
        }
      },

    });

    this.setCustomizerData('context.lang', httpContext.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));

    this.setCustomizerData('context.prd_f_product_variants_for_add', {
      ... this.getCustomizerData(`context.default_settings`),
      // layout: "fitDataFill",
      // option_values:await __("Option Values", {
      //             domain: 'cmn_f',
      //             lang: this.getCustomizerData(`context.lang`),
      //         }),

      spreadsheet: true,
      spreadsheetColumns: 10,
      spreadsheetColumnDefinition: {

        editor: "list",
        editorParams: {
          autocomplete: true, //enable autocomplete mode,
          // filterFunc:function(term, label, value, item){
          //     console.log(term, label, value, item)
          //     return label === term;
          // },
          freetext: true
        },
      },
      editorEmptyValue: undefined,
      clipboard: true,
      editTriggerEvent: "dblclick",
      clipboardCopyConfig: {
        rowHeaders: false, //do not include row headers in clipboard output
        columnHeaders: false, //do not include column headers in clipboard output
      },
      clipboardCopyRowRange: "range",
      clipboardPasteParser: "range",
      clipboardPasteAction: "range",
      selectableRange: 1, //allow only one range at a time
      selectableRangeColumns: true,
      selectableRangeRows: true,
      selectableRangeClearCells: true,
      height: "311px",
      rowHeader: { resizable: false, frozen: true, width: 40, hozAlign: "center", formatter: "rownum", cssClass: "range-header-col", editor: false },
      columnDefaults: {
        headerSort: false,
        headerHozAlign: "center",
        editor: "input",
        resizable: "header",
        width: 100,
      },

      ajaxURL: '/ajax/models/prd_f_prod_variants/customizers/prd_f_prod_variant_data_for_show_all_page_433201fg1eg0jcsh',
      updateURL: '/ajax/models/prd_f_prod_variants/customizers/prd_f_update_variants_via_spreadsheet_9480qqv1v',
      updateParams: {
        paid: `/{/{altrpdata.paid.paid/}/}`,
        txn_f_taxonomy_product: `/{/{altrppage.params.txn_f_taxonomy_product/}/}`,
      },


      spreadSheetColumns: [{
        autocomplete: 'altrpdata.options.vendors'
      }, {
        autocomplete: 'altrpdata.options.variants.0.options'
      }, {
        autocomplete: 'altrpdata.options.variants.1.options'
      }, {
        autocomplete: 'altrpdata.options.variants.2.options'
      }, {
        autocomplete: 'altrpdata.options.variants.3.options'
      }, {
        autocomplete: 'altrpdata.options.variants.4.options'
      },

      ],

    });
    return await (
      async () => {

        const {
          id,
        } = this.getCustomizerData(`context.data`)
        const res = {
          success: true,
          data: this.getCustomizerData(`context`)[id],
        }

        res.data.columns = res.data.columns || []


        let tabSettings = httpContext.session.get(`tab_settings.${id}`) || {}

        let columns = tabSettings.columns = tabSettings.columns || []
        res.data.columns = res.data.columns.map(column => {
          const _c = columns.find(c => c.field === column.field)

          if (_c) {
            return {
              ...column,
              ..._c,
            }
          }
          return column
        })

        return res

      }
    )()
      ;

  }



  // CUSTOM_START

  // CUSTOM_START
}
// CUSTOM_END

// CUSTOM_END
exports.default = tabulatorController;
