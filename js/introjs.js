

console.log("hola mundo");
console.info("esto es informacion importante");
console.warn("cuidado");
console.error("ya la regaste");
console.assert(1 == 1);
console.assert(1 == 0);

//Variables, constantes
let nombre = 'claudio';
console.log("hola" + nombre);
// con `` ${} para imprimir
console.log(`${nombre} esta programando y le esta dando hambre`);

const precio_chilaquiles = 89;

//Alcance de las variables

//solo se imprime si el log esta dentro de las llaves, porque hasta ahi es el alcance de la variable
{
    let precio_crema = 20;
}

//arroja un error poque crema fue declarado dentro de las llaves y se murio dos lineas arriba
//console.log(precio_crema)
//si hay un error js no sirve

//alert, prompt, confirm
//alert(`los chilaquiles cuestan ${precio_chilaquiles}`);

//prompt nos permite interactuar con el usuario
//const chilaquiles_favoritos = prompt("cuales son tus chilaquiles favoritos?");
//console.log(`tus chilaquiles favoritos son ${chilaquiles_favoritos}`);

//const is_hambre = confirm("eres alergico a la salsa verde?");

/*
if (is_hambre) {
    console.info("pide unos chilaquiles rojos");
} else {
    console.warn("pide unos chilaquiles verdes");
}
*/
// funciones tradicionales

function preparar_chilaquiles(tipo) {
    console.log(`preparando orden de chilaquiles ${tipo}`);
}

//preparar_chilaquiles(chilaquiles_favoritos);

//funciones modernas
const crema = () => {
    console.log("con crema y aguacate");
}

//crema();

//Ejemplo funcion anonima, como podemos ver nos ahorramos escribir el nombre

document.getElementById("preparar").onclick = () => {
    preparar_chilaquiles(chilaquiles_favoritos);
    crema();
}

//arreglos

const arreglo = ["elemento"];

const arreglo2 = new Array();

//arreglo push, agregar

arreglo.push("otro elemento");

arreglo[10] = "uno mas";

arreglo["chilaquil"] = "verde";

//recorridom tradicional del arreglo
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

//recorrido alternativo

for (let posicion in arreglo) {
    console.log(posicion + ": " + arreglo[posicion]);
}

//objetos

const objeto = {
    salsa: "verde",
    extras: "pollo, crema y aguacate",
}

//LAB 04

//PROBLEMA 1

// Se solicita al usuario que introduzca un número
let numero = parseInt(prompt("Introduce un número:"));

// Se comienza a crear una tabla HTML
document.write("<table border='1'>");

// Se añade la fila de encabezado con las etiquetas de "Número", "Cuadrado" y "Cubo"
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

// Se itera desde 1 hasta el número introducido por el usuario
for (let i = 1; i <= numero; i++) {
    document.write("<tr>");
    // Se muestra el número
    document.write("<td>" + i + "</td>");
    // Se calcula y muestra el cuadrado del número
    document.write("<td>" + (i * i) + "</td>");
    // Se calcula y muestra el cubo del número
    document.write("<td>" + (i * i * i) + "</td>");
    document.write("</tr>");
}

// Se cierra la tabla HTML
document.write("</table>");

//PROBLEMA 2

// Se generan dos números aleatorios entre 0 y 99
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

// Se registra el tiempo de inicio
let startTime = new Date();

// Se pide al usuario que ingrese la suma de los dos números generados
let respuesta = parseInt(prompt(`¿Cuánto es ${num1} + ${num2}?`));

// Se registra el tiempo de finalización
let endTime = new Date();

// Se calcula el tiempo que tardó el usuario en responder en segundos
let tiempo = (endTime - startTime) / 1000; // Convertir a segundos

// Se verifica si la respuesta del usuario es correcta
let resultadoCorrecto = (respuesta === (num1 + num2));

// Se muestra si la respuesta es correcta o incorrecta y el tiempo que tardó
document.write(`<p>Respuesta ${resultadoCorrecto ? "correcta" : "incorrecta"}.</p>`);
document.write(`<p>Tiempo de respuesta: ${tiempo} segundos.</p>`);

//PROBLEMA 3

// Función que cuenta la cantidad de números negativos, ceros y positivos en un arreglo
function contador(arr) {
    // Inicializamos contadores
    let negativos = 0, ceros = 0, positivos = 0;

    // Iteramos sobre cada número en el arreglo
    arr.forEach(num => {
        if (num < 0) negativos++;       // Si es negativo, incrementamos el contador de negativos
        else if (num === 0) ceros++;    // Si es cero, incrementamos el contador de ceros
        else positivos++;               // Si es positivo, incrementamos el contador de positivos
    });

    // Devolvemos un objeto con los contadores
    return { negativos, ceros, positivos };
}

//PROBLEMA 4

