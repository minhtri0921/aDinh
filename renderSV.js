const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];


function render(students) {
    var a = document.querySelector('.list-students')
    var str = ''
    for (const element of students) {
        str += render1(element);
    }
    a.innerHTML = str
}
function render1(element) {
    return `<li><h2>Name:${element.name}</h2>
    <p>Addres: ${element.address}<p>
    <button onclick ="edit(${element.id})" >Sửa</button>
    <button onclick="remove(${element.id})">Xóa</button></li>`
}
render(students)

function add() {
    let newName = document.getElementById('1').value
    let newAddress = document.getElementById('2').value
    let newStudent = {
        id:students.length+1,
        name: newName,
        address: newAddress
    }
    students.unshift(newStudent)
    document.getElementById('1').value = '';
    document.getElementById('2').value = '';
    render(students)
}
function edit(id) {
    let index = students.findIndex(function(std){
        return std.id == id 
     })
    var editStudent = students.find(function(st){
        return st.id == id ; 
    })
    console.log(editStudent)
    document.getElementById('1').value = editStudent.name
    document.getElementById('2').value = editStudent.address
    let upDateBtn = document.getElementById('update')
    upDateBtn.style.display = 'block'
    upDateBtn.onclick = function () {
        let newName = document.getElementById('1').value
        let newAddress = document.getElementById('2').value

        editStudent = {
            id: id,
            name: newName,
            address: newAddress
        }
        console.log(editStudent)    
        students[index] = editStudent;
        render(students)
    }

}
function remove(id) {
    let index = students.findIndex(function(std){
       return std.id == id 
    })
    students.splice(index,1)
    render(students)
}