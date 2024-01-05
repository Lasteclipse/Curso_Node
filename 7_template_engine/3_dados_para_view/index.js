const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {


    const user = {
        name: "Kevin",
        surname: "Allan",
        age: 23,
    }

    const teste = 'palavra'

    res.render('home', { user: user, teste })


    
})

app.listen(3000, () =>{

    console.log("app funcionando!")
    console.log('http://localhost:3000/')

})