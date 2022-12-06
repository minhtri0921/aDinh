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
        toan: 9,
        ly: 1,
        hoa: 1,
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
//1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
let count = 0 ;

for ( let i = 0 ; i < students.length ; i++){
   let dtb = (students[i].toan+students[i].ly+students[i].hoa)/3;
   if ( dtb > 5 ){
    console.log(`Sinh viên ${students[i].name} trên điểm trung bình`)
    count++;
   }

}
if ( count === students.length){
    console.log("Tất cả sinh viên đều trên trung bình")
}
else{
console.log("Không phải tất cả sinh viên đều trên trung bình")
}
//2. Kiểm tra xem có sinh viên nào xếp loại giỏi không ? ( > 8 )
let sinhVienGioi = [];
for ( let i = 0 ; i < students.length ; i++){
    let dtb = (students[i].toan+students[i].ly+students[i].hoa)/3;
    if ( dtb > 8 ){
     console.log(`Sinh viên ${students[i].name} xếp loại giỏi`)
    sinhVienGioi.push(students[i])
    }
}
//3. Lọc ra các sinh viên xếp loại giỏi và in ra thông tin gồm Tên, Toán, Lý, Hóa 
for ( let key in sinhVienGioi){
    console.log(sinhVienGioi[key])
}

//4. Tìm 1 sinh viên xếp loại giỏi

for ( let i = 0 ; i < students.length;i++){
    let dtb = (students[i].toan+students[i].ly+students[i].hoa)/3;
    if ( dtb > 8 ){
        console.log(`Sinh viên ${students[i].name} xếp loại giỏi`)
       break;
       }
}

//5. Cộng cho mỗi sinh viên 1 điểm toán

for ( let i = 0 ; i < students.length ; i++){
    students[i].toan +1 ;
}

// 6. Tính tổng điểm toán của các sinh viên, và tính điểm toán trung bình của các sinh viên
let diemToan = 0;
for ( let i = 0 ; i < students.length ; i++){
    diemToan += students[i].toan;
}
console.log(`Điểm toán của các sinh viên ${diemToan}`)
console.log(`Điểm toán trung bình của các sinh viên ${diemToan/students.length}`)