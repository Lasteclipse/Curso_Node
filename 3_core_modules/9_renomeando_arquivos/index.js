const fs = require('fs')

fs.existsSync

const arqAntigo = "arquivo.txt"
const arqNovo = "novo.txt"


if (fs.existsSync("arquivo.txt")) {
    fs.rename(arqAntigo, arqNovo , function (err) {
        if(err) {
            console.log(err)
            return
        } else {
            console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
        }})
} else {
    fs.rename(arqNovo, arqAntigo, function (err) {
        if(err) {
            console.log(err)
            return
        } else {
            console.log(`O arquivo ${arqNovo} foi renomeado para ${arqAntigo}`)
        }})
}