// Función que calcula los promedios de cada fila en una matriz (arreglo de arreglos)
function promedios(matriz) {
    // Se utiliza map para recorrer cada fila y calcular el promedio
    return matriz.map(fila => {
        let suma = fila.reduce((acc, num) => acc + num, 0);  // Se suma todos los elementos de la fila
        return suma / fila.length;  // Se calcula el promedio dividiendo la suma entre la cantidad de elementos
    });
}

//PROBLEMA 5

// Función que invierte los dígitos de un número
function inverso(num) {
    // Convertimos el número a string, lo separamos en un arreglo de caracteres, lo invertimos y lo unimos de nuevo
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
    // `Math.sign(num)` se asegura de mantener el signo original del número
}

// PROBLEMA 6

/**
 * Uno de los grandes problemas que tengo es que me cuesta mucho concentrarme en realizar una tarea en especifico
 * y a veces no me organizo muy bien, entonces para este ultimo ejercicio hare una tabla en la que puedas agregar una
 * tarea, el tiempo estimado que tardaras en realizarla (en minutos) y un cronometro para medir el tiempo que tardas
 * en realizarla y asi mantener un mejor control de tu tiempo
 */

// Clase que representa una tarea
class Tarea {

    //Inicializamos constructor
    constructor(nombre, tiempoEstimado) {
        this.nombre = nombre;  // Nombre de la tarea
        this.tiempoEstimado = tiempoEstimado;  // Tiempo estimado en minutos
        this.tiempoTranscurrido = 0;  // Tiempo transcurrido en segundos
        this.intervalo = null;  // ID del intervalo para el cronómetro
    }

    // Método para iniciar el cronómetro
    iniciarCronometro(displayElement) {
        if (!this.intervalo) {  // Solo iniciar si no hay un intervalo activo
            this.intervalo = setInterval(() => {
                this.tiempoTranscurrido++;
                this.actualizarDisplay(displayElement);
            }, 1000);
        }
    }

    // Método para pausar el cronómetro
    pausarCronometro() {
        clearInterval(this.intervalo);  // Detener el intervalo
        this.intervalo = null;  // Resetea el ID del intervalo
    }

    // Método para actualizar el display del cronómetro
    actualizarDisplay(displayElement) {
        let horas = Math.floor(this.tiempoTranscurrido / 3600);
        let minutos = Math.floor((this.tiempoTranscurrido % 3600) / 60);
        let segundos = this.tiempoTranscurrido % 60;

        // Formatear el tiempo
        let horasStr = horas < 10 ? `0${horas}` : horas;
        let minutosStr = minutos < 10 ? `0${minutos}` : minutos;
        let segundosStr = segundos < 10 ? `0${segundos}` : segundos;

        // Mostrar el tiempo en el elemento correspondiente
        displayElement.innerText = `${horasStr}:${minutosStr}:${segundosStr}`;
    }
}

// Arreglo que contiene las tareas
let tareas = [];

// Función para agregar una nueva tarea
function agregarTarea() {
    let nombre = document.getElementById('nuevaTarea').value;
    let tiempoEstimado = parseInt(document.getElementById('tiempoEstimado').value);

    if (nombre && tiempoEstimado) {
        let tarea = new Tarea(nombre, tiempoEstimado);
        tareas.push(tarea);
        mostrarTareaEnTabla(tarea);
    }
}

// Función para mostrar una tarea en la tabla
function mostrarTareaEnTabla(tarea) {
    let tabla = document.getElementById('tablaTareas').getElementsByTagName('tbody')[0];
    let fila = tabla.insertRow();

    let celdaNombre = fila.insertCell(0);
    celdaNombre.innerText = tarea.nombre;

    let celdaTiempoEstimado = fila.insertCell(1);
    celdaTiempoEstimado.innerText = tarea.tiempoEstimado;

    let celdaCronometro = fila.insertCell(2);
    let cronometroDisplay = document.createElement('span');
    cronometroDisplay.innerText = "00:00:00";
    celdaCronometro.appendChild(cronometroDisplay);

    let celdaAcciones = fila.insertCell(3);
    let botonIniciar = document.createElement('button');
    botonIniciar.innerText = "Iniciar";
    botonIniciar.onclick = () => tarea.iniciarCronometro(cronometroDisplay);
    celdaAcciones.appendChild(botonIniciar);

    let botonPausar = document.createElement('button');
    botonPausar.innerText = "Pausar";
    botonPausar.onclick = () => tarea.pausarCronometro();
    celdaAcciones.appendChild(botonPausar);
}

/**
 * LAB 05 
 * 
 * DESCRIBE MATERIAL DESIGN
 * 
 * Material design es un sistema para diseñar interfaces, que intenta imitar materiales del mundo real
 * como lo es el papel o la tinta, es como si fueran varias capas de papel que estan apiladas, cada capa tiene sombra
 * o puede ser manipulada. Material desing ayuda a crear una interfaz mas intuitiva, ordenada y facil de usar, inspirandose
 * en elementos que el usuario ya conoce
 */