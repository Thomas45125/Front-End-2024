import React, { useState } from 'react';

function Adivinanza() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(generarNumeroAleatorio());
  const [adivinanza, setAdivinanza] = useState('');
  const [mensaje, setMensaje] = useState('');

  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function handleChange(event) {
    setAdivinanza(event.target.value);
  }

  function verificarAdivinanza() {
    const numeroUsuario = parseInt(adivinanza);
    if (isNaN(numeroUsuario)) {
      setMensaje('Por favor, introduce un número válido 🤔');
    } else if (numeroUsuario === numeroAleatorio) {
      setMensaje('Felicidades, adivinaste');
      setNumeroAleatorio(generarNumeroAleatorio()); // Generar un nuevo número aleatorio
    } else if (numeroUsuario < numeroAleatorio) {
      setMensaje('El numero secreto es mas alto');
    } else {
      setMensaje('El numero secreto es mas chico');
    }
  }

  return (
    <div>
      <h2 className='contador'>Adivinanza</h2>
      <p className='intenta'>Intenta adivinar el número entre 1 y 10:</p>
      <input className='input' type="number" value={adivinanza} onChange={handleChange} />
      <button className='botondeadivinar' onClick={verificarAdivinanza}>Verificar</button>
      <p className='resultado'>{mensaje}</p>
    </div>
  );
}

export default Adivinanza;
