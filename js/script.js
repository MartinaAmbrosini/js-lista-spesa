// Consegna:

// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// Consigli:

// - Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while.

//  faccio lista spesa 

const spesaArray = ["latte", "carne", "verdura", "pane", "frutta"];

const spesa = document.getElementById("spesa");

let text = "";

// dichiaro e inizializzo il contatore 

let i = 0 ;

// scorro l'array con while


while (i < spesaArray.length) { //finchè i è < della lunghezza dell'Array
    
   text += "<li>" + spesaArray[i] + "</li>";
   spesa.innerHTML= text;
   i++;
} 

