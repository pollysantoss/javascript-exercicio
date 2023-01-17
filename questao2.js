var fahrenheit = prompt("Digite uma temperatura em Fahrenheit:")
fahrenheit = parseFloat(fahrenheit)

var celsius = 5 * ((fahrenheit - 32)/9)

console.log("O valor correspondente a " + fahrenheit + "°F em Celsius é " + celsius + "°C.")