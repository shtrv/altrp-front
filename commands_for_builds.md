rm -rf /var/www/Altrp/


cd /var/www/
git clone --branch shiro https://github.com/shtrv/Altrp.git


cd /var/www/Altrp/
npm install --legacy-peer-deps

cd /var/www/Altrp/altrpnjs/
npm install


cd /var/www/Altrp/
npm run build-pack-js-server


node ace migration:run --force
node ace db:seed name=admin email= password=


node server.js
node /var/www/Altrp/altrpnjs/build/server.js
