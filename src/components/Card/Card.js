import React from 'react';
import './Card.css';

const Card = ({ stance, name, obstacle, tutorial, id}) => {
  return (
    <div className='card'>
      <h2>Trick Name: {name}</h2>
      <h3>Stance Name: {stance}</h3>
      <p>Obstacle: {obstacle}</p>
      <section>Tutorial Link: {tutorial}</section>
    </div>
  )
}

export default Card;
