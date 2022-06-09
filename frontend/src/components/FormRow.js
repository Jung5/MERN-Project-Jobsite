import React from 'react';

const FormRow = () => {
    return (
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={values}
            name="name"
            onChange={handleChange}
            className="form-input"
          />
        </div>
    );
};

export default FormRow;