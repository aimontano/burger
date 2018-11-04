const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'burgers_db'
});

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
	connection.connect(err => {
		if (err) throw err.stack;
		console.log("Connected!!");
	});
}

module.exports = connection;