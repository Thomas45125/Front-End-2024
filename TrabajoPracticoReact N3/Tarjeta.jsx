import React from 'react';

const Tarjeta = (props) => {
  const { firstName, lastName, profession, description } = props;

  return (
    <div className="business-card">
      <h2 className='nombre'>{firstName} {lastName}</h2>
      <p className='profesion'><strong className='profesionprop'>Profesión:</strong> {profession}</p>
      <p className='data'>{description}</p>
    </div>
  );
};

export default Tarjeta;




