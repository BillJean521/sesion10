/*
Parte 1: Declaración de Variables y Tipos de Datos
- Declara tres variables: `nombre` (string), `edad` (number) y `esEstudiante` (booleano)
- Muestra los valores de estas variables en la consola.
- Cambia los valores de las variables y observa los resultados.
*/


let nombre = prompt("Ingrese su nombre: ");
let edad = parseInt(prompt("Ingrese su edad: "));
let estudiante = prompt("Eres estudiante?: ").toLowerCase() === "si";
let esEstudiante = false;

let message = " ";
console.log("Nombre: ",nombre);
console.log("Edad: ",edad);

if(esEstudiante){
    esEstudiante =true;
}

console.log("Es estudiante?: ",esEstudiante);