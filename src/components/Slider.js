import React, {Component} from 'react';
import './styles/Slider.scss';

import data from '../dataLayouts';

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
        <div className="wrapper">
          {
            this.state.layouts.map( layout => 
              <Card key={layout.index} layout={layout} />
            )
          }
        </div>
      </div>
    );
  }
}

export default Slider;
