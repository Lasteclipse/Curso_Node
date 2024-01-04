const express = require('express')

const app = express()
const port = 5000
const path = require('path')

const basePath = path.join(__dirname, 'templates')

// Importando pags
const pag1 = require('./pag1')
const pag2 = require('./pag2')

// usa css
app.use(express.static('public'))


//Chama os routers
app.use('/', pag1)

app.use('/', pag2)


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/landing.html`)

})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
    console.log(`http://localhost:${port}`)
    
})
