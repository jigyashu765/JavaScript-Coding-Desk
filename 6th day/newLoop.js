// var student={
//     firstName : "Ram",
//     lastName : "Kumar",
//     class : 5,
//     age : 10,
//     rollNo : 20
// }

// //for in loop
//       //Key    object
// for(var st in student){
//              //class       student[class]
//     console.log(st + " - " + student[st]);
// } //object

//In javascrit, Array is also a object;
//Key of Array  0       1       2       3       4
var colors = ["Red", "Blue", "Black", "Pink", "Green"];

// for(var color in colors){
//               // 3              colors[3]
//     console.log(color + " - " + colors[color]);
// }


//for of loop
//      value    object
// for(var color of colors){
//         console.log(color);
// }

//method - entries();

// for(var [index, color] of colors.entries()){
//     console.log(index+"-"+color);
// }

var a = "Jigyashu";

// method
//toUpperCase(); : it convert text into upper case;

for(var color of a){
        console.log(color);
}