const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')



app.get('/dashboard', (req, res) => {

    const items = ["Item A", "Item B", "Item C"]
    res.render('dashboard',  {items})
})

app.get('/post', (req, res) =>{
    const post = {
        title : 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar aprender node.js',
        comments: 4,

    }

    res.render('blogpost', (post))
})

app.get('/', (req, res) => {


    const user = {
        name: "Kevin",
        surname: "Allan",
        age: 23,
    }

    const teste = 'palavra'

    const auth = false

    const approved = true

    res.render('home', { user: user, teste, auth, approved})

    
})

app.listen(3000, () =>{

    console.log("app funcionando!")
    console.log('http://localhost:3000/')

})