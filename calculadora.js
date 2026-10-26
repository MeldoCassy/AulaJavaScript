alert("Bem vindo(a) à sua calculadora do JavaScript");
let numero1 = Number(prompt("Por favor, digite um número"));
let numero2 = Number(prompt("Por favor, digite um outro número"));

let resultado = numero1 + numero2
let resultado2 = numero1 - numero2
let resultado3 = numero1 * numero2
let resultado4 = numero1 / numero2

alert(`o resultado da soma \n ${numero1} + ${numero2} é = ${resultado}\n
    o resultado da subtração \n ${numero1} - ${numero2} é = ${resultado2}\n
    o resultado da multiplicação \n ${numero1} * ${numero2} = ${resultado3}\n
    o resultado da divisão \n ${numero1} / ${numero2} = ${resultado4} \n`)
