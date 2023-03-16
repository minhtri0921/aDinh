
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

function renderBank(bank) {
  return `
    <li>
        <h2>Tên ngân hàng: ${bank.name}</h2>
        <p>Năm thành lập: ${bank.founding}</p>
        <button onclick="editBank(${bank.id})">Sửa</button>
        <button onclick="removeBank(${bank.id})">Xóa</button>
    </li>
    `;
}

function renderBanks(banks) {
  var list = document.querySelector('.list-banks');
  list.innerHTML = banks.map((bank) => renderBank(bank)).join('');
}

renderBanks(banks);

function addBank() {
  let newName = document.getElementById('1').value;
  let newFounding = document.getElementById('2').value;
  let newBank = {
    id: banks.length + 1,
    name: `${newName}`,
    founding: `${newFounding}`
  };
  banks.unshift(newBank);
  document.getElementById('name').value = '';
  document.getElementById('founding').value = '';
  renderBanks(banks);
}

function editBank(id) {
  let updateBtn = document.getElementById('update');
  updateBtn.style.display = 'block';

  let index = banks.findIndex(function (bank) {
    return bank.id == id;
  });
  var editBank = banks.find(function (bank) {
    return bank.id == id;
  });

  document.getElementById('1').value = editBank.name;
  document.getElementById('2').value = editBank.founding
  upDateBtn.onclick = function () {
    let newName = document.getElementById('1').value
    let newFounding = document.getElementById('2').value

    editBank = {
      id: id,
      name: newName,
      founding: newFounding
    }
    console.log(editBank)
    banks[index] = editBank;
    render(banks)
    document.getElementById('1').value = '';
    document.getElementById('2').value = ''
    updateBtn.style.display = 'none';
  }
}
function remove(id) {
  let index = banks.findIndex(function (bank) {
    return bank.id == id
  })
  banks.splice(index, 1)
  render(banks)
}



