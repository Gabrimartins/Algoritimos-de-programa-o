let contadora = 1,valor1=0,valor2=0,contas = 0;
contadora = parseInt(prompt("Digite a quantidade de contas que deseja fazer :"));
do {
valor1 = parseInt(prompt("Digite um valor :"));
valor2 = parseInt(prompt("Digite outro valor :"));
alert(contas+( "O Número ")+valor1+(" + ")+ valor2 + (" = ") + (valor1+valor2));
contas++;
}while (contas<contadora);
