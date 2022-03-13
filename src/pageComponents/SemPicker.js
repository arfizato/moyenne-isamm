/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from "react";
// import PropTypes from "prop-types";
import swal from "sweetalert";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "gatsby";
// import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
// import "@szhsin/react-menu/dist/index.css";

// Import pages


/* -------------------------------------------------------------------------- */
/*                                Main Content                                */
/* -------------------------------------------------------------------------- */

function SemPicker({data, path }) {
    return (
        <>
            <SemContainer>
                <Link className="semLink" state={{sem: data[1]}} to={path}>Semester 1</Link>
                <Link className="semLink" state={{sem: data[2]}} to={path}>Semester 2</Link>
                <Link className="semLink" state={{sem: data[3]}} to={path}>Semester 3</Link>
                <Link className="semLink" state={{sem: data[4]}} to={path}>Semester 4</Link>
                <Link className="semLink" state={{sem: data[5]}} to={path}>Semester 5</Link>
                <Link className="semLink" state={{sem: data[6]}} to={path}>Semester 6</Link>
            </SemContainer>
        </>
    );
}
export default SemPicker;
/* ---------------------------- Styled Components --------------------------- */
const SemContainer = styled.div`
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr 1fr;
    .semLink{
        overflow-x: clip;
        padding-top: 10px;
        visibility: hidden;
        color: white;
        text-decoration: none;
        &:hover{
            color: #EBAF18;

        }
    }
`;

/* -------------------------------------------------------------------------- */
/*                             External Functions                             */
/* -------------------------------------------------------------------------- */
