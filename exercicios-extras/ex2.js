var numX = prompt("Digite o primeiro número:")
var numN = prompt("Digite o segundo número:")
numX = parseInt(num1)
numN = parseInt(num2)

function multNum (num1,num2){
  var contador = num2
  if(contador > 0) { 
  num1 += num1
  }
  return (multNum(num1,(num2 - 1)))
}

alert(numX + "x" + numN + "=" multNum(numX, numN))