const express = require('express')
var pool = require('./connection_database')
const app = express()
const port = 3030
var bodyParser = require('body-parser')
var router1 = require('./apiRouter')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1/', router1)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})