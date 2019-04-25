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
      activeCustomCard: false,
      disabledButton: true,
      form: {
        width: '',
        height: '',
      },
      errorMessage: ''
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

  validateForm = () => {
   
    const width = Number(this.state.form.width);
    const height = Number(this.state.form.height);
  
    if (width && (width < 3000 || width > 60000)) {
      this.setState({
        disabledButton: true,
        errorMessage: 'Width value not valid'
      });
    } else if (height && (height < 3000 || height > 60000)) {
      this.setState({
        disabledButton: true,
        errorMessage: 'Height value not valid'
      });
    } else {
      this.setState({
        disabledButton: false,
        errorMessage: ''
      });
    }
  }

  handleChange = e => { 
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    }, () => {
      this.validateForm();  
    }); 
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
  };

  handleSelectedCard = (index) => {
    
    this.setState({
      activeCard: index
    });

    if (index === this.state.customSize.index) {
      this.setState({
        activeCustomCard: true,
        disabledButton: true
      });
    }
    else {
      this.setState({
        activeCustomCard: false,
        disabledButton: false
      });
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

        <CustomForm 
          activeCard={this.state.activeCustomCard}
          disabledButton={this.state.disabledButton}
          form={this.state.form}
          onChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errorMessage={this.state.errorMessage}/>
      </div>
    );
  }
}

export default Slider;
