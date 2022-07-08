
let jailson = 0,aurora = 0,adriana = 0,votos = 1,voto = 0,voto_branco=0,numero_votos = 1,ganhador = 0;

numero_votos = parseInt(prompt("Digite o número de votos que ocorreram : "));

while (votos<=numero_votos) {

voto = parseInt(prompt("Digite o voto sendo : 1 para Jailson, 2 para Adriana e 3 Para Aurora e qualquer outro valor além desses para ser nulo"));

if (voto==1) {

    jailson++;
    votos++;
    
} else if (voto==2){
    adriana++;
    votos++;    
}
    else if (voto==3){
        aurora++;
        votos++;
    }
    else {
        voto_branco++;
        votos++;
    }
}
alert("Número de votos para Jailson: " + jailson)

alert("Número de votos para Aurora: " + aurora)

alert("Número de votos para Adriana: "+ adriana)

alert("Número de votos em  branco:" + voto_branco)

ganhador = ganhador + jailson;



if (ganhador < aurora) {
ganhador = 0;
ganhador = ganhador + aurora;
alert(("O ganhador da votação é Aurora com : "+ganhador+(" Votos")));

} else if (ganhador < adriana){
    ganhador = 0;
    ganhador = ganhador + adriana;
    alert(("O ganhador da votação é Adriana com : "+ganhador+(" Votos")));

    
}

else{
    alert(("O ganhador da votação é Jailson com : "+ganhador+(" Votos")));

}