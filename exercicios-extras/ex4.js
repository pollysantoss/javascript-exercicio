var nota = prompt("Digite uma nota:")
nota = parseFloat(nota)

if(nota >= 90){
  nota = "A"
  console.log(nota)
}

else
  if((nota >= 80) && (nota < 90)){
    nota = "B"
    console.log(nota)
  }

  else
    if((nota >= 70) && (nota < 80)){
      nota = "C"
      console.log(nota)
    }

    else
      if((nota >= 60) && (nota < 70)){
        nota = "D"
        console.log(nota)
      }

      else{
        nota = "F"
        console.log(nota)
      }