// @vendors
import React from 'react';

// @styles
import './Spinner.scss';

const Spinner = () => (
  <div className="spinnerContainer" id="moving-container">
    <div className="spinnerContainer__pokeballContainer">
      <div className="spinnerContainer__pokeball">
        <div className="spinnerContainer__pokeballDetails"></div>
      </div>
    </div>				
  </div>	
);

export default Spinner;
