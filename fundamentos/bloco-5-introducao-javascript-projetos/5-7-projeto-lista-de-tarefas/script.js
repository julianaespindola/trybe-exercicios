let assignmentText = document.getElementById("texto-tarefa");
let assignmentCreate = document.getElementById ("criar-tarefa");
let assignmentList = document.getElementById("lista-tarefas");
let btnClearAll = document.getElementById("apaga-tudo");
let btnRemoveCompleted = document.getElementById("remover-finalizados");
let btnRemoveSelected = document.getElementById("remover-selecionado");
let btnMoveUp = document.getElementById("mover-cima");
let btnMoveDown = document.getElementById("mover-baixo");
let btnSalveAssignment = document.getElementById("salvar-tarefas")

function resetItensSelected( ){
    let allItens = assignmentList.querySelectorAll("li");//retorna uma matriz de objetos com todos os elementos HTML que correspondem aos 'seletores '.
    allItens.forEach(function(item){
        item.classList.remove("selected")
    })
}

assignmentCreate.addEventListener("click", function(){//registrar uma espera de evento 

    let item = document.createElement("li");
    item.addEventListener("click" , function(itemList){
        resetItensSelected()
        item.classList.add("selected")
    })

    item.addEventListener("dblclick" , function(){ //dblclick 2 cliques
        item.classList.toggle("completed")
    })

    item.innerText = assignmentText.value;
    assignmentList.appendChild(item); //insere um novo nó na estrutura do DOM
    assignmentText.value= "";
})

btnClearAll.addEventListener("click" , function(){
    assignmentList.innerHTML="" //o innerHTML retorna todo o texto e o html
})
  
btnRemoveCompleted.addEventListener("click" , function(){
    let allItensCompleted = document.querySelectorAll(".completed")
    allItensCompleted.forEach(function(el){
        el.remove()
    })
})

btnRemoveSelected.addEventListener("click" , function(){
    let allItensSelected = document.querySelectorAll(".selected");
    allItensSelected.forEach(function(el){
        el.remove()
    })
})

btnMoveUp.addEventListener("click" , function(){
    let itemSelected = document.querySelector(".selected");
    if (itemSelected && itemSelected.previousElementSibling){ //previousElementSibling retorna o elemento anterior do elemento especificado.
        itemSelected.parentNode.insertBefore(itemSelected, itemSelected.previousSibling);
    }
        
})

btnMoveDown.addEventListener("click" , function(){
    let itemSelected = document.querySelector(".selected");
    if (itemSelected && itemSelected.nextElementSibling){
        itemSelected.parentNode.insertBefore(itemSelected.nextSibling, itemSelected);
    }
        
})
//Recebi ajuda da colega Gabriela Rodrigues para execução do requisito 12
//Obrigada Gabi
function salveLocalStorage(){
    let btn = document.getElementById("salvar-tarefas");
    btn.addEventListener("click" , function(){
        let assignment = document.getElementById("lista-tarefas");
        localStorage.setItem("list" , JSON.stringify(assignment.innerHTML))//localStorage - armazena dados sem data de expiração
        //O método stringify () converte um objeto ou valor JavaScript em uma string JSON
        //JavaScript Object Notation (JSON) é um formato baseado em texto padrão para representar dados estruturados com base na sintaxe de objeto JavaScript . É comumente usado para transmitir dados em aplicativos da web (por exemplo, enviar alguns dados do servidor para o cliente, para que possam ser exibidos em uma página da web ou vice-versa).
        //Ao receber dados de um servidor web, os dados são sempre uma string. Analise os dados com JSON.parse () e os dados se tornam um objeto JavaScript.Ao receber dados de um servidor web, os dados são sempre uma string. Analise os dados com JSON.parse () e os dados se tornam um objeto JavaScript.
    })
}
salveLocalStorage()

function restoreLocalStorage(){
    let assignment = document.getElementById("lista-tarefas");
    let restore = localStorage.getItem("list");
    assignment.innerHTML = JSON.parse(restore);
}
restoreLocalStorage()