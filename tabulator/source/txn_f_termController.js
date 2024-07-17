const selectForSQLEditor = require("../../helpers/selectForSQLEditor").default
const empty = __importDefault(require("../../helpers/empty")).default;
const get_altrp_setting = __importDefault(require("../../helpers/get_altrp_setting")).default;
const translateContent = __importDefault(require("../../helpers/i18n/translateContent")).default;
const Source = __importDefault(require("../Models/Source")).default;
const axios = __importDefault(require("axios")).default;
const Database = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const DB = Database.default;
const _ = __importStar(require("lodash"));
const Validator = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const {DateTime} = require("luxon");


const txn_f_term = require('../AltrpModels/txn_f_term').default
const AltrpBaseController = require('../Controllers/AltrpBaseController').default
    

class  txn_f_termController  extends AltrpBaseController {

  

  
  
  async filters(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
  }
    
  async update_column(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    let oldModel = await txn_f_term.find(httpContext.params.txn_f_term);
    if(!oldModel){
      httpContext.response.status(404);
      return httpContext.response.json({success:false, message: 'not found'})
    }
    oldModel[httpContext.params.column] = httpContext.request.input('column_value');
    await oldModel.save();
    return httpContext.response.json({success:true,});
          
  }
    
  async destroy(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    let oldModel = await txn_f_term.find(httpContext.params.txn_f_term);
    if(!oldModel){
      httpContext.response.status(404);
      return httpContext.response.json({success:false, message: 'not found'})
    }
    await oldModel.delete();
    return httpContext.response.json({success:true,});
          
  }
    
  async update(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    let oldModel = await txn_f_term.find(httpContext.params.txn_f_term);
    if(!oldModel){
      httpContext.response.status(404);
      return httpContext.response.json({success:false, message: 'not found'})
    }
    oldModel.merge(httpContext.request.all());
    await oldModel.save();
    return httpContext.response.json({success:true, data: oldModel.serialize()});
          
  }
    
  async show(httpContext){
    
    
    
    return httpContext.response.json((await txn_f_term.find(httpContext.params.txn_f_term))?.serialize());
        
  }
    
  async add(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    let newModel = new txn_f_term();
    const newModelData = httpContext.request.all();
    if(newModelData.altrp_ajax){
      delete newModelData.altrp_ajax;
    }
    newModel.fill(newModelData);
    await newModel.save();
    return httpContext.response.json({success: true, data: newModel.serialize()});
        
  }
    
