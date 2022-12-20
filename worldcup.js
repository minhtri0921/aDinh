const danhSachDoiBong = [
    {
        id: 1,
        ten: 'Brazin',
        huanLuyenVien: 'Tite',
        soLanVoDich: 15
    },
    {
        id: 2,
        ten: 'Đức',
        huanLuyenVien: 'Hansi Flick',
        soLanVoDich: 10
    },
    {
        id: 3,
        ten: 'Pháp',
        huanLuyenVien: 'Deschamps',
        soLanVoDich: 12
    }
]

var list = `1. Nhập dữ liệu 
2. Xuất dữ liệu
3. Tim dữ liệu
4. Xóa thông tin đội bóng
5. Thoát
`
var temp = true;
do {
    var index = prompt(list)
    switch (index) {
        case '1':
            var newClub = {
                id: danhSachDoiBong.length + 1,
                ten: prompt('Nhập tên đội bóng'),
                huanLuyenVien: prompt('Nhập tên huấn luyện viên :'),
                soLanVoDich: prompt('Nhập số lần vô địch :')
            };
            danhSachDoiBong.push(newClub)
            break;
        case '2':
            console.log(danhSachDoiBong);
            break;
        case '3':
            var number = Number(prompt("nhập số thứ tự : "));
            var a = danhSachDoiBong.find(function (doibong) {
                return doibong.id === number;
            })
            console.log(a);
            break;
        case '4':
            var num = prompt('Nhập thứ tự muốn xóa : ')
            danhSachDoiBong.splice(num, 1);
            console.log(danhSachDoiBong);
            break;
        case '5':
            temp = false;
            break;
    }

} while (temp)

