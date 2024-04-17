// Crear un arreglo vacío para almacenar los números aleatorios
let array = [];

// Llenar el arreglo con 10 números aleatorios
for (let i = 0; i < 10; i++) {
  
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Generar un número aleatorio entre 1 y 100
    
    array.push(numeroAleatorio); // Agregar el número aleatorio al array
}

console.log("Arrays aleatorios: " + array); //mostrar los numeros generados en la pantalla


document.write ("Arrays aleatorios: " + array)