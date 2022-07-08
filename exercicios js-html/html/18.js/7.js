anos=parseInt(prompt("Digite quanto anos o usuario tem :"))
mes=parseInt(prompt("Digite quantos meses de vida o usuario tem :"))
dias=parseInt(prompt("Digite quantos dias de vida o usuario tem :"))


acumuladora=dias+(mes*30)+(anos*365);

alert(("O usuario tem :")+acumuladora+("dias vividos"));