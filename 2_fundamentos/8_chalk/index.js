const chalk = require('chalk')

const nota = 5

// console.log(chalk.green.bold('parabéns você está aprovado!'))

if (nota >= 7) {
    console.log(chalk.green.bold('Vê foi aprovado!!!'))
} else {
    console.log(chalk.green('Você reprovou'))
}