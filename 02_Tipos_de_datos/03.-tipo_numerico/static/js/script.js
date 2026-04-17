console.log("conexion exitosa");

// tipos de datos numericos

//1.-Declaracios de numeros (creacion de variables numericas)
let edad = 31;
let temperatura = -5;
let precio = 199900;
let pi = 3.1416;
let descuento = 0.25;

//operaciones bacicas con numeros
let suma = 10 + 5; //15
let resta = 10 - 5; //5
let multiplicacion = 10 * 5; //50
let division = 10 / 2; //5
let modulo = 10 % 3; //1 (residuo de la division)
let potencia = 2 ** 3; //8 (2 elevado a la 3)
console.log(`El ressultado de 2 eleevado a 3 en potencia rs:${2**3}`);

//3.- Incremento y decremento
let numero = 10;
numero++; // 11
numero--; //  9

//4.- Numeros con desimales
let promedio = 6.5;
let altura = 1.67;
let peso = 90.3;

//5.- Numeros grandes y notacion cientifica
let poblacion = 1e6; // 1,000,000
console.log("numero grande 1e6: " + poblacion);
let numeroPequeno = 5e-3; // 0.005
console.log("numero pequeño 5e-3: " + numeroPequeno);

//6.-operacioones conbinadas
//calculo de precios
let precioProducto = 10000;
let iva = 0.19;
let total = precioProducto + (precioProducto * iva); //11900
console.log(`el precio total con iva es: ${total}`);
//calculo de valor de hora trabajada
let horas = 40;
let valorHora = 7000;
let sueldo = horas * valorHora; //280000
console.log("el sueldo semanal es: " + sueldo);

//7.- redondeo de numeros
console.log("redondeando 4.6: " + Math.round(4.6)); //5
console.log("redondeando 4.3: " + Math.floor(4.6)); //4