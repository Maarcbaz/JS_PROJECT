let c; // CALCULATE THE TOTAL EQUATION
let submit = document.getElementById('btn').onclick = function() {
    
    let a = document.getElementById('atext').value // GET THE INPUTED VALUE
    a = Number(a) // TURNS IT INTO A NMBER INSTEAD OF A STRING

    let b = document.getElementById('btext').value // GET THE INPUTED VALUE
    b = Number(b) // TURNS IT INTO A NMBER INSTEAD OF A STRING

    c = Math.pow(a, 2) + Math.pow(b, 2) // RAISE THE INPUTED VALUE TO 2
    c = Math.sqrt(c); //FIND THE SQUARE ROOT OF THE INPUTED VALUE

    document.getElementById('result').innerHTML = "Result: " + c; // RETURNS THE INPUTED VALUE
    alert("Anser: " + c)

}