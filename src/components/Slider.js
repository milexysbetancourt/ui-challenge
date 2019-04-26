import React from 'react';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import Card from './Card';
import CustomCard from './CustomCard';
import CustomForm from './CustomForm';

import './styles/Slider.scss';

function Slider (props) {
  return (
     <div className="Slider">
        <h4>MURAL SIZE</h4>
        {props.slider.hideArrow !== 'left' &&
          <LeftArrow handleClick={props.handleLeftArrow}/>
        }
        <div className="wrapper" style={{'transform': `translateX(-${props.slider.position}%)`}}>
          {
            props.slider.sizes.map( size => 
              <Card 
                key={size.index} 
                size={size} 
                handleClick={props.handleSelectedCard} 
                isActive={size.index === props.slider.activeCard}/>
            )
          }
          <CustomCard 
            customSize={props.slider.customSize}
            handleClick={props.handleSelectedCard} 
            isActive={props.slider.customSize.index === props.slider.activeCard}  
          />
        </div>
        {props.slider.hideArrow !== 'rigth' &&
          <RightArrow handleClick={props.handleRightArrow}/>
        }

        <CustomForm 
          activeCard={props.slider.activeCustomCard}
          disabledButton={props.slider.disabledButton}
          form={props.slider.form}
          onChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          errorMessage={props.slider.errorMessage}/>
      </div>
  )

}

export default Slider;