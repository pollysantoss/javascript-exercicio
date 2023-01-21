var valores = {
    receitas: [],
    despesas: [],
  }
  
receitas = prompt("Digite os valores da sua receita separado por vírgula:").split(",")
despesas = prompt("Digite o valor das suas despesas separado por vírgula:").split(",")
  
receitas = parseFloat(receitas)
despesas = parseFloat(despesas)
  
function saldo(receitas, despesas){
    var totalReceitas = 0
    for(var i = 0; i  <receitas.length; i++){
        totalReceitas += receitas[i]
    }
  
    var totalDespesas = 0
    for(var i = 0; i < despesas.length; i++){
        totalDespesas += despesas[i]
    }
  
    var saldoTotal = totalReceitas - totalDespesas
    return saldoTotal
  }
  
  
if((saldo(receitas,despesas)) < 0){
    alert("Saldo negativo, valor do saldo = " + saldo(receitas,despesas))
}
  else{
    alert("Saldo positivo, valor do saldo = " + saldo(receitas,despesas))
}

