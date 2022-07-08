let valor1,valor2;

valor1 = parseInt(prompt("Digite um valor: "));
valor2 = parseInt(prompt("Digite outro valor: "));

if(valor1>valor2){
    alert((valor1)+ (" , ")+(valor2));
}
else if (valor2>valor1){
alert(valor2+(" , ") +valor1);

}

else{
    alert(("Digite valores difeerentes !!!"));
}