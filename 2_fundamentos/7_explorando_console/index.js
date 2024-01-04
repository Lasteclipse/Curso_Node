// mais de um valor

const x = 10
const y = "Kevin"
const z = [1, 2]

console.log(x, y , z)

// constagem de impressões

console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)


// variavel entre string
console.log('O nome é %s', y)


// limpar console
setTimeout(() => {
    console.clear()
}, 2000)