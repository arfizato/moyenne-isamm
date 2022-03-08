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


function CContinue({ data}) {
  /* ------------------------- Variables and constants ------------------------ */
  const {name, coef} = data;
  /* ******************************** RENDERING ******************************* */
  return (
    <>    
      <span className="label">{name}</span>
      <input type="number" name="" placeholder="Ds1" id="" className="test1" />
      <input type="number" name="" placeholder="Ds2" id="" className="test2" />
      <input type="number" name="" placeholder="CC" id="" className="test3" />
  </>
  );
}

CContinue.propTypes = {
  data: PropTypes.objectOf({
    name: PropTypes.string,
    coef: PropTypes.string,
  }).isRequired,
};
export default CContinue;
