let btn = document.getElementById("btn")

let input = prompt("inserisci un numero")
let inputNumber = parseInt(input);

const numeroInserito = document.getElementById("numeroInserito")
const correctionNumber = document.getElementById("correctionNumber")


btn.addEventListener( "click", function() {
    
    
    if (inputNumber % 2 === 1) {
        inputNumber = inputNumber + 1
        correctionNumber.innerHTML = ` Forse volevi dire ${inputNumber} ?`
    }

    
    
    console.log(inputNumber);
})

numeroInserito.innerHTML = inputNumber