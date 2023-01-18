var valor = []

for(var i = 0; i < 5; i++){
    valor[i] = prompt("Digite um valor:")
    valor[i] = parseInt(valor[i])
}


var crescente = valor.sort()
var sequencia = valor

console.log(crescente + "\n" + "" + sequencia)
