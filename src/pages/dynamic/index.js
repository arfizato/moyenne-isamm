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
import RegMix from "../../pageComponents/RegMix";
import CContinue from "../../pageComponents/CContinue";
import ContentContainer from "../../pageComponents/contentContainer.js";

/* -------------------------------------------------------------------------- */
/*                              whatever this is                              */
/* -------------------------------------------------------------------------- */

function Dynamic({ location }) {
  /* -------------------------------------------------------------------------- */
  /*                             External Functions                             */
  /* -------------------------------------------------------------------------- */
  function verifInput(x, y, z = 1) {
    if (x === "" || y === "" || z === "") {
      swal({
        title: "Error In Input",
        text: "Famma case ma 3abit'hech",
        icon: "error",
        buttons: "sama7ni taw nsala7ha",
      });
      return true;
    } else if (x > 20 || y > 20 || z > 20) {
      swal({
        title: "Error In Input",
        text: "3andek chkoun fi bledek yekhou akther mel 20?",
        icon: "error",
        buttons: "sama7ni taw nsala7ha",
      });
      return true;
    }
    if (x < 0 || y < 0 || z < 0) {
      swal({
        title: "Error In Input",
        text: "taw le3ebha mdak 7atet note a9al men 0?",
        icon: "error",
        buttons: "sama7ni taw nsala7ha",
      });
      return true;
    }
  
    return false;
  }
  
  function calculate() {
    /* ------------------------------ Regime mixte ------------------------------ */
    let tempArray = document.getElementsByClassName("test1");
    const DSRM = [];
    for (let i = 0; i < tempArray.length; i++) {
      DSRM.push(tempArray[i].value);
    }
    tempArray = document.getElementsByClassName("test2");
    const ExamRM = [];
    for (let i = 0; i < tempArray.length; i++) {
      ExamRM.push(tempArray[i].value);
    }
  
    /* ---------------------------- controle continue --------------------------- */
    tempArray = document.getElementsByClassName("cc1"); // DS1
    const DSCC = [];
    for (let i = 0; i < tempArray.length; i++) {
      DSCC.push(tempArray[i].value);
    }
    tempArray = document.getElementsByClassName("cc2"); //DS2
    const DSSCC = [];
    for (let i = 0; i < tempArray.length; i++) {
      DSSCC.push(tempArray[i].value);
    }
    tempArray = document.getElementsByClassName("cc3"); //CC
    const CCCC = [];
    for (let i = 0; i < tempArray.length; i++) {
      CCCC.push(tempArray[i].value);
    }
    /* --------------------------- Calculating Moyene --------------------------- */
    //adding up Regime mixte
    let moy = 0;
    let coefSum=0;
    let errorInput = false;
  
    for (let a = 0; a < location.state.sem.RMArray.length; a++) {
      moy += (DSRM[a] * 0.3 + ExamRM[a] * 0.7) * location.state.sem.RMArray[a].coef;
      coefSum+=location.state.sem.RMArray[a].coef;
      errorInput = verifInput(DSRM[a], ExamRM[a]);
      if (errorInput) {
        break;
      }
    }
    //adding up controle continue
    if (!errorInput){
      for (let a = 0; a < location.state.sem.CCArray.length; a++) {
          moy += (DSCC[a] * 0.2 + DSSCC[a] * 0.4 + CCCC[a] * 0.4) * location.state.sem.CCArray[a].coef;
          coefSum+=location.state.sem.CCArray[a].coef;
      errorInput = verifInput(DSCC[a], DSSCC[a], CCCC[a]);
          if (errorInput) {
          break;
          }
      }
    }
    
    moy = moy / coefSum;
    /* ----------------------------- printing result ---------------------------- */
    if (moy < 10 && !errorInput) {
      swal({
        title: "Lmarra Jeya Nchlh 😋",
        text: `moyennek: ${moy}`,
        icon: "warning",
        buttons: "la trab7ek",
      });
    } else if (!errorInput) {
      swal({
        title: "Nja7t😀!",
        text: `moyennek: ${moy}`,
        icon: "success",
        buttons: "yar7am bouk",
      });
    }
  }
/* ---------------------------- Styled Components --------------------------- */
const mainColor= location.state.sem.color.main;
const secondColor=location.state.sem.color.second;
console.log(secondColor);
const BigBoy = styled.div`
/* background-color:red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100vh;
    .BDgridContainer {
        display: grid;
        width: 50%;
        min-width: 250px;
        height: 50%;
        grid-template: ${location.state.sem.RMArray.length}fr ${location.state.sem.CCArray.length}fr / 1fr;
        row-gap: 20px;
        background:${mainColor};
        background: linear-gradient(
            0deg,
           ${mainColor} 0%,
            ${secondColor} 100%
        );
        padding: 5em;
        border-radius: 85% 10% 85% 10% / 10% 76% 10% 76%;
        color: #ffffff;

        .regimeMixte {
            display: grid;
            grid-template: repeat(${location.state.sem.RMArray.length}, 1fr) / 10em repeat(2, 3fr);
            // row-gap: 5px;
            // gap: 5px 40px;
        }
        .controleContinue {
            display: grid;
            grid-template: repeat(${location.state.sem.CCArray.length}, 1fr) / 10em repeat(3, 2fr);
            // row-gap: 5px;
        }
        .controleContinue,
        .regimeMixte {
            gap: 0.2em 1em;
        }
        input {
            border-radius: 4% 96% 4% 96% / 96% 4% 96% 4%;
            background-color: #daf5ff42;
            border: 0;
            text-align: center;
            color: #ffffff;
            scroll-behavior: none;
            &::placeholder {
                color: #cccccc;
            }
            &:focus {
                border: 2px solid #fff;
                outline: none;
            }
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                appearance: none;
                margin: 0;
            }
        }
    }
    .buttonn {
        font-family: "Poppins", sans-serif;
        margin: 20px;
        width: 130px;
        height: 40px;
        color: #fff;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: "Lato", sans-serif;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
            7px 7px 20px 0px rgba(0, 0, 0, 0.1),
            4px 4px 5px 0px rgba(0, 0, 0, 0.1);
        outline: none;
    }

    .btn-3 {
        background:${mainColor};
        background: linear-gradient(
            0deg,
           ${mainColor} 0%,
            ${secondColor} 100%
        );
        width: 130px;
        height: 40px;
        line-height: 42px;
        padding: 0;
        border: none;
        span {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
        }
        &:before,
        &:after {
            position: absolute;
            content: "";
            right: 0;
            top: 0;
            background: ${secondColor};
            transition: all 0.3s ease;
        }
        &:before {
            height: 0%;
            width: 2px;
        }
        &:after {
            width: 0%;
            height: 2px;
        }
        &:hover {
            background: transparent;
            box-shadow: none;
        }
        &:hover:before {
            height: 100%;
        }
        &:hover:after {
            width: 100%;
        }
        span:hover {
            color: ${secondColor};
        }
        span:before,
        span:after {
            position: absolute;
            content: "";
            left: 0;
            bottom: 0;
            background: ${secondColor};
            transition: all 0.3s ease;
        }
        span:before {
            width: 2px;
            height: 0%;
        }
        span:after {
            width: 0%;
            height: 2px;
        }
        span:hover:before {
            height: 100%;
        }
        span:hover:after {
            width: 100%;
        }
    }
`;

    /* ******************************** RENDERING ******************************* */
    console.log( location.state.sem);
    return (
        <>
            <Helmet title={location.state.sem.name} defer={false} />
            <ContentContainer></ContentContainer>

            <BigBoy>
                <div className="BDgridContainer">
                    <div className="regimeMixte">
                        {location.state.sem.RMArray.map((obj) => (
                            <RegMix data={obj.name} />
                        ))}
                    </div>

                    <div className="controleContinue">
                        {location.state.sem.CCArray.map((obj) => (
                            <CContinue data={obj.name} />
                        ))}
                    </div>
                </div>
                <button
                    className="btn-3 buttonn"
                    onClick={calculate}
                    type="button"
                >
                    <span>Submit</span>
                </button>
            </BigBoy>
        </>
    );
}
export default Dynamic;