// Componente creado para el formulario
// Incluye los inputs para el Custom Card y el botón Done
// Las validaciones del formulario se realizan en el Componente principal SliderContainer

import React from 'react';

import './styles/CustomForm.scss';

const CustomForm = (props) => {
  return (
    <div className="CustomForm">

      <form onSubmit={props.handleSubmit}>
        {props.activeCard &&
          <div>
            <div className="form-group">
              <label>WIDTH (px)</label>
              <input
                onChange={props.onChange}
                type="number"
                name="width"
                value={props.form.width}/>
            </div>
            
            <div className="form-group">
            
              <label>HEIGHT (px)</label>
              <input
                onChange={props.onChange}
                type="number"
                name="height"
                value={props.form.height}/>
            </div>
            <div className="error">
              {props.errorMessage}
            </div>
          </div>
        }
        <button disabled={props.disabledButton} className="">
          DONE
        </button>
      </form>
    </div>
  )
}

export default CustomForm;
