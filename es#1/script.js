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
    aloyThrow.innerText = "Aloy ha ritato: " + (Math.floor(Math.random() * 6) + 1);
    zeldaThrow.innerText = "Zelda ha tirato: " + (Math.floor(Math.random() * 6) + 1);

})


