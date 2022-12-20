var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
    ['born',2001]
];

function arrToObj(ar)
{
// var s=ar.reduce(function(a,b){
// a[b[0]]=b[1];
// return a;
// },{})
// console.log(ar[0][0])
// return s;

let newObject = {};
for ( let i = 0 ; i < ar.length ; i++){
         newObject[`${ar[i][0]}`] = `${ar[i][1]}`;
        }
        return newObject;
}
console.log(arrToObj(arr));
// { name: 'Sơn Đặng',
// age: 18 }
