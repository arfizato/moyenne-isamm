/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from "react";
// import PropTypes from "prop-types";
import swal from "sweetalert";
import Helmet from "react-helmet";
import styled from "styled-components";
// import { Link } from "gatsby";
// import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
// import "@szhsin/react-menu/dist/index.css";

// Page Components
import RegMix from "../../../pageComponents/RegMix";
import CContinue from "../../../pageComponents/CContinue";
import ContentContainer from "../../../pageComponents/contentContainer.js";

/* -------------------------------------------------------------------------- */
/*                              whatever this is                              */
/* -------------------------------------------------------------------------- */

function Dynamic({ location, num }) {
  if (!location || !location.state) {
    return null;
  }
  /* -------------------------------------------------------------------------- */
  /*                             External Functions                             */
  /* -------------------------------------------------------------------------- */
/* ---------------------------- Styled Components --------------------------- */


    /* ******************************** RENDERING ******************************* */
    return (
        <>
            <Helmet title={num} defer={false} />
            <ContentContainer></ContentContainer>
            <div>{num}</div>

        </>
    );
}
export default Dynamic;