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


function render(students){
    var a = document.querySelector('.list-students')
    var str = '' 
    for ( const element of students){
        str += render1(element);
    }
    a.innerHTML = str
}
function render1(element){
    return `<li><h2>Name:${element.name}</h2>
    <p>Addres: ${element.address}<p>
    <button onclick ="edit(${element.id})" >Sửa</button>
    <button onclick="remove(${element.id})">Xóa</button></li>`
}
render(students)
function add(){
    let newName = document.getElementById('1').value
    let newAddress = document.getElementById('2').value
     let newStudent = {
     id : students.length+1,
    name : newName,
     address : newAddress
 }
 students.push(newStudent)
    render(students)
}
function edit(id){
    let newName = prompt("Nhập tên muốn sửa :")
    let newAddress = prompt('Nhập địa chỉ muốn sửa : ')
    let studentEdit = {
        id: id,
        name: newName,
        diachi: newAddress
    }
    console.log(students)
    students[id - 1] = studentEdit;
    render(students)
}
function remove(id){
    let studentDelete = id
    students.splice(studentDelete-1, 1)
   render(students)
}