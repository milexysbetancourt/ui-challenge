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
            <div>
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
