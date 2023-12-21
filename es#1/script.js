console.log("JS OK")

//? Esercizio 1
/*
- Richiamare gli elementi necessari
- Generare un numero random da 1 a 6 per i due giocatori
- Confrontare i numeri stabilendo il più alto
- Stampare in pagina con il risultato
*/ 

// richiamo gli elementi
const buttonThrow = document.getElementById("button-throw");
const winner = document.getElementById("winner");
const aloyThrow = document.getElementById("aloy");
const zeldaThrow = document.getElementById("zelda");

// randomizzo da 1 a 6 stampando in pagina
buttonThrow.addEventListener ("click" , function() {
    const aloyResult = (Math.floor(Math.random() * 6) + 1);
    const zeldaResult = (Math.floor(Math.random() * 6) + 1);
    aloyThrow.innerText = "Aloy ha ritato: " + parseInt(aloyResult);
    zeldaThrow.innerText = "Zelda ha tirato: " + parseInt(zeldaResult);

    if (aloyResult > zeldaResult) {
        winner.innerText = "Aloy ha vinto!"
    } else if (aloyResult < zeldaResult) {
        winner.innerText = "Zelda ha vinto!"
    } else {
        winner.innerText = "Pareggio, ritirate!"
    }
})


