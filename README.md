# react-local-operation

## about

This repository is composed of:
- client: React.js
- service: Express.js
- db: mysql

## How to run

```
docker compose build
docker compose up -d
```

## How to Confirm application is running

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
