alert("Exercício 37 - Atividade Das Maças e Morangos");


let kgmacas = 0, kgmorangos = 0, totalmorangos = 0, totalmacas = 0, valorfinal = 0;

kgmorangos=parseFloat(prompt("Quantos Kg de morangos você deseja comprar?"));
kgmacas=parseFloat(prompt("Quantos Kg de maçãs você deseja comprar?"));

if ((kgmacas<6) && (kgmorangos<6)){
    totalmacas=1.80*kgmacas;
    totalmorangos=2.50*kgmorangos;
    alert((total+totalmorangos))
} 
else if ((kgmorango>5) && (kgmacas>5)){
    totalmacas=1.50*kgmacas;
    totalmorangos=2.20*kgmorangos;
    alert((totalmacas+totalmorangos))
}
else if ((kgmorango>5) && (kgmacas<6)) {
    totalmorangos=2.20*kgmorangos;
    totalmacas=1.80*kgmacas;
    alert((totalmacas+totalmorangos))

   
}
else if ((kgmorango<6) && (kgmacas>5)) {
    totalmorangos=2.50*kgmorangos;
    totalmacas=1.50*kgmacas;
    alert((totalmacas+totalmorangos))
    
}
else{

}

if ((morango+maça>5) || (valorfinal<25)){
    valorfinal= (totalmacas+totalmorangos) - 10/100
    alert("O preço final é R$" + valorfinal + " reais.");
}
else
{
alert("O preço final é R$" + valorfinal + " reais.");
}

