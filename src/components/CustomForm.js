import React from 'react';

import './styles/CustomForm.scss';

const CustomForm = () => {
  
  return (
    <div className="CustomForm">
      <form >
        <div>
          <div className="form-group">
            <label>WIDHT (px)</label>
            <input
              /* onChange={this.props.onChange} */
              type="number"
              name="widht"
              /* value={this.props.formValues.firstName} */
            />
          </div>
          
          <div className="form-group">
          
            <label>HEIGHT (px)</label>
            <input
              /* onChange={this.props.onChange} */
              type="number"
              name="widht"
              /* value={this.props.formValues.firstName} */
            />
          </div>
        </div>
        
        <button className="">
          DONE
        </button>
      </form>
      </div>
  )
}

export default CustomForm;
