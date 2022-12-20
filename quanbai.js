const danhSachQuanBai = [
    {
        id: 1,
        name: 'Ba bích', // Tên quân bài, ví dụ: Năm cơ, Sáu bích...
        exp: 3, //Hệ số quân bài (từ 1 đến 13)
        point: 1 // Điểm của quân bài (từ 1 đến 4)
    },
    {
        id: 2,
        name: 'Năm rô',
        exp: 5,
        point: 3
    },
    {
        id: 3,
        name: 'Bốn cơ',
        exp: 4,
        point: 4
    }
]

var list = `1. Nhập dữ liệu 
2. Nhập mảng các quân bài
3. Sắp xếp tăng dần
4. Sắp xếp giảm dần
5. Xuất dữ liệu
6. Thoát
`
var temp = true;
do {
    var index = prompt(list);
    switch (index) {
        case '1':
            addCard();
            break;
        case '2':
            addArrCard();
            break;
            case'3':
           sapXepTangDan();
            break;
            case'4':
            sapXepGiamDan();
            console.log(danhSachQuanBai)
            break;
            case'5':
            display();
            break;
            case'6':
            exit();
            break;
        }
} while (temp)

function addCard(){
    var newCard = {
        id: danhSachQuanBai.length + 1,
        name: prompt('Nhập tên quân bài :'),
        exp: Number(prompt('Hệ số quân bài :')),
        point: prompt('Điểm của quân bài :')
    };
    danhSachQuanBai.push(newCard)
}
function addArrCard(){
    var num = Number(prompt('Nhập số lượng quân bài cần thêm :'));
            for (let i = 0; i < num; i++) {
                var newQuanBai = {
                    id: danhSachQuanBai.length + 1,
                    name: prompt('Nhập tên quân bài :'),
                    exp: Number(prompt('Hệ số quân bài :')),
                    point: prompt('Điểm của quân bài :')
                }
                danhSachQuanBai.push(newQuanBai);
            }
            console.log(danhSachQuanBai)
}
function sapXepTangDan(){
    danhSachQuanBai.sort(function(a,b){
        return a.exp-b.exp;
    })
    console.log(danhSachQuanBai)
}
function sapXepGiamDan(){
    danhSachQuanBai.sort(function(a,b){
        return b.exp-a.exp;
    })
}

function display(){
    console.log(danhSachQuanBai);
}
function exit(){
    alert('Goodbye')
    temp = false;
}