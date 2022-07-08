let qtd_morango,qtd_maca,valor_maca,valor_morango,kgtotal;
var total=0;


qtd_morango = parseInt(prompt("Digite a quantidade de kilos de morangos que o cliente deseja levar: "));
qtd_maca= parseInt(prompt("Digite a quantidade de kilos de maças que o cliente deseja levar: "));
kgtotal=qtd_morango+qtd_maca;
total = valor_maca + valor_morango ;
if (qtd_maca>5) {
    valor_maca = qtd_maca * 1.50;
} else {
    valor_maca = qtd_maca * 1.80;
}                         
if (qtd_morango>5) {   
valor_morango = qtd_morango * 2.20;
}else {
    valor_morango = qtd_morango* 2.50;
}
total = valor_maca + valor_morango ;
if ((total>25)||(kgtotal>8)){

    total = total * 0.9;
    alert("O total foi :" + total);
}
else{
    alert("O total foi :" + total);
}

