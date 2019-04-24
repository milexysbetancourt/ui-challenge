import React from 'react';

import './styles/Card.scss';
import icon from './styles/custom-size-icon.svg';

const CustomCard = ({customSize}) => {
  
  const {index, name, styles} = customSize;
  
  return (
    <div className="Card" id={index}>
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
