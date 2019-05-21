// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './ErrorsForm.scss';

const ErrorsForm = ({errors}) => (
  <div className='formErrors'>
    {Object.keys(errors).map((fieldName, index) => (errors[fieldName].length
        ? <li key={index}>{fieldName} {errors[fieldName]}</li> : null))
    }
  </div>
);

ErrorsForm.propTypes = {
	errors: PropTypes.object.isRequired
};

export default ErrorsForm;
