let conteudo = document.getElementById('conteudo');
let btnList = document.getElementById('button')
let inputDigit = document.getElementById('item');
let selecionado = document.getElementById('selecionado');
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
      <input type="checkbox" name="didItem" id="checkbox_${cont}" onchange = "estaSelecionado('${cont}')">
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

function estaSelecionado(id) {
  let checkbox = document.getElementById(`checkbox_${id}`);

  if (checkbox.checked) {
    document.getElementById(id).style.background = 'lightgreen'
  } else {
    document.getElementById(id).style.background = 'rgb(160, 160, 160)'
  }
}

window.addEventListener('keydown', includesItem);

function includesItem (event) { 
  if (event.key === 'Enter') {
    let someInputDigit = inputDigit.value;
    if(someInputDigit === "") {
      alert("Preencha alguma tarefa para adicionar na lista !");
    } else {
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
    }
  } 
}

