let altura,sexo,peso_ideal;

altura = parseFloat(prompt("Digite sua altura"));

sexo = prompt("Digite seu sexo sendo M para masculino e F para Feminino")
if (sexo = "M" ){
peso_ideal = (72.7 * altura) - 58
}
else{
peso_ideal = (62.1 * altura) - 44.7
}


alert(("Seu peso ideal é :") + peso_ideal);