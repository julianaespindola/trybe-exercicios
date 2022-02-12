//const button = document.getElementById('add-button');
//const input = document.getElementById('phrases-input');
//const list = document.getElementById('phrases-list');

//function insertPhraseInDOM() {
//  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//  const listLength = phrasesList.length - 1;
//  const phraseText = phrasesList[listLength];
//  const phrase = document.createElement('li');//
//  phrase.innerText = phraseText;
//  list.appendChild(phrase);
//}

//function addPhraseToLocalStorage() {
//  const oldList = JSON.parse(localStorage.getItem('phrases'));
//  const phraseText = input.value;
//  oldList.push(phraseText);
//  localStorage.setItem('phrases', JSON.stringify(oldList));
//  insertPhraseInDOM();
//}

//function initialRenderization() {
//  if (localStorage.getItem('phrases') === null) {
//    localStorage.setItem('phrases', JSON.stringify([]));
//  } else {
//    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//    const listLength = phrasesList.length - 1;
//    for (let index = 0; index <= listLength; index += 1) {
//      const listElement = document.createElement('li');
//      listElement.innerText = phrasesList[index];
//      list.appendChild(listElement);
//    }
//  }
//}

//button.addEventListener('click', addPhraseToLocalStorage);

//window.onload = function() {
//  initialRenderization();
//};

const button = document.getElementById('add-button'); // BOTÃO
const input = document.getElementById('phrases-input'); //TEXTO
const list = document.getElementById('phrases-list'); //LISTA

function insertPhraseInDOM() { // FUNÇÃO PARA INSERIR FRASE
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases')); //PQ EU PRECISO DO JSON.PARSE AQUI?///////////
  const listLength = phrasesList.length - 1;// ATRIBUI O TAMANHO DA LISTA DE FRASES A UMA CONST
  const phraseText = phrasesList[listLength];// PQ O ARRAY?//////////////
  const phrase = document.createElement('li'); // ATRIBUI O ELEMENTO CRIADO NA LISTA A UMA CONST
  phrase.innerText = phraseText;// O TEXTO DENTRO DA FRASE CRIADA É ATRUBUIDO A FRASE DO TEXTO
  list.appendChild(phrase); // ACRESCENTA A FRASE
}

function addPhraseToSessionStorage() { // FUNÇÃO QUE ADD A FRASE A SESSION STORAGE
  if (sessionStorage.getItem('phrases') === null) { // SE NÃO TEM NADA ADD A CAIXA P 
    sessionStorage.setItem('phrases', JSON.stringify([]));//SALVAR, NADA É SALVO
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));//NAO FICOU CLARO O JSON.parse
  const phraseText = input.value;// ATRIBUI O VALOR DE TEXTO DE ENTRADA A CONST
  oldList.push(phraseText); // EMPURRA A FRASE PARA DENTRO DA CONST
  sessionStorage.setItem('phrases', JSON.stringify(oldList));// NÃO FICOU CLARO///////
  insertPhraseInDOM();//  CHAMA A FUNCÃO QUE INSERE A FRASE 
}

button.addEventListener('click', addPhraseToSessionStorage);// TEM UM ESCUTADOR DE EVENTOS NO BOTÃO QUE RECEBE UM PRIMEIRO PARAMENTRO QUE É O CLIQUE E O SEGUNDO É A FUNÇÃO QUE ADD A FRASE AO SESSION STORAGE.