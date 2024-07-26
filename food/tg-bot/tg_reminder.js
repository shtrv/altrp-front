async function(context) {
    return new Promise(async function(resolve, reject) {
        try {
            // Проверка, содержится ли переменная context.today в таблице holidays
            const holidayCheck = await DB.from('holidays').where('date', context.today).first();
            if (holidayCheck) {
                resolve({ message: 'Сегодня выходной или праздник. Отправка уведомлений не требуется.' });
                return;
            }
            const user_ids_yesterday = new Set(context.yesterday_food.map(obj => obj.user_id));
            const user_ids_today = new Set(context.today_food.map(obj => obj.user_id));
            const missing_user_ids = [];

            for (const user_id of user_ids_yesterday) {
                if (!user_ids_today.has(user_id)) {
                    missing_user_ids.push(user_id);
                }
            }

            context.missing_user_ids = missing_user_ids;

            // Функция для отправки POST-запроса для каждого отсутствующего идентификатора пользователя
            async function sendPostRequest() {
                return new Promise(async function(resolvePOST, rejectPOST) {
                    try {
                        // Создаем массив промисов для отправки всех POST-запросов параллельно
                        const promises = missing_user_ids.map(async (user_id) => {
                            // Получаем имя пользователя из базы данных
                            const user = await DB.from('users').where('id', user_id).first();
                            const user_name = user ? user.name : 'Unknown';
                            const body = {
                                chat_id: context.chat_id,
                                text: user_name + ', у Вас на сегодня нет заказа'
                            };

                            // Отправляем POST-запрос
                            await require('axios').post(context.url, body);
                        });
                        
                        // Ждем выполнения всех промисов
                        await Promise.all(promises);
                        resolvePOST({ message: 'Отправлено' });
                    } catch (error) {
                        rejectPOST(error);
                    }
                });
            }

            await sendPostRequest();
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}










async function processMissingUsers(context) {
    return new Promise(async function(resolve, reject) {
        try {
            // Проверка, содержится ли переменная context.today в таблице holidays
            const holidayCheck = await DB.from('holidays').where('date', context.today).first();
            if (holidayCheck) {
                resolve({ message: 'Сегодня праздник. Отправка уведомлений не требуется.' });
                return;
            }

            const user_ids_yesterday = new Set(context.yesterday_food.map(obj => obj.user_id));
            const user_ids_today = new Set(context.today_food.map(obj => obj.user_id));
            const missing_user_ids = [];

            for (const user_id of user_ids_yesterday) {
                if (!user_ids_today.has(user_id)) {
                    missing_user_ids.push(user_id);
                }
            }

            context.missing_user_ids = missing_user_ids;

            async function sendPostRequest() {
                return new Promise(async function(resolvePOST, rejectPOST) {
                    try {
                        const promises = missing_user_ids.map(async (user_id) => {
                            const user = await DB.from('users').where('id', user_id).first();
                            const user_name = user ? user.name : 'Unknown';
                            const body = {
                                chat_id: context.chat_id,
                                text: user_name + ', у Вас на сегодня нет заказа'
                            };

                            await require('axios').post(context.url, body);
                        });

                        await Promise.all(promises);
                        resolvePOST({ message: 'Отправлено' });
                    } catch (error) {
                        rejectPOST(error);
                    }
                });
            }

            await sendPostRequest();
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}


async function(context){
    return new Promise(function(resolve, reject) {
        const user_ids_yesterday = new Set(context.yesterday_food.map(obj => obj.user_id));
        const user_ids_today = new Set(context.today_food.map(obj => obj.user_id));
        const missing_user_ids = [];
        
        for (const user_id of user_ids_yesterday) {
            if (!user_ids_today.has(user_id)) {
                missing_user_ids.push(user_id);
            }
        }
        
        context.missing_user_ids = missing_user_ids;
        
        // Функция для отправки POST-запроса для каждого отсутствующего идентификатора пользователя
        async function sendPostRequest() {
            return new Promise(async function(resolvePOST, rejectPOST) {
                try {
                    // Создаем массив промисов для отправки всех POST-запросов параллельно
                    const promises = missing_user_ids.map(async (user_id) => {
                        // Получаем имя пользователя из базы данных
                        const user_name = await DB.from('users').where('id', user_id);
                        const body = {
                            chat_id: context.chat_id,
                            text: user_name + ', у Вас на сегодня нет заказа'
                        };
                        
                        // Отправляем POST-запрос
                        await require('axios').post(context.url, body);
                    });
        
                    // Ждем выполнения всех промисов
                    await Promise.all(promises);
                    
                    const responseTG = {mssage: 'Отправлено'};
                    resolvePOST();
                } catch (error) {
                    rejectPOST(error);
                }
            });
        }        
        
       
        
        resolve();
    });
}




async function(context) {
    return new Promise(async function(resolve, reject) {
        try {
            // Проверка, содержится ли переменная context.today в таблице holidays
            const holidayCheck = await DB.from('holidays').where('date', context.today).first();
            if (holidayCheck) {
                resolve({ message: 'Сегодня выходной или праздник. Отправка уведомлений не требуется.' });
                return;
            }
            const user_ids_yesterday = new Set(context.yesterday_food.map(obj => obj.user_id));
            const user_ids_today = new Set(context.today_food.map(obj => obj.user_id));
            const missing_user_ids = [];

            for (const user_id of user_ids_yesterday) {
                if (!user_ids_today.has(user_id)) {
                    missing_user_ids.push(user_id);
                }
            }

            context.missing_user_ids = missing_user_ids;

            // Функция для отправки POST-запроса для каждого отсутствующего идентификатора пользователя
            async function sendPostRequest() {
                return new Promise(async function(resolvePOST, rejectPOST) {
                    try {
                        // Создаем массив промисов для отправки всех POST-запросов параллельно
                        const promises = missing_user_ids.map(async (user_id) => {
                            // Получаем информацию о пользователе из базы данных
                            const user = await DB.from('users').where('id', user_id).first();
                            const user_name = user ? user.name : 'Unknown';

                            // Получаем информацию о чате Telegram пользователя
                            const telegram_chat = await DB.from('telegram_chats').where('user_id', user_id).first();
                            const chat_id = telegram_chat ? telegram_chat.chat_id : null;

                            if (chat_id) {
                                const body = {
                                    chat_id: chat_id,
                                    text: user_name + ', у Вас на сегодня нет заказа'
                                };

                                // Отправляем POST-запрос
                                await require('axios').post(context.url, body);
                            }
                        });
                        
                        // Ждем выполнения всех промисов
                        await Promise.all(promises);
                        resolvePOST({ message: 'Отправлено' });
                    } catch (error) {
                        rejectPOST(error);
                    }
                });
            }

            await sendPostRequest();
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}