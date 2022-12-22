const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];


function addPoint(a) {
    a.forEach(element => {
        element['toan'] = Math.floor(Math.random() * 10);
        element['ly'] = Math.floor(Math.random() * 10);
        element['hoa'] = Math.floor(Math.random() * 10);

    });
    console.log(a)
}
addPoint(students)

function display(a) {
    a.forEach(element => {
        console.log({
            id: `${element.id}`,
            name: `${element.name}`,
            address: `${element.address}`,
            toan: `${element.toan}`,
            ly: `${element.ly}`,
            hoa: `${element.hoa}`,
        })
    })
}
display(students);