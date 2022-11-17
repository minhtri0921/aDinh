Array.prototype.map2 = function(callback){
for (var i = 0 ; i < this.length ; i++){
    callback(this[i],i);
}
}

var courses = [
    'Javascript',
    'Ruby',
    "Java"
]

courses.map2(function(course , index){
console.log(index,course)
})