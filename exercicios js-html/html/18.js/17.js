let nota1,nota2,media_final;

nota1 =parseFloat(prompt("Digite a primeira nota :"));
nota2 = parseFloat(prompt("Digite a segunda nota :"));

media_final=(nota1+nota2)/2;

if (media_final>=6) {

    alert(("O aluno foi Aprovado, sua nota é : ")+media_final);
    
} else {
  alert  (("O aluno não foi aprovado, BRAÇO CURTO !!!nota: ")+ media_final)
}