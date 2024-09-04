// if ture 
//   do soming
// else 
//     do nothing

//syntex
// if condtion
// if(condtion){
//     //Ture block
// }

//if-else condtion
// if(condtion){
//     //Ture block
// }else{
//     //False block
// }

//real life example
// var studentScore = 95;

// if(studentScore > 90){
//     console.log("You will get cycle");
// } else {
//     console.log("You get nothing");
// }

// 90 - 100 = A
//75 - 89 = B
//60 -74 = C
// less than 60 = fail

//if-else-if condtion

var studentScore = 100;

if (studentScore >= 90 && studentScore <= 100){
    console.log("You will get Grade A");
} else if (studentScore >= 75 && studentScore <= 89){
    console.log("You will get Grade B");
}else if (studentScore >= 60 && studentScore <= 74){
    console.log("You will get Grade C");
}else{
    console.log("Fail");
}
