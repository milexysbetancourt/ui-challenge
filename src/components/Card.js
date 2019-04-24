import React from 'react';

import './styles/Card.scss';

const Card = ({size}) => {
  
  const {index, shortName, name, description, styles} = size;
  
  return (
    <div className="Card" id={index}>
      <div className="Mural-size">
        <div style={styles} >
          <p>{shortName}</p>
        </div>
      </div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  )
}

export default Card;
