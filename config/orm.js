const connection = require('./connection.js');

const orm = {
	selectAll: (callback) => {
		connection.query('SELECT * FROM burgers', (err, res) => {
			if (err) throw err;
			callback(res);
		})
	},
	insertOne: (burgerName, callback) => {
		let sql = "INSERT INTO burgers SET ?";
		connection.query(sql, {
			burger_name: burgerName
		},
		(err, res) => {
			if(err) throw err;
			callback(res);
		})
	},
	updateOne: (id, status, callback) => {
		let sql = "UPDATE burgers SET ? WHERE ?";
		connection.query(sql, [
			{
				devoured: status
			},
			{
				id: id
			}
		],
		(err, res) => {
			if (err) throw err;
			callback(res);
		})
	}
}

module.exports = orm;