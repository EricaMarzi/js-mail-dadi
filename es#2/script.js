console.log("Hi there")
console.log("General Kenobi")

/*
- Lista di mail autorizzate nell'array
- Chiedo all'utente la sua email
- Se la mail è in lista lo autorizzo con un messaggio in pagina
*/

// lista email autorizzate
const emailList = [
    "pinco@gmail.com" , 
    "snips@gmail.com" , 
    "zelda@gmail.com" , 
    "aloy@gmail.com"
]

// richiamo gli elementi necessari 
const userEmail = document.getElementById("user-email")
const login = document.getElementById("login")
const loginResult = document.getElementById("login-result")


login.addEventListener ("click" , function() { 
    console.table(emailList)

    let emailValid = emailList.find(email => email === userEmail.value)
    if (emailValid) {
        loginResult.innerText = "Login effettuato con successo"
    } else {
        loginResult.innerText = "Non sei registrato"
    }
})
