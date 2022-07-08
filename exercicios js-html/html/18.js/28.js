let valor1,valor2,valor3;

valor1 = parseInt(prompt("Digite um valor: "));
valor2 = parseInt(prompt("Digite outro valor: "));
valor3 = parseInt(prompt("Digite outro valor: "));

if(valor1> valor2 &&  valor2>valor3){
alert(("O MAIOR É O:")+ valor1);
}
else if(valor2> valor1 &&  valor2>valor3){

    alert(("O MAAIOR É O:")+ valor2);
}

else{
    alert(("O maior é o:")+valor3);
}