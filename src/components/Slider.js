import React, {Component} from 'react';
import './styles/Slider.scss';

import data from '../dataLayouts';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Card from './Card';


class Slider extends Component {

  constructor(props){
    super(props);
    this.state = {
      layouts: data,
      value: 0
    }
  }

  handleLeftArrow = () => {
    this.setState({
      value: 0
    });
  }
  
  handleRightArrow = () => {
    this.setState({
      value: 18
    });
  }


  render() {
  
    return (
      <div className="Slider">
        <LeftArrow handleClick={this.handleLeftArrow}/>
        <div className="wrapper" style={{'transform': `translateX(-${this.state.value}%)`}}>
          {
            this.state.layouts.map( layout => 
              <Card key={layout.index} layout={layout} />
            )
          }
        </div>
        <RightArrow handleClick={this.handleRightArrow}/>
      </div>
    );
  }
}

export default Slider;
