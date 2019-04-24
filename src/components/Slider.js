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
      layouts: data
    }
  }
  
  render() {
  
    return (
      <div className="Slider">
        <LeftArrow />
        <div className="wrapper">
          {
            this.state.layouts.map( layout => 
              <Card key={layout.index} layout={layout} />
            )
          }
        </div>
        <RightArrow />
      </div>
    );
  }
}

export default Slider;
