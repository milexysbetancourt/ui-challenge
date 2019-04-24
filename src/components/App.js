import React, {Component} from 'react';
import './styles/App.scss';

import data from '../dataLayouts';

import Card from './Card';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      layouts: data
    }
  }
  
  render() {
  
    return (
      <div className="App">
        {
          this.state.layouts.map( layout => 
            <Card key={layout.index} layout={layout} />
          )
        }
      </div>
    );
  }
}

export default App;
