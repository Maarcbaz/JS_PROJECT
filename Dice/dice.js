let x;
let y;
let z;

document.getElementById('btn').onclick = function () {
    x = Math.floor(Math.random() * 6 + 1);
    y = Math.floor(Math.random() * 6 + 1);
    z = Math.floor(Math.random() * 6 + 1); /* CREATE RANDOM NUMBERS THEN MULTIPLY IT BY 6 TO GET NUMBERS FRON 0 - 5 ADD 1 TO IT TO START FROM 1 - 6 FLOOR ROUNDS IT DOWN */


    document.getElementById('xlabel').innerHTML = x;
    document.getElementById('ylabel').innerHTML = y;
    document.getElementById('zlabel').innerHTML = z; /* GET THE RANDOM NUMBERS FOR Z */
}