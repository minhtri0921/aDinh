// const students = [
//     {
//         id: 1,
//         name: "Dinh",
//         diachi: "hue"
//     },
//     {
//         id: 2,
//         name: "Nam",
//         diachi: "quang nam"
//     },
//     {
//         id: 3,
//         name: "Tan",
//         diachi: "da nang"
//     },
//     {
//         id: 4,
//         name: "Hung",
//         diachi: "hue"
//     },
//     {
//         id: 5,
//         name: "Tri",
//         diachi: "quang tri"
//     },
//     {
//         id: 6,
//         name: "Anh",
//         diachi: "hue"
//     },
//     {
//         id: 7,
//         name: "Binh",
//         diachi: "da nang"
//     }
// ];
let students = new Array();
let amount = prompt('Nhập số lượng sinh viên : ')
for (let i = 0; i < amount ; i++) {
    let newName = prompt('Nhập tên học sinh : ')
    let newAddress = prompt('Nhập địa chỉ :')
    let student = {
        id: i + 1,
        name : newName,
        diachi: newAddress
    }
    
    students.push(student);
}
let index = prompt(`1. Xem danh sách
 2.Thêm sinh viên 
 3. Sửa thông tin
 4 . Xóa thông tin `);

// thêm sinh viên 
function add(students) {
    let newName = prompt("Nhập học sinh mới :")
    let newAddress = prompt("Nhập địa chỉ mới :")
    let newStudent = {
        id: students.length + 1,
        name: newName,
        diachi: newAddress
    }

    students.push(newStudent)
    console.log(students)
}

// sửa sinh viên 
function edit(students) {
    let index = +prompt("Nhập số thứ tự học sinh cần sửa : ")
    let newName = prompt("Nhập tên muốn sửa :")
    let newAddress = prompt('Nhập địa chỉ muốn sửa : ')
    let studentEdit = {
        id: index,
        name: newName,
        diachi: newAddress
    }
    students[index - 1] = studentEdit;
    console.log(students)
}

// xóa sinh viên
function xoa(students) {
    let studentDelete = prompt('Nhập số thứ tự muốn xóa : ')
    students.splice(studentDelete, 1)
    console.log(students)
}

switch (index) {
    case '1': console.log(students)
        break;
    case '2': add(students)
        break;
    case '3': edit(students)
        break;
    case '4': xoa(students)
        break;
}