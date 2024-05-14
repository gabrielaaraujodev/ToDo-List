let conteudo = document.getElementById('conteudo');
let btnList = document.getElementById('button')
let inputDigit = document.getElementById('item');

let cont = 0;


btnList.addEventListener('click', () => {
  let someInputDigit = inputDigit.value;

  if(someInputDigit === "") {
    alert("Preencha alguma tarefa para adicionar na lista !");
    return;
  }

  // let div = document.createElement('div')
  // div.className = 'testandoDiv'
  // div.innerText = "teste";
  // document.getElementById('fillItem').appendChild(div);
  
  let structureHTML = `
    <div class="itemsOfList" id = '${cont}'>
      <h2 class="listItems">${someInputDigit}</h2>
      <div class="closeConfirm">
        <input type="checkbox" name="didItem">
        <button class="closeItem" onclick = "deletaItem('${cont}')">
          x
        </button>
      </div>
    </div>
  `

  conteudo.innerHTML += structureHTML

  cont++;
})

function deletaItem(id) {
  document.getElementById(id).remove();
}



// window.addEventListener('keydown', includesItem);

// function includesItem (event) {
//   if (event.key === 'Enter') {
//     someInputDigit = inputDigit.value;
//     turnMessage = someInputDigit;
//     listItems.innerText = turnMessage;
//     if(turnMessage === "") {
//       alert("Preencha alguma tarefa para adicionar na lista !");
//       itemsOfList.classList.remove('visible');
//     } else {
//       itemsOfList.classList.add('visible');
//     }
//   } 
// }
