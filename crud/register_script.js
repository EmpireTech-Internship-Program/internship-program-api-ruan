const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sName = document.querySelector('#m-name')
const sNumber = document.querySelector('#m-number')
const sAddress = document.querySelector('#m-address')
const sCode = document.querySelector('#m-code')
const bntSave = document.querySelector('#bntSave')

let itens
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('active')
  
    modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
  
    if (edit) {
      sName.value = itens[index].name
      sNumber.value = itens[index].number
      sAddress.value = itens[index].address
      sCode.value = itens[index].code
      id = index
    } else {
      sName.value = ''
      sNumber.value = ''
      sAddress.value = ''
      sCode.value = ''
    }
    
  }
  
  function editItem(index) {
  
    openModal(true, index)
  }
  
  function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
  }
  
  function insertItem(item, index) {
    let tr = document.createElement('tr')
  
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.number}</td>
      <td>${item.address}</td>
      <td>${item.code}</td>
      <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
      </td>
    `
    tbody.appendChild(tr)
  }
  
  bntSave.onclick = e => {
    
    if (sName.value == '' || sNumber.value == '' || sAddress.value == '' || sCode.value == '') {
      return
    }
  
    e.preventDefault();
  
    if (id !== undefined) {
      itens[id].name = sName.value
      itens[id].number = sNumber.value
      itens[id].address = sAddress.value
      itens[id].code = sCode.value
    } else {
      itens.push({'name': sName.value, 'number': sNumber.value, 'address': sAddress.value, 'code': sCode.value})
    }
  
    setItensBD()
  
    modal.classList.remove('active')
    loadItens()
    id = undefined
  }
  
  function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
      insertItem(item, index)
    })
  
  }
  
  const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
  const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))
  
  loadItens()