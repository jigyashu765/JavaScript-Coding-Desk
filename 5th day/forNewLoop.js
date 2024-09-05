//For Loop
// var  color = ["Red", "White", "Black", "Orange", "Pink"];

// for(var i = 0; i < color.length; i++){
//     console.log(i + " -> " +color[i]);
// }

//For in Loop
// var colors = {
//     primary : "white",
//     secondary : "Red",
//     tertiary : "Orange"
// }

//Syntex
// for (var key in object) {
//         const element = object[key];
// }

// for(var color in colors){
//                                       //seconry
//     console.log(color + " -> " + colors[color]);
// }

// var arrNum = [2, 5, 9, 12, 15];

// for(var i in arrNum){
//     console.log(i+ " -> " + arrNum[i]);
// }

//For of loop
var  colors = ["Red", "White", "Black", "Orange", "Pink"];

// for (var element of object) {
//     console.log(element);
// }

// for (var color of colors) {
//     console.log(color);
// }

// Method = entries();

// for(var [index, color] of colors.entries()){
//     console.log(index+ " -> " +color);
// }

var myName = "jigyashu";

for(var i of myName){
    console.log(i);
}
