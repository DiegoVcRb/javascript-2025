/* 

    Concatenación

Es el proceso de univer dos o más cadenas de texto en una sola.
Esto se hacen utilizando el operador + o las plantillas literales (template strings) se usan con backticks ``  (acento invertido o acento agudo)

*/

let miNombre = "Diego"
let miApellido = "Vilchis"

// Usando el operador +

let nombreCompleto = miNombre + " " + miApellido;

console.log(nombreCompleto);

// Usando plantillas literales

let nombreNuevo = `Mi nombre es ${miNombre} ${miApellido} y tengo ${20+3} años`;

console.log(nombreNuevo);

/* 

Si se utiliza el operador + con valores numericos se suman. Pero si se usa con cadenas de caracter se concatenan

*/

let resultado = 5 + 10;

console.log(resultado); // 15

let resultadoDos = "5" + 10;

console.log(resultadoDos); // 510


