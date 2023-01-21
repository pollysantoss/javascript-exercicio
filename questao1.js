var matriz1 = [[4,0],[-1,-1]]
var matriz2 = [[-1,3],[2,7]]
for(var i; i < matriz1.length; i++){
  matriz1[i] = parseFloat(matriz1[i])
}
for(var i; i < matriz2.length; i++){
  matriz2[i] = parseFloat(matriz2[i])
}

function multMatriz(matriz1,matriz2){
  var linha1_final = [[((matriz1[0][0] * matriz2[0][0]) + (matriz1[0][1] * matriz2[1][0]))],
  [((matriz1[0][0] * matriz2[0][1]) + (matriz1[0][1] * matriz2[1][1]))]]

  var linha2_final = [[((matriz1[1][0] * matriz2[0][0]) + (matriz1[1][1] * matriz2[1][0]))],
  [((matriz1[1][0] * matriz2[0][1]) + (matriz1[1][1] * matriz2[1][1]))]]

  var matrizFinal = [[linha1_final],[linha2_final]]

  return matrizFinal
}

console.log("O resultado da multiplicação das matrizes é :" + multMatriz(matriz1,matriz2))