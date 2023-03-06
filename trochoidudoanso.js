let flag = 0;
function random() {
    // Tạo số nn từ 0 đến 5
    var number = Math.floor(Math.random() * 6);
    let randomElement = document.getElementById('randomNumber');
    randomElement.innerText = "Số ngẫu nhiên : " + number;
    // let a = document.querySelector('1').value
    let numberValue = document.getElementById('soDuDoan')
    if (number == numberValue.value) {
        let luckyNumberElement = document.getElementById('result');
        luckyNumberElement.innerHTML = "Bạn đã đoán đúng"
        flag += 2;
    } else {
        let wrongNumberElement = document.getElementById('result');
        wrongNumberElement.innerHTML = "Bạn đã đoán sai"
    }
    let totalElement = document.getElementById('total');
    totalElement.innerHTML = "Tổng điểm :" + flag;
    numberValue.value = '';
}