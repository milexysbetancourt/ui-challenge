//Componente creado para los Card que no son customizables

import React from 'react';

import './styles/Card.scss';

const Card = (props) => {
  
  const {index, shortName, name, description, styles} = props.size;
  const className = props.isActive ? "Card Card-active" : "Card";

  return (
    <div 
      className={className}
      id={index} 
      onClick={() => props.handleClick(index)}>
      <div className="Mural-size">

        {/* Se obtiene el tamaño del layout de la data y se actualiza el width y height en base a ello */}
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
