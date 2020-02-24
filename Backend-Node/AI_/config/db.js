var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '134.209.153.23',
  user     : 'admin',
  password : 'xyz',
  database : 'Auth'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });


