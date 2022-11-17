// // var fullName = 'Le Minh Tri';
// // var age = 26;

// // alert(age);
// // alert(fullName);

// // console.log(fullName)

// // confirm('Xac nhan ban du tuoi');

// // setTimeout(function(){
// // alert('Thong bao')
// // },5000);

// // setInterval(function(){
// //     console.log('Thong bao'+Math.random())
// // },1000)
// // let a = 1 + 2 ;
// // let b = 5 ; 
// // if ( a<0 || b < 0 ){
// //     alert('Dung')
// // }

// //  var firstName = 'Minh';
// // firstName += ' Tri';

// //  console.log(firstName)

// // var isSuccess = true ;

// // Number type 
// var a = 1 ; 
// var b = 2 ; 
// var c = 3 ; 
// // String type 
// var fullName = "Minh Tri"
// // Boolean type 
// var isSuccess = true ; 

// // Underfined type ; 
// var age ; 

// console.log(age)

// // Null type
// var isNull = null ; // không có gì 

// // Symbol type 
// var id = Symbol('id'); // unique
// var id2 = Symbol('id'); // unique

// // Function 

// var myFunction = function(tuoi){
//     alert('Co gang nhe '+tuoi)
// }

// myFunction('5ting');

// // Objects type

// var myObject = {
//     name : ' Minh Tri',
//     age : 21 ,
//     address : 'Hue',
//      myFunction : function(){
//         alert ('Hehe')
//     }
// }

// console.log(myObject.function)

// var myArray = [1,2,3,4,5]

// // Kiểm tra kiểu dữ liệu 

// console.log(typeof fullName)

class User {
    constructor (firstName,lastName,avatar){
        this.firstName=firstName;
        this.lastName = lastName;
        this.avatar = avatar;
    }

   getName() {
    return `${this.firstName}${this.lastName}`
   }
}

User.prototype.gender = 'unknow'
var author = new User('Le',' Minh Tri','ava')
var user = new User('Nguyen', ' Ngoc Du','ava')


console.log(author.getName())
console.log(user.getName())
console.log(author.gender)