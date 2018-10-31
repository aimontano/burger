const orm = require('./../config/orm.js');

const burger = {
	selectAll: cb => {
		orm.selectAll(cb);
	},
	insertOne: (name, cb) => {
		orm.insertOne(name, cb);
	},
	updateOne: (id, status, cb) => {
		orm.updateOne(id, status, cb);
	}
}

module.exports = burger;