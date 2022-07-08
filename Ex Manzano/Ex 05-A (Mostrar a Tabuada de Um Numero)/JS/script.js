alert("Ex 05-A Mostrar a Tabuada de Um Numero");

let numero = parseInt(prompt("Digite um numero para ver sua tabuada:"));

let contadora = 0;

while (numero != 10) {
    let resultado=numero * contadora;
    alert(numero+" X "+contadora +" = "+ resultado);
    contadora=contadora+1;
    
}