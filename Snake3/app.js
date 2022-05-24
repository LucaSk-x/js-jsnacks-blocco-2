let listNumber = [4, 52, 6, 8, 5, 10, 2, 9, 7, 3, 1, 5,];


let NomeInserito = document.getElementById ("numeroInserito")


const btn = document.getElementById ("btn")

btn.addEventListener("click", function() {
    let oddNumber = 0
    for (let i = 0; i < listNumber.length; i++) {
        if (i % 2 === 1) {
            let currentNumber = listNumber[i];
            oddNumber += currentNumber

        }
    }
    NomeInserito.innerHTML = ` La somma dei numeri in posizione pari è ${oddNumber}`

});


