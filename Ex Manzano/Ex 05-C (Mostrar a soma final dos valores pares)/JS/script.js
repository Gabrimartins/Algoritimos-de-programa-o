alert("Ex 05-C Mostrar a soma final dos valores pares ");

let contador=0, soma=0;

while (contador<500){
    if (contador%2==0) {
        soma=soma+contador;
        alert(soma);
    }
    contador++;
}                    