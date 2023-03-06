let a = document.querySelector('input')

a.onchange = function (e){
    console.log(e.currentTarget.value)
}