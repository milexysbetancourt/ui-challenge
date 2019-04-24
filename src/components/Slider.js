import React, {Component} from 'react';
import './styles/Slider.scss';

import data from '../data';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Card from './Card';
import CustomCard from './CustomCard';

class Slider extends Component {

  constructor(props){
    super(props);
    this.state = {
      sizes: data.sizes,
      customSize: data.customSize,
      position: 0
    }
  }

  handleLeftArrow = () => {
    this.setState({
      position: 0
    });
  }
  
  handleRightArrow = () => {
    this.setState({
      position: 47
    });
  }

  render() {
  
    return (
      <div className="Slider">
        <LeftArrow handleClick={this.handleLeftArrow}/>
        <div className="wrapper" style={{'transform': `translateX(-${this.state.position}%)`}}>
          {
            this.state.sizes.map( size => 
              <Card key={size.index} size={size} />
            )
          }
          <CustomCard customSize={this.state.customSize}/>
        </div>
        <RightArrow handleClick={this.handleRightArrow}/>
      </div>
    );
  }
}

export default Slider;
