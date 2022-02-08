const mysql = require("mysql2");
const config = require("./config.js");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE,
});

pool.getConnection(function (err, connection) {
  if (err) throw err; // not connected!

  connection.connect((err) => {
    if (err) {
      console.log("链接失败");
    } else {
      console.log("连接成功");
    }
  });
});
module.exports = pool.promise()
