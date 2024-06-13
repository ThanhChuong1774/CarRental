const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    console.log(req.body)
    res.send('get router');
})

module.exports = router