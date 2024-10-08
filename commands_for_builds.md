rm -rf /var/www/Altrp/

1. Клонировать репозиторий в папку (ветвь shiro)

cd /var/www/
git clone --branch shiro https://github.com/shtrv/Altrp.git


2. Установить зависимости для корня проекта

cd /var/www/Altrp/
npm install --legacy-peer-deps

3. Установить зависимости для altrpnjs

cd /var/www/Altrp/altrpnjs/
npm install


4. Из корня запустить билд проекта

cd /var/www/Altrp/
npm run build-pack-js-server


5. Миграции для БД: создание таблиц и добавление админа (может понадобиться до билда в папке altrpnjs/)

node ace migration:run --force
node ace db:seed name=admin email= password=

6. Запуск

node server.js
node /var/www/Altrp/altrpnjs/build/server.js
