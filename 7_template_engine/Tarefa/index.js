const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static("public"))


const products = [
    {
        id: "1",
        title: 'Livro',
        price: 12.99

    },
    {
        id: "2",
        title: 'Cadeira',
        price: 300

    },
    {
        id: "3",
        title: 'Lampada',
        price: 4

    },
]

app.get('/', (req, res) => {
    console.log('teste')

    res.render('home', {products})

})

app.get('/product/:id', (req, res) => {

    const product = products[parseInt(req.params.id) - 1]
    res.render('product', { product })
})




app.listen(3000, () =>{

    console.log("app funcionando!")
    console.log('http://localhost:3000/')

})