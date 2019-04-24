import React from 'react';

import './styles/CustomForm.scss';

const CustomForm = ( props ) => {
  
  return (
    <div className="CustomForm">
      <form >
        {props.activeSizeInput &&
          <div>
            <div className="form-group">
              <label>WIDHT (px)</label>
              <input
                onChange={() => props.handleValidation}
                type="number"
                name="widht"
                value={props.formValues.widht}
              />
            </div>
            
            <div className="form-group">
            
              <label>HEIGHT (px)</label>
              <input
                onChange={() => props.handleValidation}
                type="number"
                name="heigth"
                value={props.formValues.heigth}
              />
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
