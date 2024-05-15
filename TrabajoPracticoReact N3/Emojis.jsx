import React, { useState } from 'react';

function EmojiGenerator() {
  const [emoji, setEmoji] = useState(''); // Estado inicial: sin emoji

  const getRandomEmoji = () => {
    // Lista de emojis
    const emojis = ['😀', '😎', '😊', '🥳', '😸', '🚀', '🎉', '💡', '🌈', '🍕', '♿'];

    // Obtener un emoji aleatorio
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];

    // Actualizar el estado con el emoji aleatorio
    setEmoji(randomEmoji);
  };

  return (
    <div>
      <h2 className='contador'>Emojis</h2>
      <div className='emojis' style={{ fontSize: '4em', textAlign: 'center' }}>{emoji}</div>
      <button className='botondeemoji' onClick={getRandomEmoji}>Mostrar Emoji</button>
    </div>
  );
}

export default EmojiGenerator;
