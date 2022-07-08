

salario_fixo = parseFloat(prompt("Digite o valor do salario : "))
carros_vendidos= parseInt(prompt("Digite a quantidade de carros vendidos :"))
comissão_fixa= parseFloat(prompt("Digite o valor de comissão por cada carro vendido :"))
valor_vendido_mes=parseFloat(prompt("Digite o valor total de quanto foi vendido no mês"))


alert(("O salario final é de :")+ (salario_fixo+(carros_vendidos*comissão_fixa)+(valor_vendido_mes*0.05)));