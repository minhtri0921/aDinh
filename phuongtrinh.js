let a = +prompt('Nhập a : ')
let b = +prompt('Nhập b : ')
let c = +prompt('Nhập c : ')
let delta = (b*b-4*a*c)
let x1 ;
let x2 ;

try {
    if (a == 0 ){
        if (b == 0){
            if (c == 0){
                console.log('Phương trình vô số nghiệm')
            }else{
                console.log('Phương trình vô nghiệm')
            }
        }else{
            console.log('Phương trình có 1 nghiệm duy nhất x = '+(-c/b))
        }
    }else{
        if (delta > 0 ){
             x1 = (-b + Math.sqrt(delta)) / (2 * a) ; 
             x2 = (-b - Math.sqrt(delta)) / (2 * a) ; 
            console.log('Phương trình có 2 nghiệm là x1 ='+x1+'và x2 = '+x2);
            }else if (delta == 0){
            x1 = (-b ) / (2 * a) ; 
            console.log('Phương trình có 1 nghiệm kép là x ='+x1);
            }else{
                console.log('Phương trình vô nghiệm')
            }
    }
} catch (error) {
    console.log(error.message)
}
