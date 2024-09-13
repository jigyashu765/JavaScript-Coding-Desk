// function test(){
    
// }


//anonymous function
// let myFuntion = function (){
//     console.log(1)
// }

//=> : fat Arrow;


//Arrow function
let myFuntion = () => {
    console.log(1)
}

let myFuntion2 = a => console.log(a + 2)


let myFuntion3 = ( a, b ) => {
    console.log(a * b)
}

myFuntion(); //1
myFuntion2(2); //4
myFuntion3(2, 4); //8