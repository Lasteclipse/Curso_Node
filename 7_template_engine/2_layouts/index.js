const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    res.render('home', { user: user})

    const user = {
        name: "Kevin",
        surname: "Allan"
    }
    
})

app.listen(3000, () =>{

    console.log("app funcionando!")
    console.log('http://localhost:3000/')

})