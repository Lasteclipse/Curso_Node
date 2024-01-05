const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')



app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {


    const user = {
        name: "Kevin",
        surname: "Allan",
        age: 23,
    }

    const teste = 'palavra'

    const auth = true

    res.render('home', { user: user, teste, auth})


    
})

app.listen(3000, () =>{

    console.log("app funcionando!")
    console.log('http://localhost:3000/')

})