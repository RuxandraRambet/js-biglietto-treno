'use strict';

// 1) Chidere all'utente il numero di km da percorrere utilizzando un prompt.
// 1a) Trasformo l'informazione inserita in un numero.

const kmElement = Number(prompt("Inserisci i chilometri da percorrere"));
console.log('Km da percorrere: ', kmElement);

// 2) Chidere all'utente l'età utilizzando un prompt.
// 2a) Trasformo l'informazione inserita in un numero.

const ageElement = Number(prompt("Inserisci l'età del passeggero"));
console.log('Età passeggero: ', ageElement);

// Prezzo al km
const kmPrice = 0.21;

// Sconto minorenni
const discountUnder18 = 20;
const discountOver65 = 40;

if (!isNaN(kmElement) && !isNaN(ageElement)) {
    // calcolo prezzo totale
    let fullPrice = kmElement * kmPrice;
    //sconto iniziale
    let ticketDiscount = 0;

    if(ageElement < 18) {
        ticketDiscount = (fullPrice / 100) * discountUnder18;
    }else if (ageElement >= 65) {
        ticketDiscount = (fullPrice / 100) * discountOver65;
    }

    //Calcolo prezzo biglietto comprensivo di sconto
    fullPrice -= ticketDiscount;
    console.log ('Il prezzo del biglietto è: ', fullPrice.toFixed(2));
}else {
    // Dati non validi
    console.log ('Errore, hai inserito valori non numerici');
}

