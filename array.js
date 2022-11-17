var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];

// 1. in mảng theo thứ tự tăng dần
function inGiaTriTangDan(arr){
    arr.sort(function(a,b){return a-b});
    console.log(arr);
}
inGiaTriTangDan(arrNumber);
// 2. in mảng theo thứ tự giảm dần 
function inGiaTriGiamDan(arr){
    arr.sort(function(a,b){return b-a});
console.log(arr);
}
inGiaTriGiamDan(arrNumber);
// 3. xóa phần tử cuối của mảng 
 function xoaPhanTuCuoi(arr){
    arr.pop();
    console.log(arr);
 }
 xoaPhanTuCuoi(arrNumber);
// 4 . xóa phần tử đầu tiên của mảng
function xoaPhanTuDauTien(arr){
    arr.shift();
    console.log(arr);
}
xoaPhanTuDauTien(arrNumber);
// 5 . thêm phần tử 0 vào cuối mảng 
arrNumber.push(0);
console.log(arrNumber)

// 6 . Thêm phần tử 0 vào đầu mảng 
arrNumber.unshift(0)
console.log(arrNumber)
// 7. Cắt mảng từ phần tử đầu tiên đến phần tử thứ 5 thành 1 mảng mới 

let arrNumberCut = arrNumber.splice(0,5)
console.log(arrNumberCut)