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
    // a.forEach(element => {
    //     element['toan'] = Math.floor(Math.random() * 10);
    //     element['ly'] = Math.floor(Math.random() * 10);
    //     element['hoa'] = Math.floor(Math.random() * 10);

    // });
    // console.log(a)
    a.map(function(b){
        b['toan'] = Math.floor(Math.random() * 10)
        b['ly'] = Math.floor(Math.random() * 10)
        b['hoa'] = Math.floor(Math.random() * 10)
    })
    console.log(students)
}
addPoint(students)

function display(a) {
        for (let i = 0 ; i < a.length ; i++) {
            for ( var key in a[i]){
                console.log(key+':'+a[i][key])
            }
            console.log("-----------------------")
        }
   
}
display(students);
