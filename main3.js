const listHoa = [
    {
        id: 1,
        tenHoa: 'Hoa Phong Lan',
        loaiHoa: 'Khai trương',
        hinhAnh: 'images/tmp/hoa1.jpg'
    },
    {
        id: 2,
        tenHoa: 'Hoa tỷ muội',
        loaiHoa: 'Khai trương',
        hinhAnh: 'images/tmp/hoa2.jpg'
    },
    {
        id: 3,
        tenHoa: 'Hoa Violet',
        loaiHoa: 'Hoa kỷ niệm',
        hinhAnh: 'images/tmp/hoa3.jpg'
    },
    {
        id: 4,
        tenHoa: 'Hoa thủy tiên',
        loaiHoa: 'Hoa tình yêu',
        hinhAnh: 'images/tmp/hoa4.jpg'
    },
    {
        id: 5,
        tenHoa: 'Hoa cẩm chướng',
        loaiHoa: 'Hoa hạnh phúc',
        hinhAnh: 'images/tmp/hoa5.jpg'
    }
]
let tableTitles = `
<tr>
<th>ID</th>
<th>Tên hoa</th>
<th>Loại hoa</th>
<th>Hình ảnh</th>
<th>Chức năng</th>
</tr>
`
function render(el){
    return `<tr>
    <td>${el.id}</td>
    <td><a href="#" title=${el.tenHoa}>${el.tenHoa}</a></td>
    <td>${el.loaiHoa}</td>
    <td><img src=${el.hinhAnh} alt = ${el.hinhAnh}></td>
    <td>
    <a href = '#' title = 'Sửa'><img src = 'images/pencil.gif' alt = 'images/pencil.gif'>Sửa</a>
    <a href = '#' title = 'Xóa'><img src = 'images/bin.gif' alt = 'images/bin.gif'>Xóa</a>
    </td>
    </tr>`
} 
function render1(listFlowers){
    let a = document.querySelector('table')
    // a.setAttribute.style = 'border = "1px"' 
    let str = ""
    for (const el of listFlowers) {
        str += render(el)
    }
   a.innerHTML = tableTitles + str
    
}

render1(listHoa)