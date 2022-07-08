let inicio_jogo,final_jogo,duracao_partida;


      alert(("COLOQUE APENAS VALORES INTEIROS (EXP:19)"));
      
      inicio_jogo = parseInt(prompt("Digite o horario de inicio da partida de  xadrez :"));
      
      final_jogo = parseInt(prompt("Digite o horario final da partida de  xadrez :"));      
      
      duracao_partida=final_jogo-inicio_jogo;
      
      
      if (duracao_partida < 0){ 
      
      duracao_partida = duracao_partida*(-1);
      
      alert(("A partida durou ")+duracao_partida+(" Horas"));
      }
      else if(duracao_partida>24){ 
      alert(("A partida excedeu seu tempo maximo"));
      }
      else{
      alert(("A partida durou ")+ duracao_partida + (" Horas"));
      }