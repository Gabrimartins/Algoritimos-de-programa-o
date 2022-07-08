alert("Ex 01 Mostrar Tabuada de um Numero");

let numero, contador, tabuada;
numero = parseInt(prompt("Qual o número que deseja saber o valor da tabuada? "));
contador = 0;
while (contador <= 10) {
    tabuada = numero * contador;
    alert(contador + " x" + numero + " = " + tabuada);
    contador = contador + 1;
}