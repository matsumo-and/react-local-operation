# react-local-operation

## about

このリポジトリは３つの構成からなります。
- client: React.js
- service: Express.js
- db: mysql

## How to run

```
docker compose build
docker compose up -d
```

## Confirm application

### client
open `localhost:8080`

### service 
open `localhost:3000`

### db
```
mysql -u user -p
show databases
use appname
show tables
```
