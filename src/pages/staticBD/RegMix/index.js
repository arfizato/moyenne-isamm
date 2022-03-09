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
  // const name = data.name;
  /* ******************************** RENDERING ******************************* */
  return (
    <>    
      <span className="label">{data}</span>
      <input type="number" min="0" max="20" name="" placeholder="Ds" id="" className="test1" />
      <input type="number" min="0" max="20" name="" placeholder="Exam" id="" className="test2" />
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
