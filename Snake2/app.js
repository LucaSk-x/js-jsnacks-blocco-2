let listName = ["Mario", "Giovanni", "Luca", "Giulio", "Franco", ]
let listLastName = ["Rossi", "Verdi", "Bianchi", "Gialli", "Arancioni", ]

let NomeInserito = document.getElementById ("numeroInserito")

const btn = document.getElementById ("btn")



btn.addEventListener("click", function() {
    for (let i = 0; i < 6; i++) {

        let randomName =  Math.floor(Math.random() * listName.length);
        let randomLastName =  Math.floor(Math.random() * listLastName.length);

        NomeInserito.innerHTML = ` Ciao ${listName[randomName]} ${listLastName[randomLastName]}`
        
    }

    
})