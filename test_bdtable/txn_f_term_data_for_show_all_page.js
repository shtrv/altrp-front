await(
    async()=>{
    const query = {{context.CurrentModel}}.query()
    
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
            })
            } */
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
            all_count: (await {{context.CurrentModel}}.query().count('*').first()).$extras.count
        }
    } else {
       res.data.rows  = await query
    }
    
    
    return res
    }
        )()