// Componente principal

import React, {Component} from 'react';

// Se importa del archivo data la información a mostrar para cada Card, incluyendo el Custom Card.
// De esta manera si se necesita agregar nuevos Card o cambiar la información que muestran,
// solo se debe editar este archivo
import data from '../data';

import Slider from './Slider';

class SliderContainer extends Component {

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
      errorMessage: '',
      hideArrow: 'left'
    }
  }

  handleLeftArrow = () => {
    this.setState({
      position: 0,
      hideArrow: 'left'
    });
  }
  
  handleRightArrow = () => {
    this.setState({
      position: 30,
      hideArrow: 'rigth'
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
      activeCard: index,
      form: {
        width: '',
        height: ''
      },
      errorMessage: ''
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
      <Slider 
        slider={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleRightArrow={this.handleRightArrow}
        handleSelectedCard={this.handleSelectedCard}
        handleLeftArrow={this.handleLeftArrow}
      />
    );
  }
}

export default SliderContainer;
