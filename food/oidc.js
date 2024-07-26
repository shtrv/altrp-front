

JSON.parse(Buffer.from({{context.request_all.token}}.split('.')[1], 'base64').toString())


await DB.table('users')
.returning('id')
.insert({
    name: {{context.user_info.egis_user_name}},
    email: {{context.user_info.sub}},
    password: require("uuid").v4(),
    created_at: new Date(),
    updated_at: new Date(),
    last_login_at: new Date(),
    //position: {{context.user_info.position}},
    subd_full_name: {{context.user_info.egis_subd_name}},
    subd_id: {{context.user_info.egis_subd_id}},
    subd_name: {{context.user_info.egis_subd_name}},
    guid: {{context.user_info.sub}},
    api_data: {{context.user_info}},
    data: JSON.stringify({{context.allowed_roles.data.value}}),
    remember_me_token: {{context.request_all.token}},
    })



    await require('../Models/User').default.query()
    .where('guid', {{context.user_info.sub}})
    .update({
        name: {{context.user_info.egis_user_name}},
        email: {{context.user_info.sub}},
        last_login_at: new Date(),
        //position: {{context.user_info.position}},
        subd_name: {{context.user_info.egis_subd_name}},
        subd_full_name: {{context.user_info.egis_subd_name}},
        subd_id: {{context.user_info.egis_subd_id}},
        //user_guid: {{context.user_info.user_guid}},
        api_data: {{context.user_info}},
        data: JSON.stringify({{context.allowed_roles.data.value}}),
        remember_me_token: {{context.request_all.token}},
        })
