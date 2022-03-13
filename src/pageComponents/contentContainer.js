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

// Import pages

// Local Images
import github from "../images/Arfizato.png";
import { keyframes } from "styled-components";

/* -------------------------------------------------------------------------- */
/*                                Main Content                                */
/* -------------------------------------------------------------------------- */

function Dynamic() {
    /* ******************************** RENDERING ******************************* */ 
    return (
        <>
            <ContentContainer className="contentContainer">
                <a href="https://github.com/arfizato/"  without rel="noreferrer" target="_blank">
                    <img src={github} alt="" />
                </a>
            </ContentContainer>
        </>
    );
}
export default Dynamic;
/* ---------------------------- Styled Components --------------------------- */
const tnatter = keyframes`
    0%{}
    5%{transform: scale(1.1);}
    10%{transform: scale(1);}
    // to{}
`;
const ContentContainer = styled.div`
    animation: tnatter 4s infinite;
    position: fixed;
    height: 75px;
    width: 15%;
    bottom: 0;
    right: 20px;
    color: #000;
    font-size: 15px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    align-content: center;
    justify-items: end;
    a {
        position: relative;
        width: 75%;
        img {
            width: 100%;
        }
    }
    @media(max-width: 649px ){
        width: 30%;
    }
`;

/* -------------------------------------------------------------------------- */
/*                             External Functions                             */
/* -------------------------------------------------------------------------- */
