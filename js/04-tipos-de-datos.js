/* 

    Tipos de datos

    Los tipos de datos son una clasificación de los diferentes valores que podemos manejar en un lenguaje de programación.

    En JS existen varios tipos que se pueden agrupar en dos categorias pricnipales: primitivos y complejos u objetos.

    Cada tipo de dato tiene sus propias caracteriscticas y usos especificos en la programación.

    1. Primitivos

    Datos Basicos que se consideren "objetos" y no tienen "metodos".

    👉🏻 Number o numero

    Estos representan numericos ya sean enteros o decimales (punto flotante).

    👉🏻 Strings o Cadenas de Caracteres

    Representan texto. El texto se coloca entre comillas dobles o simples: "texto" 'texto'. Se valen las dos, pero hay que ser consistentes 

    👉🏻 Boolean o Boleanos

    Representan un valor logico que puede ser 'true' o 'false'.

    👉🏻 Undefined o Indefinido

    Es el valor que se asigna a una variable que ha sido declarada pero no inicializada.

    👉🏻 Null o nulo 

    Esta respresenta la ausencia intencional de cualquier valor u objeto. Es una tipo de dato que indica que una variable no tiene ningun valor asignado.
*/

/* Numbers */

let miNumero = 8; //Enteros
let miNumeroDecimal = 7.7; //Decimales

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */

let miNombre = 'Yeyo';
let miApellido = 'Vilchis';

/* Boolean */

let esEstudiante = true;
let tieneTrabajo = false;

console.log(esEstudiante);
console.log(tieneTrabajo);

/* Undefined */

let aprobareDesarrolloApps; //Inicializar una variable
console.log(aprobareDesarrolloApps);

/* Null */

let meQuiere = null;
console.log(meQuiere);


/* 

    2.Complejos o de objetos
    
    👉🏻 Array o Arreglo
    
    Es un conjunto de datos que se almacenan en una lista ordenanda de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados por comas , 
    
    👉🏻 Object u Obajeto 

    Es un conjunto de multiples datos en pares 'claves'-'valor'. se escriben entre {} y separados por comas ,

    👉🏻 Fuctions o Funciones 

    Es un tipo de dato que puede ser "invocado". Se declaran con la palabra reservada "funcion" y el codigo que se ejecuta va entre {"codigo"} 
    
*/

/* Array */

let misSeries = ['Friends' , 'Dr.House' , 'Malcom'];
let misNumeros = [ 7 , 8 , 17 , 11 , 21 ];
let tutifruti = ['Puchunguito', 777, true];

console.log( misSeries[2] ); // Malcom
console.log( misNumeros[4] );// 21
console.log( tutifruti[1] );// 182

/* Object */

let perro = {
    nombre: 'Firulais',
    edad: 5,
    color: "negro",
    ladra: true,
    muerde: false
}

console.log( perro.nombre );
console.log( perro.edad );
console.log( perro.muerde );

/* Funciones */

function saludar() {
    /* codigo a ejecutar */
    console.log('¡Hola mamá, estoy aprendiendo JS!');
}

//Llamamos a la función
saludar();