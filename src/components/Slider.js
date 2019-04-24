import React, {Component} from 'react';
import './styles/Slider.scss';

import data from '../data';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Card from './Card';
import CustomCard from './CustomCard';
import CustomForm from './CustomForm';


class Slider extends Component {

  constructor(props){
    super(props);
    this.state = {
      sizes: data.sizes,
      customSize: data.customSize,
      position: 0,
      activeCard: -1,
      activeCustomCard: false
    }
  }

  handleLeftArrow = () => {
    this.setState({
      position: 0
    });
  }
  
  handleRightArrow = () => {
    this.setState({
      position: 30
    });
  } 

  handleSelectedCard = (index) => {
    
    this.setState({
      activeCard: index
    })

    if (index === this.state.customSize.index) {
      this.state.activeCustomCard = true;
    }
    else {
      this.state.activeCustomCard = false;
      const msj = `Card ${index} selected`;
      alert(msj);
    }
  }

  render() {
  
    return (
      <div className="Slider">
        <h4>MURAL SIZE</h4>
        <LeftArrow handleClick={this.handleLeftArrow}/>
        <div className="wrapper" style={{'transform': `translateX(-${this.state.position}%)`}}>
          {
            this.state.sizes.map( size => 
              <Card 
                key={size.index} 
                size={size} 
                handleClick={this.handleSelectedCard} 
                isActive={size.index === this.state.activeCard}/>
            )
          }
          <CustomCard 
            customSize={this.state.customSize}
            handleClick={this.handleSelectedCard} 
            isActive={this.state.customSize.index === this.state.activeCard}  
          />
        </div>
        <RightArrow handleClick={this.handleRightArrow}/>

        <CustomForm activeSizeInput={this.state.activeCustomCard}/>
      </div>
    );
  }
}

export default Slider;
