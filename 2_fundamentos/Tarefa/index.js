const chalk = require('chalk')
const inquirer = require('inquirer')

try {
    inquirer.prompt([{
        name: 'nome',
        message: 'Qual é seu nome?: '
    }, {
        name: 'idade',
        message: 'Qual é sua idade?: '
    
    }]).then((answer) => {
        console.log( chalk.bgYellow.black(`Seu nome é ${(answer.nome)} e você tem ${answer.idade}`))
    })

} catch(err) {
    console.log(`Error : ${err}`)
}
