'use strict';

// 1) Chidere all'utente il numero di km da percorrere utilizzando un prompt.
// 1a) Trasformo l'informazione inserita in un numero.

const kmElement = Number(prompt("Inserisci i chilometri da percorrere"));
console.log('Km da percorrere: ', kmElement);

// 2) Chidere all'utente l'età utilizzando un prompt.
// 2a) Trasformo l'informazione inserita in un numero.

const ageElement = Number(prompt("Inserisci l'età del passeggero"));
console.log('Età passeggero: ', ageElement);

// 3) Calcolare il prezzo totale del biglietto.
const fullPrice = kmElement * 0.21;
console.log(fullPrice);

// 4) Calcolo prezzo finale in base all'età con i rispettivi sconti
// Uso del .toFixed Method per specificare le 2 decimali


if (ageElement < 18){
    console.log(
        'Caso 1: ', (fullPrice * 0.8).toFixed(2)
    );
    
}else if(ageElement >= 65){
    console.log (
        'Caso 2: ', (fullPrice * 0.6).toFixed(2)
    );
   
}else {
    console.log(
        'Caso 3: ', fullPrice.toFixed(2)
    );
    
}