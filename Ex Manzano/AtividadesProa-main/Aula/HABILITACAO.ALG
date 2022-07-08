Algoritmo "Habilitacao"
// Disciplina   : [Lógica de Programação e Java Script]
// Professor   : Jaison Costa dos Santos 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Hasan Basam
// Data atual  : 25/03/2022
Var
// Seção de Declarações das variáveis 
idade: inteiro
habilitacao: caracter
carro: caracter

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("digite sua idade: ")
leia (idade)
escreval ("Você possui habilitação?: ")
leia (habilitacao)
escreval ("Você possui carro para dirigir: ")
leia (carro)
se (idade>17) e (habilitacao="sim") e (carro="sim") entao
escreval ("Você já pode dirigir")
senao
escreval ("Você não pode dirigir")
fimse
Fimalgoritmo