  async index(httpContext){
    
    
    
    const query = txn_f_term.query();

    let search = httpContext.request.qs().s;
    let page = parseInt(httpContext.request.qs().page);
    let limit = parseInt(httpContext.request.qs().pageSize);
    let filters = {};

    if(httpContext.request.qs().filters){
      try {
        filters = JSON.parse(httpContext.request.qs().filters);
      } catch (e) {

      }
    }

    for(let filter in filters){
      if(filters.hasOwnProperty(filter)){
        query.orWhere(filter, 'like', `%${filters[filter]}%`);
      }
    }

    if(search){
      
      query.orWhere('uuid', 'like', `%${search}%`);
      
    }

    const order = httpContext.request.qs()?.order === 'asc' ? 'asc' : 'desc';
    query.orderBy(httpContext.request.qs()?.order_by || 'id', order);

    if(page && limit){
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
      hasMore:false,
      pageCount: 0,
      data:  await query.select('*')
    });
    
  }
    
  async options(httpContext){
    
    
    
    let query = txn_f_term.query();

    let filters = {};

    if(httpContext.request.qs().filters){
      try {
        filters = JSON.parse(httpContext.request.qs().filters);
      } catch (e) {

      }
    }

    for(let filter in filters){
      if(filters.hasOwnProperty(filter)){
        query.orWhere(filter, 'like', `%${filters[filter]}%`);
      }
    }

    if(httpContext.request.qs().s){
      query.where(query=>{
        query.orWhere('title', 'like',
          `%${httpContext.request.qs().s}%`);
        query.orWhere('title', 'like',
          `%${httpContext.request.qs().s}%`);
      })
    }

    let result = (await query.select(
      { 'label':'title',  'value': 'id' }
    )).map(result => result.$extras);

    return httpContext.response.json(result);
        
  }
    
  async txn_f_term_update_robotizer_5lvfwbv56wakr7rk(httpContext){
    
    if(httpContext && ! httpContext?.auth?.user){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Access denied'});
    }
    
    
    if(httpContext && ! await httpContext.auth.user.hasPermissions(['2'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false, message: 'Permission denied (permissions)'});
    }
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    return await(
async()=>{

const inst  = await this.getCustomizerData(`context.CurrentModel`).query().where('uuid', all.uuid).first()

if(! inst){
    return {
        success: false,
        textErrors: 'Txn_f_term Not Found'
    }
}
inst.merge(this.getCustomizerData(`context.validator`))

await inst.save()

return {
    success: true
}

}    )();
    
  }
    
  async txn_f_term_bulk_update_robotizer_kr11ycdb9crgxyg5(httpContext){
    
    if(httpContext && ! httpContext?.auth?.user){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Access denied'});
    }
    
    
    if(httpContext && ! await httpContext.auth.user.hasPermissions(['2'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false, message: 'Permission denied (permissions)'});
    }
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    return await(
async()=>{

const insts  = await this.getCustomizerData(`context.CurrentModel`).query().whereIn('uuid', all.items || [])

for(const inst of insts){
    
    inst.merge(this.getCustomizerData(`context.validator`))
    
    await inst.save()
}

return {
    success: true
}

}    )();
    
  }
    
  async txn_f_term_add_robotizer_pas60gav4ea4u51m(httpContext){
    
    if(httpContext && ! httpContext?.auth?.user){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Access denied'});
    }
    
    
    if(httpContext && ! await httpContext.auth.user.hasPermissions(['1'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false, message: 'Permission denied (permissions)'});
    }
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    
    try{
      if(this.getCustomizerData('request')){
        const {
        schema, rules
      } = Validator
      const validatorSchema = schema.create({
        "name": schema.string({}, [
          rules.unique({table:'txn_f_terms', column:'name'}),
    ]),
        "title": schema.string({}, [
    ]),
        "description": schema.string.optional({}, [
    ]),
      });
        this.setCustomizerData('context.validator',
          await this.getCustomizerData('request').validate(
            {
              schema: validatorSchema,
              messages: {
          'name.required':
          this.replaceContentWithData(
            (await translateContent('{{{{This is a required field::cmn_f}}}}', {lang: httpContext.request.cookie('altrp_lang') || get_altrp_setting('site_language', 'en')})).content
          ),
          'name.unique': this.replaceContentWithData(
            (await translateContent('{{{{Enter a unique value::cmn_f}}}}', {lang: httpContext.request.cookie('altrp_lang') || get_altrp_setting('site_language', 'en')})).content
          ),
          'title.required':
          this.replaceContentWithData(
            (await translateContent('{{{{This is a required field::cmn_f}}}}', {lang: httpContext.request.cookie('altrp_lang') || get_altrp_setting('site_language', 'en')})).content
          ),},
            }
          ))
      }
    } catch(e) {
      console.error('Error in Validator Node "validator"');
      //console.error(e);
      throw e;
    }
      return await(
async()=>{

const inst  = await this.getCustomizerData(`context.CurrentModel`).create({   
    ...this.getCustomizerData(`context.validator`),
    user_id: this.getCustomizerData(`current_user.id`),
})



return {
    success: true
}

}    )();
    
  }
    
  async txn_f_term_delete_robotizer_evf8vssdljkw23yt(httpContext){
    
    if(httpContext && ! httpContext?.auth?.user){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Access denied'});
    }
    
    
    if(httpContext && ! await httpContext.auth.user.hasPermissions(['4'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false, message: 'Permission denied (permissions)'});
    }
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    return await(
async()=>{

const inst  = await this.getCustomizerData(`context.CurrentModel`).query().where('uuid', all.uuid).first()

if(! inst){
    return {
        success: false,
        textErrors: 'Txn_f_term Not Found'
    }
}


await inst.delete()

return {
    success: true
}

}    )();
    
  }
    
  async txn_f_term_bulk_delete_robotizer_8flj7kep8xfntma3(httpContext){
    
    if(httpContext && ! httpContext?.auth?.user){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Access denied'});
    }
    
    
    if(httpContext && ! await httpContext.auth.user.hasPermissions(['4'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false, message: 'Permission denied (permissions)'});
    }
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    return await(
async()=>{

const insts  = await this.getCustomizerData(`context.CurrentModel`).query().whereIn('uuid', all.items || [])

for(const inst of insts){
    

    await inst.delete()
}

return {
    success: true
}

}    )();
    
  }
    
  async txn_f_term_get_robotizer_6pyqz9uc80ekmctm(httpContext){
    
    if(httpContext && ! httpContext?.auth?.user){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Access denied'});
    }
    
    
    if(httpContext && ! await httpContext.auth.user.hasPermissions(['3'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false, message: 'Permission denied (permissions)'});
    }
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    return await(
async()=>{

let {
    prev,
    next,
    orderBy,
} = all
let inst  = await this.getCustomizerData(`context.CurrentModel`).query().where('uuid', all.uuid).first()

const query = this.getCustomizerData(`context.CurrentModel`).query()

if(! orderBy){
    orderBy = 'title'
}

if(prev){
    query.orderBy(orderBy, 'desc')
    query.where(orderBy, '<', inst[orderBy])
    inst = await query.first()
} else if(next){
    query.orderBy(orderBy, 'asc')
    query.where(orderBy, '>', inst[orderBy])
    inst = await query.first()
    
}

if(! inst){
    httpContext.response.status(404)
    return {
        success: false,
        textErrors: ' Txn_f_term Not Found'
    }
}

return {
    success: true,
    data : inst
}

}    )();
    
  }
    
  async txn_f_term_data_for_show_all_page_433201fg14h1l0im(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin','manager'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    return await(
    async()=>{
    const query = this.getCustomizerData(`context.CurrentModel`).query()
    
    const {
        page,
        pageSize,
        
    } = all
    
    const res = {
        success:true,
        data: {
            
        }
    }
    
    query.where(
        query=>{
            if(all.s){
            let search = all.s.split(' ')
            search = search.filter(s=>s)
            
            query.orWhere(query=>{
            for(const s of search){
                query.orWhere('zakazchik','ilike', `%${s}%`)
            }
            })
            }
            
            if(all.s){
            let search = all.s.split(' ')
            search = search.filter(s=>s)
            
            /* query.orWhere(query=>{
            for(const s of search){
                query.orWhere('object_name','ilike', `%${s}%`)
            }
            }) */
            }
        }
    )
    
    if(all.s){
    let search = all.s.split(' ')
    search = search.filter(s=>s)
    
    query.orWhere(query=>{
    for(const s of search){
        //query.orWhere('description','ilike', `%${s}%`)
    }
    })
    }
    
    if(_.isArray(all.sort)){
        all.sort.forEach(s=>{
            query.orderBy(s.field, s.dir || 'asc')
        })
    
    }  
    
    const {
        order,
        orderBy
    } = all
    
    if(orderBy){
        query.orderBy(orderBy, order || 'asc')
    } else {
        query.orderBy("id", 'asc')
    }
    
    if(page && pageSize){
        let _data = await query.paginate(page, pageSize)
        _data = _data.toJSON()
        res.data.rows = _data.data
        res.data.meta = {
            ..._data.meta,
            all_count: (await this.getCustomizerData(`context.CurrentModel`).query().count('*').first()).$extras.count
        }
    } else {
       res.data.rows  = await query
    }
    
    
    return res
    }
        )();
    
  }
    
  async txn_f_table_settings_dto2nkflw(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['user','client','need-confirm','manager','admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    
    try{
      if(this.getCustomizerData('request')){
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
    } catch(e) {
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
        tooltip:true,
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
        rowFormatter: function(row) {
        //row - row component
    
            var data = row.getData();
            console.log("-------------------------data: " + data);
            if (data.id > 2) {
                row.getElement().style.backgroundColor = "#1e3b20";
            }
        },
    },

    columns: [ //set column definitions for imported table data

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
                
                "prev":await __("Prev", {
                    domain: 'cmn_f',
                    lang: this.getCustomizerData(`context.lang`),
                }),
                "last":await __("Last", {
                    domain: 'cmn_f',
                     lang: this.getCustomizerData(`context.lang`),
               }),
                
                "first":await __("First", {
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
            "View":await __("View", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            "Edit":await __("Edit", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            "Delete":await __("Delete", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            "Copy":await __("Copy", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
        }
    },
    
});
        
        this.setCustomizerData('context.lang', httpContext.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
        
        this.setCustomizerData('context.txn_f_term', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txn_f_terms/customizers/txn_f_term_update_robotizer_5lvfwbv56wakr7rk',
    dblClickEdit: true,
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    //autoColumns:true,
    rowFormatter:function(row){
        if(row.getData().id > 2){
            row.getElement().style.backgroundColor = "#1e3b20";
        }
    },
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title: "id",
            width: 300,
            field: "id",
            formatter:"plaintext"
        },
        {
            title: "ссылки",
            width: 300,
            formatter:"link",
            formatterParams:{
                label:"Редактировать",
                url:"http://192.168.100.140:147/kadastr?pageSize=50&page=1&status_id=1"
            }
        },
        {
            title: "Заказчик",
            /*  await __("zakazchik", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),  */
            width: 300,
            editor: true,
            field: "zakazchik"
        },
        {
            title: "Название объекта",
            /*  await __("object_name", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),  */
            width: 600,
            editor: true,
            field: "object_name",
            //formatter:"color"
        },
        {
            title: "Письма в ДГИ",
            /*  await __("object_name", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),  */
            width: 200,
            editor: true,
            field: "letters_to_dgi",
            formatter:"lookup"
        },
    ],
    ajaxURL: '/ajax/models/txn_f_terms/customizers/txn_f_term_data_for_show_all_page_433201fg14h1l0im',
});
        
        this.setCustomizerData('context.uzik_kadastr', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/uzik_kadastrs/customizers/uzik_kadastr_update_robotizer_5lvfwbv56tj8hgk3',
    dblClickEdit: true,
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    autoColumns:true,
    rowFormatter:function(row){
        if(row.getData().id > 2){
            row.getElement().style.backgroundColor = "#1e3b20";
        }
    },
    columns: [ //set column definitions for imported table data

    ],
    ajaxURL: '/ajax/models/uzik_kadastrs/customizers/uzik_kadastr_data_for_show_all_page_433201fg1yrik2ak',
});
        
        this.setCustomizerData('context.txn_f_taxonomy_common', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txn_f_taxonomies/customizers/txn_f_taxonomy_update_robotizer_5lvfwbv56clvrbta',
    dblClickEdit: true,
    groupBy: 'txn_f_term_name_relation.title',
    groupStartOpen:false,
    pagination: false,
    height:"calc(100vh - 223px)",
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 300,
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_term_options'
            },
            editorField: 'txn_f_term_name',
            field: "txn_f_term_name_relation.title"
        },
        {
            title:await __("Description", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 600,    
            headerSort: false,
            editor: true,
            field: "description"
        },
    ],
    ajaxURL: '/ajax/models/txn_f_taxonomies/customizers/txn_f_taxonomy_data_for_show_all_page_433201fg1g6d3l9w',
});
        
        this.setCustomizerData('context.txn_f_taxonomy_geo', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txn_f_taxonomies/customizers/txn_f_taxonomy_update_robotizer_5lvfwbv56clvrbta',
    dblClickEdit: true,
    pagination: false,
    height:"calc(100vh - 223px)",
    dataTree:true,
    rowSelectWidth: 75,
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_term_options'
            },
            editorField: 'txn_f_term_name',
            field: "txn_f_term_name_relation.title"
        },
        {
            title:await __("Description", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "description"
        },
        {
            title:await __("Parent", {
                domain: 'txn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "txn_f_taxonomy_name"
        },
    ],
    ajaxURL: '/ajax/models/txn_f_taxonomies/customizers/txn_f_taxonomy_data_for_show_all_geo_aisgr169r',
});
        
        this.setCustomizerData('context.txn_f_taxonomy_kw', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txn_f_taxonomies/customizers/txn_f_taxonomy_update_robotizer_5lvfwbv56clvrbta',
    dblClickEdit: true,
    groupBy: 'txn_f_taxonomy_name_relation.title',
    groupStartOpen:true,
    pagination: false,
    height:"calc(100vh - 223px)",
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: true,
            field: "title"
        },
        {
            title:await __("Keyword Type", {
                domain: 'txn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            headerSort: false,
            field: "txn_f_taxonomy_name_relation.title"
        },
        {
            title:await __("Description", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 600,
            headerSort: false,
            editor: true,
            field: "description"
        },
    ],
    ajaxURL: '/ajax/models/txn_f_taxonomies/customizers/txn_f_taxonomy_data_for_show_all_kw_8j2q1klg0',
});
        
        this.setCustomizerData('context.txn_f_taxonomy_custom', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txn_f_taxonomies/customizers/txn_f_taxonomy_update_robotizer_5lvfwbv56clvrbta',
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
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: true,
            field: "title"
        },
        {
            title:await __("Taxonomy Term", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_term_options'
            },
            editorField: 'txn_f_term_name',
            field: "txn_f_term_name_relation.title"
        },
        {
            title:await __("Description", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "description"
        },
        {
            title:await __("Parent Taxonomy", {
                domain: 'txn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "txn_f_taxonomy_name"
        },
    ],
    ajaxURL: '/ajax/models/txn_f_taxonomies/customizers/txn_f_taxonomy_data_for_show_all_custom_b7fpu2tly',
});
        
        this.setCustomizerData('context.txn_f_cycle', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txn_f_cycles/customizers/txn_f_cycle_update_robotizer_5lvfwbv56j5ohee3',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            editor: true,
            field: "title"
        },
        {
            title:await __("Interval", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_interval_options'
            },
            editorField: 'txn_f_taxonomy_interval',
            field: "txn_f_taxonomy_interval_relation.title"
        },
        {
            title:await __("Weekday", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: false,
            editorField: 'txn_f_taxonomy_weekday',
            field: "txn_f_taxonomy_weekday"
        },
    ],
    ajaxURL: '/ajax/models/txn_f_cycles/customizers/txn_f_cycle_data_for_show_all_page_433201fg1np7seo6',
});
        
        this.setCustomizerData('context.withdrawall_history', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txn_f_cycles/customizers/txn_f_cycle_update_robotizer_5lvfwbv56j5ohee3',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        // {
        //     title:await __("Human", {
        //         domain: 'cmn_f',
        //         lang: this.getCustomizerData(`context.lang`),
        //     }),
        //     headerSort: false,
        //     width: 200,
        //     field: "human.full_name"
        // },
        {
            title:await __("Address", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            field: "address"
        },
        {
            title:await __("Amount", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            field: "amount"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Date", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            field: "created_at"
        },
        {
            title:await __("Completed Date", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            field: "wlt_f_transaction.created_at"
        },
    ],
    ajaxURL: '/ajax/models/wlt_f_withdrawal_requests/customizers/wlt_f_get_withdrawal_cmv3jvpik',
});
        
        this.setCustomizerData('context.withdrawall_requests', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/wlt_f_withdrawal_requests/customizers/wlt_f_update_withdrawal_np6odd0em',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Human", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            field: "wlt_f_wallet_address_full_waid_relation.wlt_f_wallet_waid_relationship.hmn_f_human_relation.full_name"
        },
        {
            title:await __("Current Balance", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 100,
            field: "balance"
        },
        {
            title:await __("Address", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            field: "address"
        },
        {
            title:await __("Amount", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 100,
            field: "amount"
        },
        {
            title:await __("Commission", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 100,
            field: "commission"
        },
        {
            title:await __("Total", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 100,
            field: "total"
        },
        {
            title:await __("Date", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            field: "created_at"
        },
        {
            title:await __("Completed Date", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            field: "wlt_f_transaction.created_at"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            editor: 'list',  
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
    ],
    ajaxURL: '/ajax/models/wlt_f_withdrawal_requests/customizers/wlt_f_get_withdrawal_cmv3jvpik',
});
        
        this.setCustomizerData('context.cmn_f_setting', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/cmn_f_settings/customizers/cmn_f_setting_update_robotizer_5lvfwbv56gifk6o0',
    dblClickEdit: true,
    groupBy: 'txn_f_taxonomy_setting_relation.title',
    groupStartOpen:false,
    pagination: false,
    height:"calc(100vh - 223px)",
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Attribute", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            editor: true,
            headerSort: true,
            field: "title"
        },
        {
            title:await __("Value", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: true,
            field: "value"
        },
        {
            title:await __("Taxonomy Term", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            visible:false,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_options'
            },
            editorField: 'txn_f_taxonomy_setting',
            field: "txn_f_taxonomy_setting_relation.title"
        },
        {
            title:await __("Description", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 600,
            headerSort: false,
            editor: true,
            field: "data.description"
        },
    ],
    ajaxURL: '/ajax/models/cmn_f_settings/customizers/cmn_f_setting_data_for_show_all_page_433201fg1csidjis',
});
        
        this.setCustomizerData('context.cmn_f_setting_integra', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/cmn_f_settings/customizers/cmn_f_setting_update_robotizer_5lvfwbv56gifk6o0',
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
            title:await __("Attribute", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            editor: true,
            field: "title"
        },
        {
            title:await __("Value", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 50,
            editor: true,
            field: "value"
        },
        {
            title:await __("Description", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.description"
        },
        {
            title:await __("Taxonomy Term", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_options'
            },
            editorField: 'txn_f_taxonomy_setting',
            field: "txn_f_taxonomy_setting_relation.title"
        },
    ],
    ajaxURL: '/ajax/models/cmn_f_settings/customizers/cmn_f_setting_data_for_show_integrations_os2jxaf2l',
});
        
        this.setCustomizerData('context.cmn_f_setting_access', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/cmn_f_settings/customizers/cmn_f_setting_update_robotizer_5lvfwbv56gifk6o0',
    dblClickEdit: true,
    rowSelecHeaderHozAlign: 'left',
    dataTree:true,
    rowSelecHozAlign: 'left',
    rowSelectWidth: 75,
    pagination: false,
    height:"calc(100vh - 223px)",
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Attribute", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            editor: true,
            field: "title"
        },
        {
            title:await __("Value", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            hozAlign: 'center',
            formatter:"tickCross",
            formatterParams : { 
                allowTruthy : true ,
            },
            field: "value"
        },
        {
            title:await __("Description", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.description"
        },
    ],
    ajaxURL: '/ajax/models/cmn_f_settings/customizers/cmn_f_setting_data_for_show_access_g1z5wgz2u',
});
        
        this.setCustomizerData('context.cnt_s_contractor', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_update_robotizer_5lvfwbv56832zmpd',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title: "Logo",
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            editor: true,
            field: "caid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "title",
            formatter:"link", formatterParams:{
                urlField:"caid",
                urlPrefix:"/m/database/contractors/view/",
            },
            //headerFilter: true,
            //filterRemote: true
        },
        {
            title:await __("Country", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_country_options'
            },
            editorField: 'txn_f_taxonomy_country',
            headerSort: false,
            field: "txn_f_taxonomy_country_relation.title",
            //headerFilter: true,
            //filterRemote: true,
            //headerFilterParams: {values:'altrpdata.data.txn_f_taxonomy_country_options'},
            //filterField: 'txn_f_taxonomy_country'
        },
        {
            title:await __("City", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_city_options'
            },
            editorField: 'txn_f_taxonomy_city',
            headerSort: false,
            field: "txn_f_taxonomy_city_relation.title",
            //headerFilter: "input",
            //filterField: 'txn_f_taxonomy_city',
            //filterRemote: true
        },
        {
            title:await __("Representative", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.representative",
        },
        {
            title:await __("Phone", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.phone",
        },
        {
            title:await __("Email", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 300,
            editor: true,
            field: "data.email",
        },
    ],
    ajaxURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_data_for_show_all_page_433201fg175ualig',
});
        
        this.setCustomizerData('context.cnt_s_contractor_buyers', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_update_robotizer_5lvfwbv56832zmpd',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title: "Logo",
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            editor: true,
            field: "caid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "title"
        },
        {
            title:await __("Country", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_country_options'
            },
            editorField: 'txn_f_taxonomy_country',
            field: "txn_f_taxonomy_country_relation.title"
        },
        {
            title:await __("City", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_city_options'
            },
            editorField: 'txn_f_taxonomy_city',
            field: "txn_f_taxonomy_city_relation.title"
        },
        {
            title:await __("Representative", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.representative"
        },
        {
            title:await __("Phone", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.phone"
        },
        {
            title:await __("Email", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.email"
        },
    ],
    ajaxURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_data_for_show_buyers_0kkrdom3m',
});
        
        this.setCustomizerData('context.cnt_s_contractor_cargos', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_update_robotizer_5lvfwbv56832zmpd',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title: "Logo",
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            editor: true,
            field: "caid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "title"
        },
        {
            title:await __("Country", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_country_options'
            },
            editorField: 'txn_f_taxonomy_country',
            field: "txn_f_taxonomy_country_relation.title"
        },
        {
            title:await __("City", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_city_options'
            },
            editorField: 'txn_f_taxonomy_city',
            field: "txn_f_taxonomy_city_relation.title"
        },
        {
            title:await __("Representative", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.representative"
        },
        {
            title:await __("Phone", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.phone"
        },
        {
            title:await __("Email", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.email"
        },
    ],
    ajaxURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_data_for_show_cargos_l13w6zm8p',
});
        
        this.setCustomizerData('context.cnt_s_contractor_sellers', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_update_robotizer_5lvfwbv56832zmpd',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title: "Logo",
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            editor: true,
            field: "caid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "title"
        },
        {
            title:await __("Country", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_country_options'
            },
            editorField: 'txn_f_taxonomy_country',
            field: "txn_f_taxonomy_country_relation.title"
        },
        {
            title:await __("City", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_city_options'
            },
            editorField: 'txn_f_taxonomy_city',
            field: "txn_f_taxonomy_city_relation.title"
        },
        {
            title:await __("Representative", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.representative"
        },
        {
            title:await __("Phone", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.phone"
        },
        {
            title:await __("Email", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.email"
        },
    ],
    ajaxURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_data_for_show_sellers_yh9cp3jve',
});
        
        this.setCustomizerData('context.cnt_s_contractor_trucks', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_update_robotizer_5lvfwbv56832zmpd',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title: "Logo",
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            editor: true,
            field: "caid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "title"
        },
        {
            title:await __("Country", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_country_options'
            },
            editorField: 'txn_f_taxonomy_country',
            field: "txn_f_taxonomy_country_relation.title"
        },
        {
            title:await __("City", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_city_options'
            },
            editorField: 'txn_f_taxonomy_city',
            field: "txn_f_taxonomy_city_relation.title"
        },
        {
            title:await __("Representative", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.representative"
        },
        {
            title:await __("Phone", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.phone"
        },
        {
            title:await __("Email", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "data.email"
        },
    ],
    ajaxURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_data_for_show_trucks_toteoj27l',
});
        
        this.setCustomizerData('context.cnt_s_label', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txn_f_relations/customizers/txn_f_relation_update_robotizer_5lvfwbv56en8rycg',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 200,
            editor: true,
            field: "title"
        },
        {
            title:await __("Delivery", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.delivery'
            },
            editorField: 'txn_f_taxonomy_name',
            field: "txn_f_taxonomy_name_relation.title"
        },
        {
            title:await __("Destination", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.destination'
            },
            editorField: 'data.destination',
            field: "data.destination"
        },
    ],
    ajaxURL: '/ajax/models/cnt_s_contractors/customizers/cnt_s_contractor_data_for_show_page_m36m0zgp3ab3bpbz',
    ///ajax/models/txn_f_relations/customizers/txn_f_relation_data_for_show_aid_jnig4p7ie
});
        
        this.setCustomizerData('context.txt_f_text', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_page_433201fg15rqj4m2',
});
        
        this.setCustomizerData('context.txt_f_text_ad', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_ad_n8rnsk80r',
});
        
        this.setCustomizerData('context.txt_f_text_article', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_article_8pairbdum',
});
        
        this.setCustomizerData('context.txt_f_text_comment', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_comment_0636hgh8f',
});
        
        this.setCustomizerData('context.txt_f_text_faq', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_faq_ppmwpur8r',
});
        
        this.setCustomizerData('context.txt_f_text_legal', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_legal_4ber15od0',
});
        
        this.setCustomizerData('context.txt_f_text_news', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_news_qjov4szeg',
});
        
        this.setCustomizerData('context.txt_f_text_release', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_release_v729hq25w',
});
        
        this.setCustomizerData('context.txt_f_text_team', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_team_97d1h9a4u',
});
        
        this.setCustomizerData('context.txt_f_text_testimonial', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_testimonial_fs9r89t7u',
});
        
        this.setCustomizerData('context.txt_f_text_glossary', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_glossary_4h89v481z',
});
        
        this.setCustomizerData('context.txt_f_text_lesson', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_lesson_esewc4n76',
});
        
        this.setCustomizerData('context.txt_f_text_exercise', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_exercise_nivcq8cly',
});
        
        this.setCustomizerData('context.txt_f_text_newsletter', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_data_for_show_all_newsletter_srgihmb6p',
});
        
        this.setCustomizerData('context.prd_f_product', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/prd_f_products/customizers/prd_f_product_update_robotizer_5lvfwbv565p5iehk',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            editor: false,
            field: "paid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"paid",
                urlPrefix:"/m/database/products/edit/",
            },
            editor: true,
            field: "title" 
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list',  
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_product_options'
            },
            editorField: 'txn_f_taxonomy_product',
            field: "txn_f_taxonomy_product_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
    ],
    ajaxURL: '/ajax/models/prd_f_products/customizers/prd_f_product_data_for_show_all_page_433201fg18tpw9od',
});
        
        this.setCustomizerData('context.bas_s_base_inventory', {
    ... this.getCustomizerData(`context.default_settings`),
    dblClickEdit: true,
    rowSelecHeaderHozAlign: 'left',
    withoutContext: true,
    rowSelecHozAlign: 'left',
    //groupBy: 'loc_s_location_laid',
    //groupByTitle: 'this.getCustomizerData(`loc_s_location_laid_relation.title`)',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            editor: false,
            field: "prd_f_prod_variant_full_paid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"full_paid",
                urlPrefix:"/m/database/inventory/view/",
            },
            editor: true,
            field: "name"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            // editor: 'list', 
            // editorParams: {
            //     values: 'altrpdata.data.txn_f_taxonomy_text_options'
            // },
            //editorField: 'txn_f_taxonomy_text',
            field: "prd_f_product_paid_relationship.txn_f_taxonomy_product_relation.title"
        },
        {
            title:await __("Unavailable", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "$extras.unavailable",
        },
        {
            title:await __("Committed", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "$extras.commited",
        },
        {
            title:await __("Available", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "$extras.available",
        },
        {
            title:await __("In transporting", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "$extras.in_transporting",
        },
    ],
    ajaxURL: '/ajax/models/bas_s_base_inventories/customizers/bas_s_inv_aggregation_2fao75ue4',
});
        
        this.setCustomizerData('context.bas_s_base_details_inventory', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/bas_s_base_inventories/customizers/bas_s_base_inventory_update_robotizer_5lvfwbv56gywmv1n',
    dblClickEdit: true,
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    //groupBy: 'loc_s_location_laid',
    //groupByTitle: 'this.getCustomizerData(`loc_s_location_laid_relation.title`)',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Location", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "loc_s_location_laid_relation.title"
        },
        {
            title:await __("Transport", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            field: "transport_full_paid_relation.name"
        },
        {
            title:await __("Quantity", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            edit: 'number',
            field: "quantity"
        },
    ],
    ajaxURL: '/ajax/models/bas_s_base_inventories/customizers/bas_s_base_inventory_data_for_show_all_page_433201fg1a86ap75',
});
        
        this.setCustomizerData('context.trust_mark', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/prd_f_products/customizers/prd_f_product_update_robotizer_5lvfwbv565p5iehk',
    dblClickEdit: true,
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum",
        },
        {
            title:await __("UTD", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Sender", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "taid"
        },
        {
            title:await __("TIN", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"slug",
                urlPrefix:"/m/articles/texts/edit/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("TRR", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("PSNR", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
    ],
    ajaxURL: '/ajax/models/prd_f_products/customizers/prd_f_product_data_for_show_all_page_433201fg18tpw9od',
});
        
        this.setCustomizerData('context.trust_mark_incoming', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/prd_f_products/customizers/prd_f_product_update_robotizer_5lvfwbv565p5iehk',
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
            title:await __("Sender", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "sender.name"
        },
        {
            title:await __("TIN", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                //urlField:"id",
                urlField:"view_link",
                //urlPrefix:"/m/database/products/trust-mark/utd/",
            },
            editor: true,
            field: "sender.inn"
        },
        {
            title:await __("TRR", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "sender.kpp"
        },
        {
            title:await __("PSNR", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "sender.ogrn"
        },
    ],
    ajaxURL: '/ajax/models/prd_f_products/customizers/prd_f_deal_data_for_show_all_page_csb5gy0o9',
});
        
        this.setCustomizerData('context.trust_mark_view', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/prd_f_products/customizers/prd_f_product_update_robotizer_5lvfwbv565p5iehk',
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
            title:await __("SKU", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "sku"
        },
        {
            title:await __("Title", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "title"
        },
        {
            title:await __("Quantity", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "quantity"
        },
        {
            title:await __("Price", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "price"
        },
        {
            title:await __("Amount", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "amount"
        },
        {
            title:await __("Excise", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "excise"
        },
        {
            title:await __("Tax", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "tax"
        },
        {
            title:await __("Tax Amount", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "tax"
        },
        {
            title:await __("Total", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "total"
        },
        {
            title:await __("Verified", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "verified"
        },
    ],
    ajaxURL: '/ajax/models/prd_f_products/customizers/trust_mark_get_document_products_i0vh6ss2y',
});
        
        this.setCustomizerData('context.trust_mark_create_utd_variants', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/prd_f_products/customizers/prd_f_product_update_robotizer_5lvfwbv565p5iehk',
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
            title:await __("Title", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "title"
        },
        {
            title:await __("Quantity", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "characteristics.quantity"
        },
        {
            title:await __("Price", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "characteristics.price"
        },
    ],
    ajaxURL: '/ajax/models/prd_f_products/customizers/trust_mark_utd_prepare_uyofas45a',
});
        
        this.setCustomizerData('context.del_s_deal', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/del_s_deals/customizers/del_s_deal_update_robotizer_5lvfwbv56vuwged2',
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
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            editor: false,
            field: "daid"
        },
        {
            title:await __("Label", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter:"link", formatterParams:{
                urlField:"daid",
                urlPrefix:"/m/orders/deals-plan/view/",
            },
            field: "txn_f_taxonomy_label_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Delivery", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_delivery_options'
            },
            editorField: 'txn_f_taxonomy_delivery',
            field: "txn_f_taxonomy_delivery_relation.title"
        },
        {
            title:await __("Order Type", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_deal_options'
            },
            editorField: 'txn_f_taxonomy_deal',
            field: "txn_f_taxonomy_deal_relation.title"
        },
        {
            title:await __("Cycle", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            width: 100,
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_cycle_options'
            },
            editorField: 'txn_f_taxonomy_cycle',
            field: "txn_f_taxonomy_cycle_relation.title"
        },
        {
            title:await __("Boxes", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: true,
            field: "data.total_boxes"
        },
        {
            title:await __("Units", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "data.total_units"
        },
        {
            title:await __("P-Price", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "data.purchase_price"
        },
        {
            title:await __("Purchase", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 120,
            editor: false,
            field: "data.total_purchase"
        },
        {
            title:await __("S-Price", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "data.sale_price"
        },
        {
            title:await __("Sale", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 120,
            editor: false,
            field: "data.total_sale"
        },
    ],
    ajaxURL: '/ajax/models/del_s_deals/customizers/del_s_deal_data_for_show_all_page_433201fg1qc2xq1y',
});
        
        this.setCustomizerData('context.del_s_deal_event', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/del_s_deals/customizers/del_s_deal_update_robotizer_5lvfwbv56vuwged2',
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
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            editor: false,
            field: "daid"
        },
        {
            title:await __("Label", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter:"link", formatterParams:{
                urlField:"daid",
                urlPrefix:"/m/orders/deals-plan/view/",
            },
            field: "txn_f_taxonomy_label_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Delivery", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_delivery_options'
            },
            editorField: 'txn_f_taxonomy_delivery',
            field: "txn_f_taxonomy_delivery_relation.title"
        },
        {
            title:await __("Order Type", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_deal_options'
            },
            editorField: 'txn_f_taxonomy_deal',
            field: "txn_f_taxonomy_deal_relation.title"
        },
        {
            title:await __("Cycle", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            width: 100,
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_cycle_options'
            },
            editorField: 'txn_f_taxonomy_cycle',
            field: "txn_f_taxonomy_cycle_relation.title"
        },
        {
            title:await __("Boxes", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "data.total_boxes"
        },
        {
            title:await __("Units", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "data.total_units"
        },
        {
            title:await __("P-Price", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "data.purchase_price"
        },
        {
            title:await __("Purchase", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 120,
            editor: false,
            field: "data.total_purchase"
        },
        {
            title:await __("S-Price", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "data.sale_price"
        },
        {
            title:await __("Sale", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 120,
            editor: false,
            field: "data.total_sale"
        },
    ],
    ajaxURL: '/ajax/models/del_s_deal_events/customizers/del_s_deal_event_data_for_show_all_page_433201fg1giasjfz',
});
        
        this.setCustomizerData('context.del_s_deal_product', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/del_s_deal_products/customizers/del_s_deal_product_update_robotizer_5lvfwbv562c3xu9z',
    groupBy: 'del_s_complect_delivery_relation.data.title',
    groupStartOpen:true,
    pagination: false,
    height:"calc(100vh - 223px)",
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    dblClickEdit: true,
    // nestedTables: {
    //     _children: {
    //         columns:[ //set column definitions for imported table data
    //             {
    //                 title: "№",
    //                 headerSort: false,
    //                 formatter: "rownum"
    //             },
    //             {
    //                 title:await __("Product", {
    //                     domain: 'prd_f',
    //                     lang: this.getCustomizerData(`context.lang`),
    //                 }),
    //                 headerSort: false,
    //                 editor: 'list', 
    //                 editorParams: {
    //                     values: 'altrpdata.data.prd_f_prod_variant_full_paid'
    //                 },
    //                 editorField: 'prd_f_prod_variant_full_paid',
    //                 field: "prd_f_prod_variant_full_paid_relation.name"
    //             },
    //             {
    //                 title:await __("Quantity", {
    //                     domain: 'cmn_f',
    //                     lang: this.getCustomizerData(`context.lang`),
    //                 }),
    //                 headerSort: false,
    //                 editor: true,
    //                 field: "quantity"
    //             },
    //             {
    //                 title:await __("Price", {
    //                     domain: 'cmn_f',
    //                     lang: this.getCustomizerData(`context.lang`),
    //                 }),
    //                 headerSort: false,
    //                 editor: true,
    //                 field: "price"
    //             },
    //         ],
    //     }
    // },
    // columns: [ //set column definitions for imported table data
    //     {
    //         title: "№",
    //         headerSort: false,
    //         formatter: "rownum"
    //     },
    //     {
    //         title:await __("Title", {
    //             domain: 'cmn_f',
    //             lang: this.getCustomizerData(`context.lang`),
    //         }),
    //         width: 200,
    //         editor: true,
    //         field: "data.title"
    //     },
    // ],
    
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Product", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 160,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.prd_f_prod_variant_full_paid'
            },
            editorField: 'prd_f_prod_variant_full_paid',
            field: "prd_f_prod_variant_full_paid_relation.name"
        },
        {
            title:await __("Quantity", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "quantity"
        },
        {
            title:await __("Price", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "price"
        },    
        {
            title:await __("Package", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 30,
            headerSort: false,
            visible:false,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.del_s_complect_delivery_options'
            },
            editorField: 'del_s_complect_delivery_uuid',
            field: "del_s_complect_delivery_relation.data.title"
        },    
    ],
    
    ajaxURL: '/ajax/models/del_s_deal_products/customizers/del_s_deal_product_data_for_show_all_deal_lv24ceue5',
});
        
        this.setCustomizerData('context.del_s_complect_delivery', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/del_s_complect_deliveries/customizers/del_s_complect_delivery_update_robotizer_5lvfwbv56454wtao',
    pagination: false,
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "data.title"
        },
        {
            title:await __("Items", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "quantity"
        },
        {
            title:await __("Price", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "price"
        },    
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
    ],
    ajaxURL: '/ajax/models/del_s_complect_deliveries/customizers/del_s_complect_delivery_data_for_show_all_page_deal_qewo6nzhj',
});
        
        this.setCustomizerData('context.bas_s_log_event_deal', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/bas_s_log_event_deals/customizers/bas_s_log_event_deal_update_robotizer_5lvfwbv56ola01bg',
    dblClickEdit: true,
    pagination: false,
    groupBy: 'bas_s_logistic_relation.title',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "bas_s_logistic_relation.title"
        },
        {
            title:await __("Package", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "del_s_complect_delivery_relationship.data.title"
        },
        {
            title:await __("Quantity", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            headerSort: false,
            editor: 'number',
            field: "quantity"

        },
    ],
    ajaxURL: '/ajax/models/bas_s_log_event_deals/customizers/bas_s_get_log_event_deal_events_for_deal_page_xs8t4aqo0',
});
        
        this.setCustomizerData('context.rows_for_logistics', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/bas_s_log_event_deals/customizers/bas_s_log_event_deal_update_robotizer_5lvfwbv56ola01bg',
    dblClickEdit: true,
    pagination: false,
    groupBy: 'deal.title',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Deal", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "deal.title"
        },
        {
            title:await __("Package", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "del_s_complect_delivery_relationship.data.title"
        },
        {
            title:await __("Quantity", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            headerSort: false,
            editor: 'number',
            field: "quantity"

        },
    ],
    ajaxURL: '/ajax/models/bas_s_log_event_deals/customizers/bas_s_log_event_deal_for_logistic_page_y19dmimn6',
});
        
        this.setCustomizerData('context.rtn_s_routine', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"uuid",
                urlPrefix:"/m/planning/rtn_s_routines/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("RAID", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "raid"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("User", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/rtn_s_routines/customizers/rtn_s_routine_data_for_show_all_page_433201fg15z40qry',
});
        
        this.setCustomizerData('context.rtn_s_routine_event', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"uuid",
                urlPrefix:"/m/planning/rtn_s_routines/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("RAID", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "raid"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("User", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/rtn_s_routine_events/customizers/rtn_s_routine_event_data_for_show_all_page_433201fg1x7rgwok',
});
        
        this.setCustomizerData('context.rtn_s_routine_step', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/rtn_s_routine_steps/customizers/rtn_s_routine_step_data_for_show_all_page_433201fg1xn87yj0',
});
        
        this.setCustomizerData('context.rtn_s_routine_event_step', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/txt_f_texts/customizers/txt_f_text_update_robotizer_5lvfwbv560v0tsgi',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/edit/",
            },
            editor: false,
            field: "taid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            formatter:"link", formatterParams:{
                urlField:"taid",
                urlPrefix:"/m/content/texts/show/",
            },
            editor: true,
            field: "title"
        },
        {
            title:await __("Category", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_text_options'
            },
            editorField: 'txn_f_taxonomy_text',
            field: "txn_f_taxonomy_text_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Author", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
    ],
    ajaxURL: '/ajax/models/rtn_s_routine_event_steps/customizers/rtn_s_routine_event_step_data_for_show_all_page_433201fg1v1ujddq',
});
        
        this.setCustomizerData('context.bas_s_logistic', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/bas_s_logistics/customizers/bas_s_logistic_update_robotizer_5lvfwbv56cdt16ix',
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
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"baid",
                urlPrefix:"/m/orders/logistics-plan/view/",
            },
            editor: false,
            field: "baid"
        },
        {
            title:await __("Number", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: true,
            field: "number"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "title"
        },
        {
            title:await __("Number", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_label_options'
            },
            editorField: 'txn_f_taxonomy_label',
            field: "txn_f_taxonomy_label_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Cycle", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            width: 100,
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_cycle_options'
            },
            editorField: 'txn_f_taxonomy_cycle',
            field: "txn_f_taxonomy_cycle_relation.title"
        },
        {
            title:await __("Owner", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            width: 100,
            editorParams: {
                values: 'altrpdata.data.owner_eaid_options'
            },
            editorField: 'owner_eaid',
            field: "owner_eaid_relation.full_name"
        },
        {
            title:await __("Exit Day", {
                domain: 'bas_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 150,
            editor: true,
            field: "data.exit_day"
        },
        {
            title:await __("Flight Day", {
                domain: 'bas_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 150,
            editor: false,
            field: "data.flight_day"
        },
        {
            title:await __("Closing Day", {
                domain: 'bas_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 150,
            editor: false,
            field: "data.closing_day"
        },
        {
            title:await __("Loading Day", {
                domain: 'bas_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 150,
            editor: false,
            field: "data.loading_day"
        },
    ],
    ajaxURL: '/ajax/models/bas_s_logistics/customizers/bas_s_logistic_data_for_show_all_page_433201fg1gh8pu84',
});
        
        this.setCustomizerData('context.emp_s_position', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/emp_s_positions/customizers/emp_s_position_update_robotizer_5lvfwbv56vvdkvl1',
    dblClickEdit: true,
    pagination: false,
    height:"calc(100vh - 207px)",
    dataTree:true,
    rowSelectWidth: 75,
    rowSelecHeaderHozAlign: 'left',
    rowSelecHozAlign: 'left',
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            editor: true,
            field: "title"
        },
        {
            title:await __("Department", {
                domain: 'emp_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 250,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_department_options'
            },
            editorField: 'txn_f_taxonomy_department',
            field: "txn_f_taxonomy_department_relation.title"
        },
        {
            title:await __("Position", {
                domain: 'emp_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_position_options'
            },
            editorField: 'txn_f_taxonomy_position',
            field: "txn_f_taxonomy_position_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Parent Position", {
                domain: 'emp_s',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.emp_s_position_parent'
            },
            editorField: 'emp_s_position_eaid',
            field: "emp_s_position_relation.title"
        },
    ],
    ajaxURL: '/ajax/models/emp_s_positions/customizers/emp_s_position_data_for_show_all_page_433201fg13fg7ali',
});
        
        this.setCustomizerData('context.emp_s_employee', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/emp_s_employees/customizers/emp_s_employee_update_robotizer_5lvfwbv569fzvg77',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            editor: true,
            field: "full_eaid"
        },
        {
            title:await __("Full Name", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 250,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.hmn_f_human_options'
            },
            editorField: 'hmn_f_human_haid',
            field: "hmn_f_human_haid_relation.full_name"
        },
        {
            title:await __("Position", {
                domain: 'emp_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.emp_s_position_options'
            },
            editorField: 'emp_s_position_eaid',
            field: "emp_s_position_eaid_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Source", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_source_options'
            },
            editorField: 'txn_f_taxonomy_source',
            field: "txn_f_taxonomy_source_relation.title"
        },
        {
            title:await __("Relation", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_relation_options'
            },
            editorField: 'txn_f_taxonomy_relation',
            field: "txn_f_taxonomy_relation_relation.title"
        },
    ],
    ajaxURL: '/ajax/models/emp_s_employees/customizers/emp_s_employee_data_for_show_all_page_433201fg1ecnz242',
});
        
        this.setCustomizerData('context.gol_s_goal_events', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL:'/ajax/models/gol_s_goal_events/customizers/gol_s_goal_event_update_robotizer_5lvfwbv56iv6knnq',
    dblClickEdit: true,
    responsiveLayout: undefined,
    columns: [ //set column definitions for imported table data
        {
            title: "",
            headerSort: false,
            maxWidth : 30,
            resizable : false,
            formatter: 'color',
            field: "__color"
        },
        {
            title: "Gol_s_goal_gaid",
            headerSort: false,
            
            field: "gol_s_goal_gaid_relation.title"
        },
        {
            title: "Full_gaid",
            field: "full_gaid"
        },
        {
            title: "Title",
            editor:true,
            field: "title",
        },
        {
            title: "Owner_eaid",
            field: "owner_eaid"
        },
        {
            title: "Assigner_aid",
            editor: 'list',
            editorUpdateAfter: true,
            editorParams: {
                values: 'altrpdata.assigner_options.options',
            },
            field: "assigner_aid"
        },
        {
            title: "Txn_f_taxonomy_status",
            headerSort: false,
            editor: 'list', 
            editable: false,
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title",
            headerFilter: true,
            headerFilterParams: {values:'altrpdata.data.txn_f_taxonomy_status_options'},
            filterField: 'txn_f_taxonomy_status'
        },
        {
            title: "Txn_f_taxonomy_goal",
            headerSort: false,
            field: "txn_f_taxonomy_goal_relation.title"
        },
        {
            title: "Sgm_s_segment_said",
            headerSort: false,
            field: "sgm_s_segment_said_relation.title"
        },

    ],
    ajaxURL: '/ajax/models/gol_s_goal_events/customizers/gol_s_goal_event_data_for_show_all_page_433201fg14ihwwsn',
});
        
        this.setCustomizerData('context.gol_s_goal_bug_tracker', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/gol_s_goal_events/customizers/gol_s_goal_event_update_robotizer_5lvfwbv56iv6knnq',
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
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            visible:false,
            width: 100,
            editor: false,
            field: "gaid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            editor: true,
            field: "title"
        },
        {
            title:await __("Bug Type", {
                domain: 'gol_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "data.bug_type"
        },
        {
            title:await __("Priority", {
                domain: 'gol_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            field: "data.priority"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
    ],
    ajaxURL: '/ajax/models/gol_s_goal_events/customizers/gol_s_goal_bug_tracker_data_for_show_all_page_w7mkzu9la',
});
        
        this.setCustomizerData('context.hmn_f_human', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/hmn_f_human/customizers/hmn_f_human_update_robotizer_5lvfwbv5623q8anp',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"haid",
                urlPrefix:"/m/people/humans/edit/",
            },
            editor: false,
            field: "haid"
        },
        {
            title:await __("Full Name", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "full_name",
        },
        {
            title:await __("Phone", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter:"link", formatterParams:{
                urlField:"phone",
                urlPrefix:"tel:",
            },
            headerSort: false,
            editor: true,
            field: "phone",
        },
        {
            title:await __("Email", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter:"link", formatterParams:{
                urlField:"email",
                urlPrefix:"mailto:",
            },
            headerSort: false,
            editor: true,
            field: "email",
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Source", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_source_options'
            },
            editorField: 'txn_f_taxonomy_source',
            field: "txn_f_taxonomy_source_relation.title"
        },
        {
            title:await __("Relation", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_relation_options'
            },
            editorField: 'txn_f_taxonomy_relation',
            field: "txn_f_taxonomy_relation_relation.title"
        },
        {
            title:await __("Industry", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_industry_options'
            },
            editorField: 'txn_f_taxonomy_industry',
            field: "txn_f_taxonomy_industry_relation.title"
        },
    ],
    ajaxURL: '/ajax/models/hmn_f_human/customizers/hmn_f_human_data_for_show_all_page_433201fg1sniiylz',
});
        
        this.setCustomizerData('context.iss_s_issue', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/iss_s_issues/customizers/iss_s_issue_update_robotizer_5lvfwbv56h21umyq',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 300,
            editor: true,
            headerSort: true,
            field: "iaid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: true,
            field: "title"
        },
        {
            title:await __("Human", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            formatter:"link", 
            formatterParams:{
                urlField:"hmn_f_human_issue_relation.hmn_f_human_haid_relation.haid",
                urlPrefix:"/m/people/humans/",
            },
            field: "hmn_f_human_issue_relation.hmn_f_human_haid_relation.full_name"
        },
        
            
        {
            title:await __("Description", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: true,
            field: "description"
        },
        {
            title:await __("Status", {
                domain: 'txn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Issue Type", {
                domain: 'iss_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_issue'
            },
            editorField: 'txn_f_taxonomy_issue',
            field: "txn_f_taxonomy_issue_relation.title"
        },
    ],
    ajaxURL: '/ajax/models/iss_s_issues/customizers/iss_s_issue_data_for_show_all_page_433201fg1387we59',
});
        
        this.setCustomizerData('context.loc_s_location', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/loc_s_locations/customizers/loc_s_location_update_robotizer_5lvfwbv565lw1886',
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
            title:await __("Image", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            formatter: 'image',
            headerSort: false,
            field: "media_id_relation.url"
        },
        {
            title:await __("Code", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            formatter:"link", formatterParams:{
                urlField:"haid",
                urlPrefix:"/m/people/humans/edit/",
            },
            editor: false,
            field: "haid"
        },
        {
            title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "title",
        },
        {
            title:await __("Excerpt", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "title",
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("City", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_city_options'
            },
            editorField: 'txn_f_taxonomy_city',
            field: "txn_f_taxonomy_xity_relation.title"
        },
        {
            title:await __("Type", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_location_options'
            },
            editorField: 'txn_f_taxonomy_location',
            field: "txn_f_taxonomy_location_relation.title"
        },
        {
            title:await __("Zip", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor: true,
            field: "zip",
        },
    ],
    ajaxURL: '/ajax/models/loc_s_locations/customizers/loc_s_location_data_for_show_all_page_433201fg1709xcp5',
});
        
        this.setCustomizerData('context.wlt_transactions', {
    ... this.getCustomizerData(`context.default_settings`),
    ajaxURL: '/ajax/models/wlt_f_transactions/customizers/wlt_f_transaction_data_for_show_all_page_433201fg1wnhlbip',
    updateURL: '/ajax/models/wlt_f_transactions/customizers/wlt_f_transaction_update_robotizer_5lvfwbv56awc4u5r',
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
            title:await __("Deal", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "fin_s_finance_full_faid_relation.del_s_deal_event.del_s_deal_daid_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_pay_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Amount", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 120,
            editor: false,
            field: "amount"
        },
    ],
});
        
        this.setCustomizerData('context.wlt_wallets', {
    ... this.getCustomizerData(`context.default_settings`),
    ajaxURL: '/ajax/models/wlt_f_wallets/customizers/wlt_f_wallet_data_for_show_all_page_433201fg19pkb8z3',
    updateURL: '/ajax/models/wlt_f_wallets/customizers/wlt_f_wallet_update_robotizer_5lvfwbv56vgkck0w',
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
            title:await __("Waid", {
                domain: 'wlt_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "waid",
            
            formatter:"link", formatterParams:{
                urlField:"waid",
                urlPrefix:"/m/accounting/wlt_f_wallets/show/",
            },
        },
        {
            title:await __("Owner", {
                domain: 'wlt_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false,
            
            headerSort: false,
            field: "owner"
        },
        {
            title:await __("Currencies", {
                domain: 'wlt_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 120,
            headerSort: false,
            editor: false,
            field: "currencies"
        },
    ],
});
        
        this.setCustomizerData('context.wlt_transactions_for_deal', {
    ... this.getCustomizerData(`context.default_settings`),
    ajaxURL: '/ajax/models/wlt_f_transactions/customizers/wlt_f_transaction_data_for_show_all_page_433201fg1wnhlbip',
    updateURL: '/ajax/models/wlt_f_transactions/customizers/wlt_f_transaction_update_robotizer_5lvfwbv56awc4u5r',
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
            title:await __("Deal", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            editor: false,
            field: "fin_s_finance_full_faid_relation.del_s_deal_event.del_s_deal_daid_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_pay_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Amount", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 120,
            editor: false,
            field: "amount"
        },
    ],
});
        
        this.setCustomizerData('context.wlt_transactions_wallet', {
    ... this.getCustomizerData(`context.default_settings`),
    ajaxURL: '/ajax/models/wlt_f_transactions/customizers/wlt_f_transaction_data_for_show_all_page_433201fg1wnhlbip',
    updateURL: '/ajax/models/wlt_f_transactions/customizers/wlt_f_transaction_update_robotizer_5lvfwbv56awc4u5r',
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
            title:await __("Deal", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 100,
            headerSort: false,
            editor: false,
            field: "fin_s_finance_full_faid_relation.del_s_deal_event.del_s_deal_daid_relation.title"
        },
        {
            title:await __("Status", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list', 
            editorParams: {
                values: 'altrpdata.data.txn_f_taxonomy_pay_status_options'
            },
            editorField: 'txn_f_taxonomy_status',
            headerSort: false,
            field: "txn_f_taxonomy_status_relation.title"
        },
        {
            title:await __("Payment Type", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: false, 
            headerSort: false,
            field: "txn_f_taxonomy_pay_type_relation.title"
        },
        {
            title:await __("Amount", {
                domain: 'del_s',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 120,
            editor: false,
            field: "amount"
        },
    ],
});
        
        this.setCustomizerData('context.prd_f_product_variants_for_add', {
    ... this.getCustomizerData(`context.default_settings`),
    // layout: "fitDataFill",
    // option_values:await __("Option Values", {
    //             domain: 'cmn_f',
    //             lang: this.getCustomizerData(`context.lang`),
    //         }),
    ajaxURL: '/ajax/models/prd_f_prod_variants/customizers/prd_f_prod_variant_data_for_show_all_page_433201fg1eg0jcsh',
    updateURL: '/ajax/models/prd_f_prod_variants/customizers/prd_f_prod_variant_update_robotizer_5lvfwbv560gozq2r',
    pagination: false,
    columns: [ //set column definitions for imported table data
        
        {
            title:await __("Name", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 150,
            editor: true,
            field: "name"
        },

        {
            title:await __("Sku", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 100,
            editor: true,
            field: "sku"
        },
        {
            title:await __("Selling Price", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 50,
            editor: true,
            field: "data.price"
        },

    ],
});
        
        this.setCustomizerData('context.prd_f_product_enh', {
    ... this.getCustomizerData(`context.default_settings`),
    // layout: "fitDataFill",
    // option_values:await __("Option Values", {
    //             domain: 'cmn_f',
    //             lang: this.getCustomizerData(`context.lang`),
    //         }),
    ajaxURL: '/ajax/models/prd_f_product_enhances/customizers/prd_f_product_enhance_data_for_show_all_page_433201fg122rsiec',
    pagination: false,
    columns: [ //set column definitions for imported table data
        
        {
            title:await __("Title", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 150,
            editor: true,
            field: "prd_f_product_paid_enhance_relation.title"
        },
        {
            title:await __("Type", {
                domain: 'prd_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            width: 150,
            editor: true,
            field: "txn_f_taxonomy_enhance_relation.title"
        },

        // {
        //     title:await __("Sku", {
        //         domain: 'prd_f',
        //         lang: this.getCustomizerData(`context.lang`),
        //     }),
        //     headerSort: false,
        //     width: 100,
        //     editor: true,
        //     field: "sku"
        // },
        // {
        //     title:await __("Price", {
        //         domain: 'prd_f',
        //         lang: this.getCustomizerData(`context.lang`),
        //     }),
        //     headerSort: false,
        //     width: 50,
        //     editor: true,
        //     field: "data.price"
        // },

    ],
});
        
        this.setCustomizerData('context.product_variants', {
    layout: "fitDataFill",
    option_values:await __("Option Values", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
    columns: [ //set column definitions for imported table data
        {
             title:await __("Option name", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: 'list',
            editorParams:{
                values: 'altrpdata.data.product_options',
                valuesLookup:'active',
            },
            headerSort: false,
            width: '100%',
            field: "option",
        },

    ],
});
        
        this.setCustomizerData('context.product_variants_final', {
    layout: "fitDataFill",
    groupBy:'groupBy',
    groupStartOpen:false,
    columns: [ //set column definitions for imported table data
        {
             title:await __("Title", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            field: "name",
            width: '50%',
        },
        {
             title:await __("Price", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor:"number",
            field: "price",
            formatter:"money", 
            formatterParams:{
                decimal:",",
                thousand:".",
                symbol:"$",
            },
            width: '30%',

        },
        {
             title:await __("Available", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            headerSort: false,
            editor:"number",
            field: "available",
            width: '20%',
        },

    ],
});
        
        this.setCustomizerData('context.del_f_cart', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/del_f_carts/customizers/del_f_cart_update_robotizer_5lvfwbv56ibhgzd8',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("User", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: true,
            field: "user_id"
        },
        {
            title:await __("Vendor", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "vendor_aid"
        },
    ],
    ajaxURL: '/ajax/models/del_f_carts/customizers/del_f_cart_data_for_show_all_page_433201fg1ovrs7x1',
});
        
        this.setCustomizerData('context.del_f_cart_item', {
    ... this.getCustomizerData(`context.default_settings`),
    updateURL: '/ajax/models/del_f_cart_items/customizers/del_f_cart_item_update_robotizer_5lvfwbv56kgp3kz4',
    dblClickEdit: true,
    columns: [ //set column definitions for imported table data
        {
            title: "№",
            headerSort: false,
            formatter: "rownum"
        },
        {
            title:await __("Cart", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            width: 200,
            editor: true,
            field: "del_f_cart_uuid"
        },
        {
            title:await __("Product", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "prd_f_prod_varriant_full_paid"
        },
        {
            title:await __("Quantity", {
                domain: 'cmn_f',   
                lang: this.getCustomizerData(`context.lang`),
            }),
            editor: true,
            field: "quantity"
        },
    ],
    ajaxURL: '/ajax/models/del_f_cart_items/customizers/del_f_cart_item_data_for_show_all_page_433201fg1sq1eorl',
});
        return await(
async()=>{
    
const {
    id,
} = this.getCustomizerData(`context.data`)
const res = {
    success:true,
    data: this.getCustomizerData(`context`)[id],
}

res.data.columns = res.data.columns || []


let tabSettings = httpContext.session.get(`tab_settings.${id}`) || {}
console.log(tabSettings, 'tabSettings')

let columns = tabSettings.columns = tabSettings.columns || []
console.log(res.data.columns)
res.data.columns = res.data.columns.map(column=>{
    const _c = columns.find(c=>c.field === column.field)

    if(_c){
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
    
  async txn_f_table_update_settings_teie0di7e(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['user','client','need-confirm','manager','admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    
    try{
      if(this.getCustomizerData('request')){
        const {
        schema, rules
      } = Validator
      const validatorSchema = schema.create({
        "id": schema.string({}, [
    ]),
        "param": schema.string({}, [
    ]),
        "value": schema.string({}, [
    ]),
        "field": schema.string({}, [
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
    } catch(e) {
      console.error('Error in Validator Node "validator"');
      //console.error(e);
      throw e;
    }
      return await(
async()=>{
let {
    id,
    field,
    param,
    value,
} = this.getCustomizerData(`context.data`)

let tabSettings = httpContext.session.get(`tab_settings.${id}`) || {}

let columns = tabSettings.columns = tabSettings.columns || []
let column = columns.find(c=>c.field === field)

if(! column){
    column = {
        field,
    }
    columns.push(column)
}


switch(value){
    case 'true': {
        value = true;
    }break;
    case 'false': {
        value = false;
    }break;
}


column[param] = value

httpContext.session.put(`tab_settings.${id}`, tabSettings)
return {
    success: true,
    data :  httpContext.session.get(`tab_settings.${id}`),
}
}
    )();
    
  }
    
  async txn_f_spreadsheet_settings_dhfvcvpk2(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin','manager'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    
    try{
      if(this.getCustomizerData('request')){
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
    } catch(e) {
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
                
                "prev":await __("Prev", {
                    domain: 'cmn_f',
                    lang: this.getCustomizerData(`context.lang`),
                }),
                "last":await __("Last", {
                    domain: 'cmn_f',
                     lang: this.getCustomizerData(`context.lang`),
               }),
                
                "first":await __("First", {
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
            "View":await __("View", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            "Edit":await __("Edit", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            "Delete":await __("Delete", {
                domain: 'cmn_f',
                lang: this.getCustomizerData(`context.lang`),
            }),
            "Copy":await __("Copy", {
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
    
    spreadsheet:true,
    spreadsheetColumns: 10,
    spreadsheetColumnDefinition:{
        
        editor:"list",
        editorParams: {
            autocomplete:true, //enable autocomplete mode,
            // filterFunc:function(term, label, value, item){
            //     console.log(term, label, value, item)
            //     return label === term;
            // },
            freetext:true
        },
    },
    editorEmptyValue:undefined, 
    clipboard:true,
    editTriggerEvent:"dblclick",
    clipboardCopyConfig:{
        rowHeaders:false, //do not include row headers in clipboard output
        columnHeaders:false, //do not include column headers in clipboard output
    },
    clipboardCopyRowRange:"range",
    clipboardPasteParser:"range",
    clipboardPasteAction:"range",
    selectableRange:1, //allow only one range at a time
    selectableRangeColumns:true,
    selectableRangeRows:true,
    selectableRangeClearCells:true,
    height:"311px",
    rowHeader:{resizable: false, frozen: true, width:40, hozAlign:"center", formatter: "rownum", cssClass:"range-header-col", editor:false},
    columnDefaults:{
        headerSort:false,
        headerHozAlign:"center",
        editor:"input",
        resizable:"header",
        width:100,
    },
    
    ajaxURL: '/ajax/models/prd_f_prod_variants/customizers/prd_f_prod_variant_data_for_show_all_page_433201fg1eg0jcsh',
    updateURL: '/ajax/models/prd_f_prod_variants/customizers/prd_f_update_variants_via_spreadsheet_9480qqv1v',
    updateParams: {
        paid: `{{altrpdata.paid.paid}}`,
        txn_f_taxonomy_product: `{{altrppage.params.txn_f_taxonomy_product}}`,
    },


    spreadSheetColumns: [{
        autocomplete: 'altrpdata.options.vendors'   
    },{
        autocomplete: 'altrpdata.options.variants.0.options'   
    },{
        autocomplete: 'altrpdata.options.variants.1.options'   
    },{
        autocomplete: 'altrpdata.options.variants.2.options'   
    },{
        autocomplete: 'altrpdata.options.variants.3.options'   
    },{
        autocomplete: 'altrpdata.options.variants.4.options'   
    },
        
    ],
    
});
        return await(
async()=>{
    
const {
    id,
} = this.getCustomizerData(`context.data`)
const res = {
    success:true,
    data: this.getCustomizerData(`context`)[id],
}

res.data.columns = res.data.columns || []


let tabSettings = httpContext.session.get(`tab_settings.${id}`) || {}

let columns = tabSettings.columns = tabSettings.columns || []
res.data.columns = res.data.columns.map(column=>{
    const _c = columns.find(c=>c.field === column.field)

    if(_c){
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
    
  async get_txn_f_term_default(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    
        this.setCustomizerData('context.data.data', await require('../AltrpModels/txn_f_term').default.all());
        return httpContext.response.json(this.getCustomizerData(`context.data`));
    
  }
    
  async get_by_id_txn_f_term_default(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    
        this.setCustomizerData('context.data.data', await require('../AltrpModels/txn_f_term').default.find(httpContext.request.qs().id));
        return httpContext.response.json(this.getCustomizerData(`context.data`));
    
  }
    
  async post_txn_f_term_default(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    
        this.setCustomizerData('context.order', httpContext.request.all());
        
        this.unsetCustomizerData('context.order.altrp_ajax', null);
        
        this.setCustomizerData('context.data.data', await require('../AltrpModels/txn_f_term').default.create(this.getCustomizerData(`context.order`)));
        
        this.setCustomizerData('context.data.success', 1);
        return httpContext.response.json(this.getCustomizerData(`context.data`));
    
  }
    
  async put_txn_f_term_default(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    
        this.setCustomizerData('context.data.data', await require('../AltrpModels/txn_f_term').default.find(httpContext.request.all().id));
        if( this.getCustomizerData('context.data.data') == null ){
        this.setCustomizerData('context.data.success', 'Not Found');
        
        this.setCustomizerData('context._', this.getCustomizerData('context.response').status('405'));
        return httpContext.response.json(this.getCustomizerData(`context.data`));}else if( this.getCustomizerData('context.data.data') != null ){
        this.setCustomizerData('context.order', httpContext.request.all());
        
        this.unsetCustomizerData('context.order.altrp_ajax', null);
        
        this.setCustomizerData('context.data.data', await this.getCustomizerData(`context.data.data`).merge(this.getCustomizerData(`context.order`)).save());
        
        this.setCustomizerData('context.data.success', 'true');
        return httpContext.response.json(this.getCustomizerData(`context.data`));}
    
  }
    
  async delete_txn_f_term_default(httpContext){
    
    if(httpContext && ! await httpContext?.auth?.user?.hasRole(['admin'])){
      httpContext.response.status(403);
      return httpContext.response.json({success: false,  message: 'Permission denied (roles)'});
    }
    
    
    
    const qs = httpContext?.request.qs() || {};
    const all = httpContext?.request.all() || {};
    const status = httpContext?.response.status || (()=>{});
    this.setCustomizerData('context.CurrentModel', txn_f_term );
    this.setCustomizerData('CurrentModel', txn_f_term );
    this.setCustomizerData('context.request', httpContext?.request);
    this.setCustomizerData('lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('context.lang', httpContext?.request.cookie('altrp_lang') || require('../../helpers/get_altrp_setting').default('site_language', 'en'));
    this.setCustomizerData('httpContext', httpContext);
    this.setCustomizerData('request', httpContext?.request);
    this.setCustomizerData('context.response', httpContext?.response);
    this.setCustomizerData('response', httpContext?.response);
    this.setCustomizerData('session', httpContext?.session);
    this.setCustomizerData('this', this);
    this.setCustomizerData('altrpuser', httpContext?.auth?.user);
    this.setCustomizerData('current_user', httpContext?.auth?.user);
    this.setCustomizerData('context.current_user', httpContext?.auth?.user);
    
        this.setCustomizerData('context.data.data', await require('../AltrpModels/txn_f_term').default.query().where("id", httpContext.request.qs().id).delete());
        return httpContext.response.json(this.getCustomizerData(`context.data`));
    
  }
    
    

  // CUSTOM_START
  
  // CUSTOM_START
}
// CUSTOM_END

// CUSTOM_END
exports.default =  txn_f_termController ;
