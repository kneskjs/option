const MongoClient = require('mongodb').MongoClient;

class Option {
	constructor(args={}) {
		Object.assign(this, {
			db: null,
        }, args)
        
    }
    
    async init() {
        await this.initDb()
        this.collection = this.db.collection('options');
    }

    async initDb() {
        if(!this.db) {
            this.conn = await MongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true })
            this.db = this.conn.db('kneskdb')
        }
    }

    async update(key, value) {
		try {
             await this.collection.findOneAndUpdate({name: key.trim()}, { $set: { value : value} }, {upsert: true})
             return true
        } catch(e) {
            console.log(e)
            return false
        }
    }

    async get(key, defaultValue=null) {
    	try {
             var meta = await this.collection.findOne({name: key})
             if(!meta) return defaultValue
             return meta.value
        } catch(e) {
            console.log(e)
            return defaultValue
        }
        return defaultValue
    }

    async remove(key) {
    	try {
             var meta = await this.collection.deleteOne({name: key})
             return true
        } catch(e) {
            console.log(e)
            return false
        }

    }

    async add(key, value) {
    	try {
            var meta = await this.collection.insertOne({
            	name: key.trim(),
            	value: value
            })
            return meta.result
        } catch(e) {
            console.log(e)
            return false
        }
    }
}

module.exports = Option