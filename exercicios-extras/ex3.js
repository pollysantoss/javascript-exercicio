var valor = []

for(var i = 0; i < 5; i++){
    valor[i] = prompt("Digite um valor:")
    valor[i] = parseInt(valor[i])
}

var crescente = valor.sort()
console.log("Valores em ordem crescente: " + crescente)
console.log("")

var sequencia = valor.reverse()
console.log("Valores na sequência: " + sequencia)
