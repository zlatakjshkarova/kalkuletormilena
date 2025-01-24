let plus = document.getElementById("plus");
let divide = document.getElementById("divide");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");


plus.addEventListener('click', () => {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let resultat = number1 + number2;
    document.getElementById("resultat").innerText = "resultat: " + resultat;
})

divide.addEventListener('click', () => {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let resultat = number1 / number2;
    document.getElementById("resultat").innerText = "resultat: " + resultat;
})


minus.addEventListener('click', () => {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let resultat = number1 - number2;
    document.getElementById("resultat").innerText = "resultat: " + resultat;
})


multiply.addEventListener('click', () => {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let resultat = number1 * number2;
    document.getElementById("resultat").innerText = "resultat: " + resultat;
})
