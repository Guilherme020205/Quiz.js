var perguntas = [
  /*Pergunta*/[],
  /*Alternativa A*/[],
  /*Alternativa B*/[],
  /*Alternativa C*/[]
];


for (let i = 0; i < 2; i++) {
  //Número da pergunta
  var nPergunta = i
  //questão é a certa ou não
  var questãoCerta
  var pergunta = prompt(`Cadastre a ${nPergunta + 1}° questão `);
  perguntas[0].push(pergunta);

  var alternativaA = prompt(`Cadastre a primeira alternativa `);
  perguntas[1].push(alternativaA);

  questãoCerta = prompt(`Está e a alternativa correta? Sim(s) ou Não(n)`);

  if (questãoCerta == "s") {
    alternativaA = true;
  } else {
    alternativaA = false;
  }

  var alternativaB = prompt(`Cadastre a segunda alternativa `);
  perguntas[2].push(alternativaB);
  questãoCerta = prompt(`Está e a alternativa correta? Sim(s) ou Não(n)`);

  if (questãoCerta == "s") {
    alternativaA = true;
  } else {
    alternativaA = false;
  }

  var alternativaC = prompt(`Cadastre a terceira alternativa `);
  perguntas[3].push(alternativaC);
  questãoCerta = prompt(`Está e a alternativa correta? Sim(s) ou Não(n)`);

  if (questãoCerta == "s") {
    alternativaA = true;
  } else {
    alternativaA = false;
  }

}
for(let i = 0; i < 2; i++){
prompt(`${perguntas[0][0]}
A) ${perguntas[1][0]}
B) ${perguntas[2][0]}
C) ${perguntas[3][0]}`);

}
