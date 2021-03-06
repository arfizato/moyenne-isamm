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
  // const {name, coef} = data;
  /* ******************************** RENDERING ******************************* */
  return (
    <>    
      <span className="label">{data}</span>
      <input type="number" min="0" max="20" name="" placeholder="Ds1" id="" className="cc1" />
      <input type="number" min="0" max="20" name="" placeholder="Ds2" id="" className="cc2" />
      <input type="number" min="0" max="20" name="" placeholder="CC" id="" className="cc3" />
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
