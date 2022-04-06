import React from 'react'
import Card from '../Card/Card'
import './Tricks.css'

const Tricks = ({ tricks }) => {

  const trickCards = tricks.map(trick => {
    return (
      <Card
      stance={tricks.stance}
      name={tricks.name}
      obstacle={tricks.obstacle}
      tutorial={tricks.tutorial}
      id={tricks.id}
      key={tricks.id}
      />
    )
  })

  return (
    <div className='tricks-container'>
      {trickCards}
    </div>
  )
}

export default Tricks;
