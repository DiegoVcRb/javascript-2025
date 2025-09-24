/* 

    Condicionlaes

    Son estructuras de control que nos permiten ejecutar diferentes bloques de codigo segun una condicion (verdadera o falsa).

    1. if

    Evalua una condición y si es verdadera, ejecuta el bloque de codigo dentro de sus llaves.

    Sintaxis:

    if (condicion) {
        // bloque o codigo que se ejecuta
    }

*/

let edad = 18;
if (edad >= 18) {
    // Codigo que se ejecuta:
    alert("Eres mayor de edad, date!😈")
}

/* 

    2. else
        
    Permite ejecutar un bloque de codigo si la condicion es falsa.

    Sintaxis:

    if (condicion) {
    // codigo que se ejecuta si la condicion es verdadera.

    } else {
        // codigo que se ejecuta si la condidcion es falsa.    
    }
    
*/

let hora = 10;

if (hora < 12) {
    console.log("Buenos dias solecito! 🌞")
} else {
    console.log("Buneas tardes chirinfulo! 🌆")
}

/* 

    3. else if
    
    Nos va a permitir tener más de una condición a ser evaluada, esta evalucion es en secuencia, si una condicion es verdadera se ejecuta su bloque de codigo
    
    Sintaxis
    
    if (condicion){
        // codigo que se ejecuta si es verdadera la condición 
    } else if (condicion2) {
        // codigo que se ejecuta si la anterior es falsa y esta condicion es verdadera.
    
    } else {
        // codigo que se ejecuta si ninguna de las anteriores es verdadera.
    }
        
    */

    let calificacion = 10;

    if (calificacion >= 9){
        console.log("Eres un excelente programador! 🤩")
    } else if (calificacion >= 7) {
        console.log("Ahi la llevas, ya casi te sale! 🤗")
    } else if (calificacion >= 5) {
        console.log("Echale más ganitas o nos vemos en el extra! 😫")
    } else {
        console.log("Ya valio barriga, bienvenido al extra! 😓")
    }
