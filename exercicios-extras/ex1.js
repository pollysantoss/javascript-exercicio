var valor = []

for(var i = 0; i < 5; i++){
    valor[i] = prompt("Digite um valor:")
    valor[i] = parseFloat(valor[i])
}

var qtd = 0
for(num of valor){
    if(num > 0){
        qtd = qtd + 1
    }
}

console.log("O número de valores positivos digitados é: " + qtd)