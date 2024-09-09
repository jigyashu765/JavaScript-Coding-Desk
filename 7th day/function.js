//Syntex

// function funName(){
//     //codes are here
// }

// funName(); //Call the function

//Add
//Function Without Parameter
// function add(){
//     console.log(2 + 5);
// }

// add();


//Function With parameter and arguments;

// function add(a, b){
//     console.log(a + b);
// }


// add(2, 5);
// add(5, 8);
// add(10, 15);

function add(){
    var a = document.getElementById("num1").value; //5
    var b = document.getElementById("num2").value; //8

    var res = parseInt(a) + parseInt(b) //13

    document.getElementById("result").innerText = res;
}

function sub(){
    var a = document.getElementById("num1").value; //5
    var b = document.getElementById("num2").value; //8

    var res = parseInt(a) - parseInt(b) //13

    document.getElementById("result").innerText = res;
}

function mul(){
    var a = document.getElementById("num1").value; //5
    var b = document.getElementById("num2").value; //8

    var res = parseInt(a) * parseInt(b) //13

    document.getElementById("result").innerText = res;
}

function div(){
    var a = document.getElementById("num1").value; //5  0
    var b = document.getElementById("num2").value; //8  /0

    var res;
    if(b != 0){
        res = parseInt(a) / parseInt(b) //13
    } else {
        res = "divison not possible"
    }

    document.getElementById("result").innerText = res;
}