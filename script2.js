function verificarSinal(x) {
  (x > 0) ? console.log('positivo') : console.log('negativo');
}

function converterTemperatura(c) {
  console.log((c + 9/5) + 32);
}

let i = 0;
while (i < 100) {
  console.log(i);
  i++;
}

function substituirPalavra(texto) {
  console.log(texto.replace('azul', 'vermelho'));
}

function verificarTamanho(texto) {
  (texto > 10) ? console.log('o tamanho é maior que 10') : console.log('o tamanho não é maior que 10');
}

let frutas = ['abacaxi', 'banana', 'caqui', 'durião', 'embaúba'];
console.log(frutas[2]);

function saudacao(nome, saudacao) {
  (saudacao === '') ? console.log('Bem-vindo(a) ' + nome) : console.log(saudacao + ' ' + nome);
}

function verificarAprovacao(x) {
  (x >= 6) ? console.log('aprovado') : console.log('reprovado');
}

for (let i = 0; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function contarVogais(texto) {
  let vogais;
  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u") {
      vogais++;
    }
  }
  console.log(vogais);
}

function somarArray(x) {
  let y;
  for (let i = 0; i < x.length; i++) {
    y += x[i];
  }
  console.log(y);
}
