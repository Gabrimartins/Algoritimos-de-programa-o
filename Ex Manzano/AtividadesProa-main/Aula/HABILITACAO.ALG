Algoritmo "Habilitacao"
// Disciplina   : [L�gica de Programa��o e Java Script]
// Professor   : Jaison Costa dos Santos 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Hasan Basam
// Data atual  : 25/03/2022
Var
// Se��o de Declara��es das vari�veis 
idade: inteiro
habilitacao: caracter
carro: caracter

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval ("digite sua idade: ")
leia (idade)
escreval ("Voc� possui habilita��o?: ")
leia (habilitacao)
escreval ("Voc� possui carro para dirigir: ")
leia (carro)
se (idade>17) e (habilitacao="sim") e (carro="sim") entao
escreval ("Voc� j� pode dirigir")
senao
escreval ("Voc� n�o pode dirigir")
fimse
Fimalgoritmo