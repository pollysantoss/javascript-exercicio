var valores = {
    receitas: [],
    despesas: [],
  }
  
  valores[0] = prompt("Digite os valores da sua receita separado por vírgula:").split(",")
  valores[1] = prompt("Digite o valor das suas despesas separado por vírgula:").split(",")
  
  valores[0] = parseFloat(valores[0])
  valores[1] = parseFloat(valores[1])
  
  function saldo(num1, num2){
    var totalReceitas = 0
    for(var i = 0; i <num1.length; i++){
        totalReceitas += num1[i]
    }
  
    var totalDespesas = 0
    for(var i = 0; i < num2.length; i++){
        totalDespesas += num2[i]
    }
  
    var saldoTotal = totalReceitas - totalDespesas
  
    if(saldoTotal < 0){
        return "Saldo negativo, valor do saldo = " + saldoTotal
    }
  
    else{
        return "Saldo positivo, valor do saldo = " + saldoTotal 
    }
  
  }
  
  saldo(valores[0],valores[1])

