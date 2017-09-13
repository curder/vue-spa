# Development Version

* nodejs v7.6.0
* npm 5.3.0
* PHP 7.1.8
* Laravel Framework 5.5.3

## Install

```
npm install
cp .env.example .env
php artisan key:generate
```

## Configuration
修改一些必要的配置信息
* database
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=数据库名称
DB_USERNAME=数据库用户名
DB_PASSWORD=数据库用户名密码
```

```
APP_DEBUG=true
APP_LOG_LEVEL=debug
APP_URL=http://localhost
APP_NAME=Laravel
APP_ENV=local
```
