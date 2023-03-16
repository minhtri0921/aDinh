let banks = [
  {
    id: 1,
    name: "Sacombank",
    founding: "2002"
  },
  {
    id: 2,
    name: "Vietcombank",
    founding: "2003"
  },
  {
    id: 3,
    name: "DongAbank",
    founding: "1999"
  },
  {
    id: 4,
    name: "ABbank",
    founding: "2010"
  },
  {
    id: 5,
    name: "TPbank",
    founding: "1989"
  },
  {
    id: 6,
    name: "Viettinbank",
    founding: "1997"
  },
  {
    id: 7,
    name: "Cakebank",
    founding: "2005"
  }
];


function render(banks) {
  var list = document.querySelector('.list-banks');
  list.innerHTML = banks.map((bank) => renderBank(bank)).join('');
}
function renderBank(bank) {
  return `<li>
  <h2>Name:${bank.name}</h2>
  <p>Addres: ${bank.founding}<p>
  <button id='3' onclick ="edit(${bank.id})" >Sửa</button>
  <button onclick="remove(${bank.id})">Xóa</button>
  </li>`
}
render(banks)
function inputRong() {
  document.getElementById('name').value = '';
  document.getElementById('founding').value = '';
}
function add() {
  let newName = document.getElementById('name').value
  let newFounding = document.getElementById('founding').value
  let newBank = {
    id: banks.length + 1,
    name: newName,
    founding: newFounding
  }
  inputRong();
  banks.unshift(newBank)
  render(banks)
}
function edit(id) {
  let index = banks.findIndex((bank) => {
    return bank.id == id
  })
  var editBank = banks.find((bank) => {
    return bank.id == id;
  })
  document.getElementById('name').value = editBank.name
  document.getElementById('founding').value = editBank.founding
  let addBtn = document.getElementById('create')
  addBtn.style.display = 'none'
  let upDateBtn = document.getElementById('update')
  upDateBtn.style.display = 'block'
  upDateBtn.onclick = function () {
    let newName = document.getElementById('name').value
    let newFounding = document.getElementById('founding').value
    editBank = {
      id: id,
      name: newName,
      founding: newFounding
    }
    console.log(editBank)
    banks[index] = editBank;
    render(banks)
    inputRong();
    upDateBtn.style.display = 'none'
    addBtn.style.display = 'block'
  }

}
function remove(id) {
  let index = banks.findIndex(function (bank) {
    return bank.id == id
  })
  var result = confirm('Bạn có muốn xóa ngân hàng này ? ')
  if ( result === true ){
    banks.splice(index,1)
  }else {
    render(banks)
  }
  render(banks)
}