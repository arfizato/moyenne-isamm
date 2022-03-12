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
    font-size:1.5em;
  `;

  const IndexList = styled.ul`
    display: inline;
  `;
  const ListLink = styled.a`
    text-decoration: none;
  `;
  const ListItem = styled.li`
    font-size: 1.75em;
    text-align: center;
    color: ${mainColor};
  `;

function Home() {
  /* ******************************** RENDERING ******************************* */

  return (
    <>
      <Helmet title="Home" defer={false} />

      <Wrapper>
        <Title>Hello Peeps!</Title>
        The Website is under construction 👷.<br></br> You can visit the pages below ⬇
        
      </Wrapper>
      <IndexList>
        <ListItem>
          <Link to="/static/BD">Big Data</Link>
        </ListItem>
        <ListItem>
          <Link to="/static/CM">CM</Link>
        </ListItem>
        <ListItem>
          <Link to="/static/IM">IM</Link>
        </ListItem>
      </IndexList>
    </>
  );
}

export default Home;
