// Componente creado solo para el Custom Card
// Preferí separarlo como otro componente para evitar confusiones de validaciones
// y hacer el código mas legible

import React from 'react';

import icon from '../assets/custom-size-icon.svg';

import './styles/Card.scss';

const CustomCard = (props) => {
  
  const {index, name, styles} = props.customSize;
  const className = props.isActive ? "Card Card-active" : "Card";

  return (
    <div 
      className={className}
      id={index}
      onClick={() => props.handleClick(index)}>
      <div className="Mural-size">
        <div style={styles} >
        <img src={icon} className="" alt="custom-size" />
        </div>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default CustomCard;
