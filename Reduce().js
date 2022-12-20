// // Không truyền Initital Value :
Array.prototype.reduce2 = function(callback,result){
let i = 0 ;
if ( arguments.length < 2 ){
   i = 1;
   result = this[0];
}
for(;i<this.length;i++){
    result = callback(result,this[i]);
}
return result;
}

const numbers = [1,2,3,4,5];

let result = numbers.reduce2(function(total,number){
    return total +number;
},0)

console.log(result)


