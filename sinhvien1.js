const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    // {
    //     id: 3,
    //     name: "Tan",
    //     toan: 3,
    //     ly: 4,
    //     hoa: 5,
    // },
    // {
    //     id: 4,
    //     name: "Hung",
    //     toan: 9,
    //     ly: 7,
    //     hoa: 7,
    // },
    // {
    //     id: 5,
    //     name: "Tri",
    //     toan: 9,
    //     ly: 8,
    //     hoa: 9,
    // },
    // {
    //     id: 6,
    //     name: "Anh",
    //     toan: 9,
    //     ly: 10,
    //     hoa: 9,
    // },
    // {
    //     id: 7,
    //     name: "Binh",
    //     toan: 3,
    //     ly: 6,
    //     hoa: 9,
    // }
];

var list = `1. Nhập dữ liệu
2.Xuất dữ liệu
3.Tìm sinh viên
4.Lọc ra các sinh viên xếp loại giỏi
5.Cộng cho mỗi sinh viên 1 điểm toán
6.Thêm thuộc tính tổng điểm 3 môn
7.Tính tổng điểm của các sinh viên
8.Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
9.Tính điểm trung bình của các sinh viên
10.Xóa sinh viên
11.Thoát
`

var temp = true;
do {
    var index = prompt(list);
    switch (index) {
        case '1':
            input(students);
            break;
        case '2':
            show(students);
            break;
        case '3':
            findStudent(students);
            break;
        case '4':
            filterGoodStudent(students);
            break;
        case '5':
            addMathPoint(students);
            break;
        case '6':
            sum(students);
            break;
        case '7':
            totalArr(students);
            break;
        case '8':
            sort(students);
            break;
        case '9':
            averagePoint(students)
            break;
        case '10':
            deleteStudent(students);
            break;
        case '11':
            alert('Goodbye')
            exit();
            break;
    }
} while (temp)

function input(arrStudents) {
    var newStudent = {
        id: arrStudents.length + 1,
        name: prompt('Nhập  tên :'),
        toan: Number(prompt('Nhập điểm toán :')),
        ly: Number(prompt('Nhập điểm lý :')),
        hoa: Number(prompt('Nhập điểm hóa :'))
    }
    arrStudents.push(newStudent);
}


// 2 . Xuất dữ liệu 
function show(arrStudents) {
    for (let i = 0; i < arrStudents.length; i++) {
        for (var key in arrStudents[i]) {
            console.log(key + ':' + arrStudents[i][key])
        }
        console.log("-----------------------")
    }

}


//3.Tìm sinh viên 
function findStudent(arrStudents) {
    var numID = Number(prompt('Nhập id sinh viên muốn tìm : '));
    var student = arrStudents.find(function (student) {
        return student.id === numID;
    })
    if (!student) {
        alert('Khong tim thay')
    } else {
        console.log(student)
    }
}


//4. Lọc ra các sinh viên xếp loại giỏi 
function filterGoodStudent(arrStudents) {
    var studentGood = arrStudents.filter(function (student) {
        return (student.toan >= 8 && student.ly >= 8 && student.hoa >= 8);
    })
    show(studentGood);
}

//5 . Cộng mỗi sinh viên 1 điểm toán
function addMathPoint(arrStudents) {
    arrStudents.map(function (student) {
        student.toan < 10 ? student.toan += 1 : ''
        return student
    })
    show(arrStudents)
}

//6 . Thêm thuộc tính sum để lưu tổng điểm 3 môn (dung map)

function sum(arrStudents) {
    arrStudents.map(function (student) {
        student["sum"] = student.toan + student.ly + student.hoa;
    })
    show(arrStudents)
}
// function addPropertySum(arrStudents) {
//     arrStudents.map(function (student) {
//         student.sum = student.toan + student.ly + student.hoa;
//         return student;
//     })
// }
//7. Tính tổng điểm các sinh viên ( dung reduce)
function totalArr(arrStudents) {
    var allSum = arrStudents.reduce(function (total, student) {
        return total + student.sum
    }, 0)
    console.log('Tổng điểm các sinh viên : ' + allSum)
}
//8. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần 
function sort(arrStudents) {
    arrStudents.sort(function (a, b) {
        return a.sum - b.sum;
    })
    show(arrStudents);
}
//9.Tính điểm trung bình của các sinh viên ( dung reduce de tinh tong diem roi chia cho length)
function averagePoint(arrStudents) {
    var tong = arrStudents.reduce(function (total, student) {
        return total + student.sum;
    }, 0)
    console.log("Điểm trung bình của các sinh viên : " + tong / a.length)
}
//10 . Xóa sinh viên ( them khong tim thay )
function deleteStudent(arrStudents) {
    let numID = Number(prompt("Nhập id sinh viên muốn xóa : "))
    var student = arrStudents.find(function (student) {
        return student.id === numID;
    })
    if (!student) {
        alert('Khong tim thay')
    } else {
        arrStudents.splice(numID - 1, 1);
    }
}
//11. Exit
function exit() {
    temp = false;
}

