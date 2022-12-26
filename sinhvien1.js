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
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 4,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
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
            sum1(students);
            break;
        case '8':
            sort(students);
            break;
        case '9':
            totalPoint(students)
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

function input(a) {
    var newStudent = {
        id: a.length + 1,
        name: prompt('Nhập  tên :'),
        toan: Number(prompt('Nhập điểm toán :')),
        ly: Number(prompt('Nhập điểm lý :')),
        hoa: Number(prompt('Nhập điểm hóa :'))
    }
    a.push(newStudent);
}


// 2 . Xuất dữ liệu 
function show(a) {
    for (let i = 0 ; i < a.length ; i++) {
        for ( var key in a[i]){
            console.log(key+':'+a[i][key])
        }
        console.log("-----------------------")
    }

}


//3.Tìm sinh viên 
function findStudent(a) {
    var numID = Number(prompt('Nhập id sinh viên muốn tìm : '));
    var student = a.find(function (b) {
        if (numID > a.length) {
            alert('Không tìm thấy')
            show(b.numID)
        } else {
            return b.id === numID;
        }
    })
    console.log(student)
}


//4. Lọc ra các sinh viên xếp loại giỏi 
function filterGoodStudent(a) {
    var student = a.filter(function (b) {
        return (b.toan >= 8 && b.ly >= 8 && b.hoa >= 8);
    })
    show(student);
}

//5 . Cộng mỗi sinh viên 1 điểm toán
function addMathPoint(a) {
    var listNewStudents = [];
    for (const student of a) {
        listNewStudents.push({
            id: student.id,
            name: student.name,
            toan: student.toan < 10 ? student.toan + 1 : student.toan,
            ly: student.ly,
            hoa: student.hoa
        });
    }
    return listNewStudents;
}

//6 . Thêm thuộc tính sum để lưu tổng điểm 3 môn 
function sum(a) {
    var sum = 0;
    a.forEach(element => {
        sum = element.toan + element.ly + element.hoa;
        element['sum'] = element.toan + element.ly + element.hoa;
    });
show(a);
}
//7. Tính tổng điểm các sinh viên 
function sum1(a) {
    var sum = 0;
    var allSum = 0
    a.forEach(element => {
        sum = element.toan + element.ly + element.hoa;
        allSum += sum;
    });
    console.log('Tổng điểm các sinh viên'+allSum)
}
//8. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần 
function sort(a) {
    // a.forEach(element => {
    //     element['total'] = element.toan + element.ly + element.hoa;
    // })
    a.sort(function (a, b) {
        return a.sum - b.sum;
    })
    show(a);
}
//9.Tính điểm trung bình của các sinh viên
function totalPoint(a) {
    var sum = 0 ;
    a.forEach(element=>{
        sum = (element.toan+element.ly+element.hoa)/3;
        console.log(`${element.name} : `+sum)
    })
}
//10 . Xóa sinh viên 
function deleteStudent(a){
    let numID = Number(prompt("Nhập id sinh viên muốn xóa : "))
    a.splice(numID-1,1);
}
//11. Exit
function exit() {
    temp = false;
}

