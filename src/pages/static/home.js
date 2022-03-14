/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from "react";
import PropTypes from "prop-types";
import swal from "sweetalert";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "gatsby";
import BDAD from "../../json/BD.json";

// Import pages
import RegMix from "../../pageComponents/RegMix";
import CContinue from "../../pageComponents/CContinue";

// Local Images
import github from "../../images/Arfizato.png";

/* -------------------------------------------------------------------------- */
/*                              whatever this is                              */
/* -------------------------------------------------------------------------- */

const mainColor = "#660020";

const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: ${mainColor};
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    text-align: center;
    font-size: 1.5em;
`;

const IndexList = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
`;
const ListItem = styled.div`
    font-size: 1.75em;
    text-align: center;
    color: ${mainColor};
    width: 200px;
    padding: 20px 0;
    
    transition: width 2s ;

  .listLink{
    color: ${mainColor};
    text-decoration: none;
    width: 200px;
  }
  &:hover{
    width: 45%;
    background-color: ${mainColor};
    .listLink{
      width: 100%;
      color: #fff;
    }}
  `;

function Home() {
    // console.log(BDAD[2]);
    /* ******************************** RENDERING ******************************* */
    return (
        <>
            <Helmet title="Home" defer={false} />

            <Wrapper>
                <Title>Hello Peeps!</Title>
                The Website is under construction 👷.<br></br> You can visit the
                pages below ⬇
            </Wrapper>
            <IndexList>
                <ListItem>
                    <Link className="listLink" to="/static/BD">
                        Big Data
                    </Link>
                </ListItem>
                <ListItem>
                    <Link className="listLink" to="/static/CM">
                        CM
                    </Link>
                </ListItem>
                <ListItem>
                    <Link className="listLink" to="/static/IM">
                        IM
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        className="listLink"
                        state={{ sem: BDAD[4] }}
                        to="/dynamic"
                    >
                        Dynamic
                    </Link>
                </ListItem>
            </IndexList>
        </>
    );
}

export default Home;
