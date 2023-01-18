var num = []

for (contador = 0; contador < 5; contador++) {
    num.push(prompt("Digite um número inteiro:"))
}

for(contador = 0; contador < num.length; contador++) {
    num[contador] = parseInt(num[contador])
}

for(numeros of num){
    if(((numeros % 3) == 0) && ((numeros % 5) == 0)){
        console.log("fizzbuzz")
    }

    else
        if((numeros % 3) == 0){
        console.log("fizz")
        }

        else
            if((numeros % 5) == 0){
            console.log("buzz")
            }
}