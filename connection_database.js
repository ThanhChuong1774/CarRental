const mysql = require('mysql2/promise');

console.log('Creating connection pool...')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'car_rental',
})

pool.query(
    'SELECT * FROM `classes`',
    function (err, results, fields) {
        console.log('>>>check mysql')
        console.log(results)
        console.log(fields)
    }
)

