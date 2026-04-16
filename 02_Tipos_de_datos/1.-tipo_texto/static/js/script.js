console.log("conexion con js correcta");
/*
Dato: Tipo de texto (string)
concatenacion de texto con el signo +
podemos unir textos y variables
*/
const nombre = "matghias"
const apellido = "abarca"
//unimos ambas constantes con un texto extra.
console.log("hola " + nombre + " " + apellido);

/*
2.- ver tipo de dato con typeof
*/
console.log("la variable nombre es de tipo de dato: " + typeof nombre);

//Template literals (forma moderna de concatenar texto)
console.log(`hola mi nombre es ${nombre} ${apellido}`);

//mostrar el largo de un string(texto)
let palabra = "Paralelepipedo";
console.log(`la palabra ${palabra} tiene ${palabra.length} caracters`);

let frase = "un camion de choclo deoblo y choclo";
console.log(`la frase ${frase} tiene ${frase.length} caracters`);

//metodos comunes en JS para formatrear texto
//reasformar texto a mayuscula
let texto = "WoW que texto tan largo";
console.log(texto.toUpperCase());
//Transformar texto a minuscula
console.log(texto.toLowerCase());

//Buscar una palabra dentro de un string .includes() 
let texto2 = "el perro de juan es muy lindo";
console.log(texto2.includes("perro"));
console.log(texto2.includes("gato"));

//convertir una variable a texto
let telefono = 8273648762;
let telefono_texto = String(telefono);
console.log(`Mi numero de telefono es: ${telefono_texto}
    es de tipo: ${typeof telefono_texto}`);