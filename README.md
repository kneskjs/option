# [Jeoga Option](https://jeogaltd.com/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeoga/option/blob/master/LICENSE)


#### A Wordpress Like Option Module for Node.js
Database Support: Mongodb
Flexibilty: Can be used with any Node.js App and any kind of Node.js Framework

### Parameters
-   `args` **[Object]** args
    -   `args.db` **[Array]** Mongodb DB instance if not provided it will take default mongodb uri 'mongodb://127.0.0.1:27017/jgdb' (optional, default `null`)

#### Examples
Check examples/ directory and simply run any example using **node example1.js**

### How to Install
  ```javascript
npm install @jeoga/option
yarn add @jeoga/opttion
```

#### How to USE
```javascript
const _Option = require('@jeoga/option');
let Option = new Option(args={})
Option.init()
```
#### Get key value
```javascript
Option.get('key', defaultValue=null)
```
Returns **[Promise]&lt;[string]>** 

#### Update key value
```javascript
Option.update('key', value)
```
Returns **[Promise]&lt;[Boolean]>** 

#### Add new key value
```javascript
Option.add('key', value)
```
Returns **[Promise]&lt;[object]>** 
if Error returns  Returns **[Promise]&lt;[Boolean]>**

#### Remove key value
```javascript
Option.remove('key')
```
Returns **[Promise]&lt;[Boolean]>** 
