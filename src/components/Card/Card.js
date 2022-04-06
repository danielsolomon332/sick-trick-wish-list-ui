import React from 'react';
import './Card.css';

const Card = ({ stance, name, obstacle, tutorial, id}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <h3>{stance}</h3>
      <p>{obstacle}</p>
      <section>{tutorial}</section>
    </div>
  )
}

export default Card;
