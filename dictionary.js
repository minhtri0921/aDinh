let list = `
1. Nhập dữ liệu:
2. Xuất dữ liệu:
3. Dịch từ:
4. Thoát:
`;

const engLish = ['apple', 'orange', 'lemon', 'banana', 'watermelon']
const tiengViet = ['quả táo', 'trái cam', 'trái chanh', 'trái chuối', 'dưa hấu']
var temp = true;
do {
    var index = prompt(list)
    switch (index) {
        case '1':
            var newKeyEngLish = prompt('Nhập từ tiếng Anh vào đây : ');
            var newKeyVietNam = prompt('Nhập nghĩa tiếng Việt : ')
            engLish.push(newKeyEngLish);
            tiengViet.push(newKeyVietNam);
            break;
        case '2':
            console.log(engLish)
            break;
        case '3':
            let key = prompt('Nhập từ tiếng anh muốn tìm :')
            let idx = -1;
            for (let i = 0; i < engLish.length; i++) {
                if (key === engLish[i]) {
                    idx = i;
                    console.log(`${key} có nghĩa là ${tiengViet[idx]}`);
                }
            }
            if (idx === -1) {
                console.log('Không tìm thấy');
            }
            break;
        case '4':
            console.log('Cảm ơn đã sử dụng từ điển')
            temp = false;
            break;
    }
} while (temp)
