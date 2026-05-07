console.log("conexion exitosa");

// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {

    let nombre = "Juan";
    alert(`Bienvenido ${nombre}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let num1 = 10;
    let num2 = 5;
    alert(`La suma es: ${num1 + num2}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let num1 = 15;
    let num2 = 3;
    alert(`La resta es: ${num1 - num2}`);
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let num1 = 8;
    let num2 = 3;
    alert(`La multiplicación es: ${num1 * num2}`);
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let num1 = 5.4;
    let num2 = 6.0;;
    let sumadenotas = num1 + num2;
    let promedio = sumadenotas / 2;
    alert(`El promedio es: ${promedio}`);
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 20;
    if (edad >= 18) {
        alert("Es mayor de edad");
    } else {
        alert("Es menor de edad");
    }

}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let numero = 8;
    if (numero % 2 === 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let nota = 7.5;
    if (nota >= 6) {
        alert("Estudiante aprobado");
    } else {
        alert("Estudiante reprobado");
    }

}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let precioOriginal = 20000;
    let descuento = 0.1;
    alert(`Precio final con descuento: $${precioOriginal * descuento}`);

}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let num1 = 10;
    let num2 = 5
    if (num1 > num2) {
        alert(`El número mayor es: ${num1}`);
    } else {
        alert(`El número mayor es: ${num2}`);
    }
}
