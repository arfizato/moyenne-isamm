/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from "react";
import PropTypes from "prop-types";

// Page Imports


/* -------------------------------------------------------------------------- */
/*                              whatever this is                              */
/* -------------------------------------------------------------------------- */


function RegMix({ data}) {
  /* ------------------------- Variables and constants ------------------------ */
  const {name, coef} = data;
  /* ******************************** RENDERING ******************************* */
  return (
    <>    
      <span className="label">{name}</span>
      <input type="number" name="" placeholder="Ds" id="" className="test1" />
      <input type="number" name="" placeholder="Exam" id="" className="test2" />
  </>
  );
}

RegMix.propTypes = {
  data: PropTypes.objectOf({
    name: PropTypes.string,
    coef: PropTypes.string,
  }).isRequired,
};
export default RegMix;