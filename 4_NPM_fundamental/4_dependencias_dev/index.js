const _ = require('lodash')
// npm install chalk@4
const chalk = require('chalk')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 8, 10]

const diff = _.difference(a, b)

console.log(diff)

console.log(chalk.bgRed.bold(diff))