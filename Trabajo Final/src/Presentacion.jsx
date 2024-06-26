import React from 'react';

const Presentation = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center bg-white shadow-md p-6 rounded-lg">
      <div className="w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0">
        <img
          src="src/images/foto.jpeg"
          alt="Tu Foto"
          className="w-full h-full object-cover rounded-full shadow-md"
        />
      </div>
      <br />
      <div className="md:ml-6 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">Thomas Reynoso</h1>
        <p>
  Soy fotógrafo y estudiante de Front End. 
  Apasionado por capturar momentos únicos y crear experiencias digitales. 
  Siempre en busca de nuevas oportunidades para aprender, crecer y adquirir mejores experiencias.
</p>
      </div>
    </div>
    <br />
    </>
  );
};

export default Presentation;


