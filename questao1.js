var matriz1 = []
var matriz2 = []
var linha1matriz1 = []
var linha2matriz1 = []
var linha1matriz2 = []
var linha2matriz2 = []

for (var contador = 0; contador == 1; contador++) {
    linha1matriz1 = (prompt("Digite os 2 números da primeira linha da matriz 2x2, separados por vírgula")).split(",")
    linha2matriz1 = (prompt("Digite os 2 números da segunda linha da matriz 2x2 separados por vírgula")).split(",")
    linha1matriz1 = parseFloat(linha1matriz1)
    linha2matriz1 = parseFloat(linha2matriz1)
}

matriz1.push(linha1matriz1,linha2matriz1)

for (var contador = 0; contador == 1; contador++) {
  linha1matriz2 = (prompt("Digite os 2 números da primeira linha da matriz 2x2, separados por vírgula")).split(",")
  linha2matriz2 = (prompt("Digite os 2 números da segunda linha da matriz 2x2 separados por vírgula")).split(",")
  linha1matriz2 = parseFloat(linha1matriz2)
  linha2matriz2 = parseFloat(linha2matriz2)
}

matriz2.push(linha1matriz2,linha2matriz2)

function multMatriz(matriz1,matriz2){
  var linha1_final = [[((matriz1[0][0] * matriz2[0][0]) + (matriz1[0][1] * matriz2[0][1]))],
  [((matriz1[0][0] * matriz2[0][1]) + (matriz1[0][1] * matriz2[0][0]))]]

  var linha2_final = [[((matriz1[1][0] * matriz2[1][1]) + (matriz1[1][1] * matriz2[1][0]))],
  [((matriz1[1][0] * matriz2[1][0]) + (matriz1[1][1] * matriz2[1][1]))]]

  var matrizFinal = matrizFinal.push(linha1_final,linha2_final)
  return matrizFinal
}

console.log("O resultado da multiplicação das matrizes é :" + multMatriz(matriz1,matriz2))

