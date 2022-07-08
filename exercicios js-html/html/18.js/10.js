let distribuidor,impostos,custo_fabrica,custo_final;



custo_fabrica = parseFloat(prompt("Digite o valor do custo de fabrica do carro :"));
distribuidor = custo_fabrica *0.28;
impostos = custo_fabrica*0.45;
custo_final = impostos + custo_fabrica + distribuidor;
alert(("O valor de custo final do carro é :") + custo_final  );
