import React, { useState } from 'react';

function ColorGenerator() {
  const [color, setColor] = useState('#ffffff'); // Estado inicial: color blanco

  const getRandomColor = () => {
    // Generar un color aleatorio en formato hexadecimal
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div>
      <h2 className='contador'>Generador de Colores</h2>
      <div className='cuadrado'
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          margin: '60px auto',
          marginLeft: '600px'
        }}
      ></div>
      <button className="botondecolor" onClick={getRandomColor}>Generar Color</button>
    </div>
  );
}

export default ColorGenerator;
