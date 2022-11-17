var students = [
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
        toan: 8,
        ly: 8,
        hoa: 9,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    }
];

// Array.prototype.diemTrungBinh = function (){
//     (this.toan+this.ly+this.hoa)/3
// }
// console.log(students)

// kiểm tra xem có phải tất cả sinh viên trên điểm trung bình 
var isGood = students.every(function(students,index){
    return (students.toan+students.ly+students.hoa)/3 > 5;
})
console.log(isGood);

// kiểm tra xem có sinh viên nào loại giỏi hay không 

var hasGood = students.some(function(students,index){
    return (students.toan+students.ly+students.hoa)/3 > 8;
})

console.log(hasGood);

// lọc ra sinh viên loại giỏi và in tên ...

var filter = students.filter(function(students,index){
        if ( (students.toan+students.ly+students.hoa)/3 > 8){
            console.log(students.name , students.toan , students.ly , students.hoa)
        }
})

// tìm ra sinh viên xếp loại giỏi
var goodStudent = students.find(function(students){
    return students.toan >= 8 && students.ly >= 8 && students.hoa >= 8;
});

console.log(goodStudent);

// cộng chỗ mỗi sinh viên 1 điểm toán

var plusPointStudent = students.map(function(students,index){
    return{
        ...students,
        toan : students.toan < 10 ? students.toan+1 : students.toan
    }
})
plusPointStudent.forEach(function(students){
    console.log("Tên: " + students.name + " - Toán: " + students.toan + " - Lý: " + students.ly + " - Hóa: " + students.hoa);
})

// tính tổng điểm Toán và trung bình 
var totalPoint = students.reduce(function(total,student){
    return total + student.toan;
},0)

console.log("Tổng điểm toán: ",totalPoint)
console.log("Điểm toán trung bình : ",totalPoint/students.length)

// cách 2 
var totalToan = 0 ; 

for ( let x of students ){
    totalToan += x.toan;
}
console.log("Tổng điểm toán :",totalToan)