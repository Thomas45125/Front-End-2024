// Crear un arreglo vacío para almacenar los números aleatorios
let array = [];

// Llenar el arreglo con 10 números aleatorios
for (let i = 0; i < 10; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Generar un número aleatorio entre 1 y 100
    array.push(numeroAleatorio); // Agregar el número aleatorio al array
}

// Mostrar los números generados junto con su posición en la consola del navegador
console.log("Arrays aleatorios:");
array.forEach((numero, indice) => {
    console.log("Posición " + indice + ": " + numero);
});

let suma = 0;

for (let i = 0; i < array.length; i++) { //se hace un bucle for para sumar todos los numeros aleatorios en total con length para el seleccionamiento de todos los numeros
    suma += array[i];
}

let promedio = suma / array.length; // Calcular el promedio dividiendo la suma entre la cantidad de números generados

// Agregar un nuevo elemento al final del array
let nuevoElemento = Math.floor(Math.random() * 100) + 1;
array.push(nuevoElemento);

// Mostrar el arreglo original en la pantalla
let arrayOriginal = document.getElementById('numerosaleatorios');
arrayOriginal.textContent = "Arrays aleatorios: " + array;

// Mostrar la suma total en la pantalla
let sumaElement = document.getElementById('sumatotal');
sumaElement.textContent = "La suma total de los números es: " + suma;

// Mostrar el nuevo elemento agregado al final del array
let nuevoElementoElement = document.getElementById('agregartotal');
nuevoElementoElement.textContent = "Nuevo elemento agregado al final del array: " + nuevoElemento;

// Eliminar el primer elemento del array
array.shift();

// Eliminar el último elemento del array
array.pop();

// Mostrar el arreglo modificado en la pantalla
let arrayModificado = document.getElementById('eliminartotal');
arrayModificado.textContent = "Array después de eliminar el primer y el último elemento: " + array;

// Este código sirve para detectar el número máximo y mínimo del array generado
let max = Math.max(...array);
let min = Math.min(...array);

// Mostrar el máximo y el mínimo en la pantalla
let maxMin = document.getElementById('maxymintotal');
maxMin.textContent = "El máximo es: " + max + ". El mínimo es: " + min;

// Ordenar el arreglo de menor a mayor
array.sort((a, b) => a - b);

// Mostrar el arreglo ordenado en la pantalla
let arrayOrdenado = document.getElementById('mayoramenor');
arrayOrdenado.textContent = "Array ordenado de menor a mayor: " + array;

// Mostrar el promedio en la pantalla
let promedioElement = document.getElementById('promediototal');
promedioElement.textContent = "El promedio es: " + promedio;

function recargarPagina() {
    location.reload();
}






// Función para calcular el promedio de las notas
function calcularPromedio() {
    // Obtener los valores de los campos del formulario
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);
    let nota5 = parseFloat(document.getElementById('nota5').value);

    // Verificar si los valores ingresados son números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5)) {
        document.getElementById('mensajeError').textContent = "Por favor, ingrese números válidos en los campos de nota.";
        return; // Detener la ejecución si hay errores
    }

    // Calcular el promedio
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    // Mostrar el resultado del promedio en el documento HTML
    document.getElementById('promedio').textContent = "El promedio de las notas es: " + promedio.toFixed(2);
}

// Capturar el evento de envío del formulario y llamar a la función calcularPromedio
document.getElementById('formularioAlumno').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    document.getElementById('mensajeError').textContent = ""; // Limpiar mensaje de error anterior
    calcularPromedio(); // Calcular el promedio
});
