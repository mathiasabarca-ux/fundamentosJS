console.log("conexion con js correcta");

// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let nombre = "camila"
let edad = 25
console.log(`hola mi nombre es ${nombre} y tengo ${edad} años, mi edad es de tipo: ${typeof edad}`);
// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
const comuna = "Maipú";
const region = "Metropolitana";
console.log(`vivo en la comuna de ${comuna.toUpperCase()} y en la region de ${region.toLowerCase()}`);
// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python";    
console.log(`el lenguaje "${lenguaje.toUpperCase()}" tiene ${lenguaje.length} caracteres y su tipo de dato es: ${typeof lenguaje}`);
// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let mensaje = "Me encanta programar en JavaScript";
console.log(`el mensaje "${mensaje.toLowerCase()}" tiene ${mensaje.length} caracteres y contiene la palabra "JavaScript": ${mensaje.includes("JavaScript")}`);
// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
//con el comando includes
let compras = "arroz, fideos, aceite, sal";
console.log(`la lista de compras "${compras.toUpperCase()}" tiene ${compras.length} caracteres y contiene la palabra "aceite": ${compras.includes("aceite")}`);
// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = 456;
let numeroCasaTexto = String(numeroCasa);
console.log(`el numero de casa es: ${numeroCasaTexto}, su tipo de dato es: ${typeof numeroCasaTexto} y tiene ${numeroCasaTexto.length} caracteres`);
// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let nombre2 = "Diego";
let apellido2 = "Rojas";
let nombreCompleto = `${nombre2} ${apellido2}`;
console.log(`Nombre completo: ${nombreCompleto.toUpperCase()} y tiene ${nombreCompleto.length} caracteres`);  
// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase = "Hoy aprenderemos sobre strings";
console.log(`la frase "${frase.toUpperCase()}" tiene ${frase.length} caracteres y contiene la palabra "strings": ${frase.includes("strings")}`);
// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto = "Programar es divertido";
console.log(`Texto original: "${texto}", en minúsculas: "${texto.toLowerCase()}", en mayúsculas: "${texto.toUpperCase()}" y tiene ${texto.length} caracteres`);
// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C";
let anio = 2026;
let anioTexto = String(anio);
console.log(`CURSO: ${curso}, AÑO: ${anioTexto}, TIPO DE DATO DEL AÑO: ${typeof anioTexto}`.toUpperCase()); 
