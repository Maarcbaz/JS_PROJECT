// let radius = Number(prompt("Please Enter Your radius:")) // CREATES A PROMPT MESSAGE
// const pie = 3.141592; // PIE IS CONSTANT
// Number(radius) // TURNS PIE TO A NUMBER
// let circumfrence = 2 * pie * radius // CALCULATE THE VALUE OF THE CIRCUMFERENCE
// console.log("The circumfrence is:" + circumfrence); // CONSOLE THE TOTAL VALUE
// alert("The circumference of the circle is:  " + circumfrence ) // PRINT AN ALERT BOX FOR THE TOTAL VALUES










// let x = Number(prompt("Please Enter Your x ?")) 

// let y = Number(prompt("Please Enter Your y ?")) 

// function percentage(x, y) {
//     return x/100 * y;
// }

// function showPercent() {
//     alert (percentage(x, y))  
//     console.log(percentage(x, y))
// }

// showPercent();


// prompt(percentage())





let radi = document.getElementById('radius');
let total = document.getElementById('submit');


const pie = 3.144;
let raDius;
let all;
Number(raDius);

total.onclick = function (event) {
    raDius = pie * radi.value * 2;
    // alert(raDius);
    all = raDius;
    if (all <= 0) {
      alert("oops looks like you don't have a number")
    }
    
    document.getElementById("show").innerHTML = "Reult:  \t"  + all;
    
    event.preventDefault()
} 




