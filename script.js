/****************************MAIL***************************/
//PSEUDOCODICE
//1. crea array con dentro le email 
//2. inizializza n° massimo N di tentativi di inserimento email da parte dell'utente
//3. chiedi email all'utente
//4. PER i da 1 N ESEGUI
//4a.      SE email è dentro l'array 
//         ALLORA stampa messaggio 
//         ALTRIMENTI chiedi nuovamente l'email
//         FINE SE
//  RIPETI


console.log('JS OK');   //per controllare che lo script js sia linkato dal codice html

const numeroMassimoInserimenti = Math.floor((Math.random() * 10) + 1);  //il numero massimo di tentativi di inserimento dell'email da parte dell'utente va da 1 a 10

let arrayEmail = ["silvio@gmail.com","lorenzo@gmail.com","federico@gmail.com"];

let emailUtente = prompt('Inserisci la tua email:');

for(let indice = 0; indice < numeroMassimoInserimenti; indice++)
{
    for(let i = 0; i < arrayEmail.length; i++)
    {
        if(arrayEmail[i] === emailUtente)
        {
            //console.log('Email corretta!!!');
            alert('Email corretta!!!');
            break;
        }else{
            emailUtente = prompt('Errore!!Inserire nuovamente email:');
        }
    }
}
alert('Hai superato il numero massimo di tentativi, accesso negato!!!');