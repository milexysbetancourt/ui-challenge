// Componente principal

import React, {Component} from 'react';

// Se importa del archivo data la información a mostrar para cada Card, incluyendo el Custom Card.
// De esta manera si se necesita agregar nuevos Card o cambiar la información que muestran
// solo se debe editar este archivo
import data from '../data';

//Se importa el Componente UI Slider
import Slider from './Slider';

class SliderContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      sizes: data.sizes,            // Se obtiene la cantidad de Cards a mostrar, incluyendo textos y estilos 
      customSize: data.customSize,  // Se obtiene la información del Card Customizable, incluyendo 
                                    // su id requerido para posteriores validaciones
      
      position: 0,                  // Posición inicial del slider
      
      activeCard: -1,               // Variable utilizada para guardar el id del Card seleccionado
      
      activeCustomCard: false,      // Flag utilizado para mostrar o no los inputs Width y Height

      disabledButton: true,         // Flag utilizado para habilitar el botón Done
      
      form: {                       // Objeto que guarda los valores de los inputs del formulario
        width: '',
        height: '',
      },

      errorMessage: '',             // Variable utilizada para mostrar mensaje de error si se ingresan valores no permitidos

      hideArrow: 'left'             // Flag utilizado para mostrar un solo Arrow del Slider en un mismo momento
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

  // Funcion utilizada para validar los campos Width - Height
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

  // Funcion encargada de obtener los valores ingresados en el formulario
  handleChange = e => { 
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    }, () => {
      // Luego de actualizar el estado se llama el callback para realizar las validaciones
      // Se realiza como un callback para asegurar que se realice la validación cuando el estado ya esté actualizado
      this.validateForm();  
    }); 
  }


  // Función que se activa al dar click al botón Done
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
  };

  // Función qque se activa cuando se da click a un Card
  handleSelectedCard = (index) => {
    
    this.setState({
      activeCard: index,
      form: {     // Se limpia el formulario para evitar mostrar valores antiguos al volver a seleccionar el Custom Card
        width: '',
        height: ''
      },
      errorMessage: ''
    });

    // Si el Custom Card fue el seleccionado, se activa el formulario
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
      // Componente UI
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
