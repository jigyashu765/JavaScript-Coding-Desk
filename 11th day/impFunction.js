//SetTimeout function.

// setTimeout(() => {
//     // document.getElementById("myName").innerText = "Jigyashu Kuamr Gupta";
//     console.log("Hi, I am here👋")
// }, 3000);  //2 second = 2000 milisocond

//SetInterval Function.
let intervalId = setInterval(() => {
    let myTime = new Date;

    let hor = myTime.getHours();
    let min = myTime.getMinutes();
    let sec = myTime.getSeconds();

    document.getElementById("hr").innerText = hor;
    document.getElementById("mi").innerText = min;
    document.getElementById("se").innerText = sec;    
}, 1000); //2 second = 2000 milisocond


//To stop SetInterval Function. clearInterval();
setTimeout(() => {
    clearInterval(intervalId);
}, 5000);