const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/pag2', (req, res) => {
    console.log('teste')
    res.sendFile(`${basePath}/pag2.html`)

})

module.exports = router