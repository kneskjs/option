/*
	End user can use 
	yarn add @jeoga/option
	var _Option = require('@jeoga/option');

	Note: I am using code directly from dist/index.js its upto to you how you want to include library manuualy or as npm package
*/
var _Option = require('../dist/index.js');

const MongoClient = require('mongodb').MongoClient;

class Demo {
    async init() {
    	this.conn = await MongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true })
		const db = this.conn.db('jdb')
		
		this.Option = new _Option({
			db: db
		})
		await this.Option.init()
    }
}

const DemoC = new Demo()
DemoC.init().then(async () => {
	console.log(await DemoC.Option.remove('firstname'));
	console.log(await DemoC.Option.add('firstname', 'aman'));
	console.log(await DemoC.Option.get('firstname'));
	console.log(await DemoC.Option.update('firstname', 'kevin'));
	console.log(await DemoC.Option.get('firstname'));
	DemoC.conn.close()
})
