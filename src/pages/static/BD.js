/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
// import React from 'react';
import * as React from "react";
import PropTypes from "prop-types";
import swal from "sweetalert";
import Helmet from "react-helmet";

// Import pages
import RegMix from "../../pageComponents/RegMix";
import CContinue from "../../pageComponents/CContinue";
// Local Images
import github from "../../images/Arfizato.png";

// Style
// TODO: #1 understand why StaticBD is calling StaticCM/index.scss
import "./sass/indexBD.scss";

/* -------------------------------------------------------------------------- */
/*                              whatever this is                              */
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
    let coefSum = 0;
    let errorInput = false;

    for (let a = 0; a < RMArray.length; a++) {
        moy += (DSRM[a] * 0.3 + ExamRM[a] * 0.7) * RMArray[a].coef;
        coefSum += RMArray[a].coef;
        errorInput = verifInput(DSRM[a], ExamRM[a]);
        if (errorInput) {
            break;
        }
    }
    //adding up controle continue
    if (!errorInput) {
        for (let a = 0; a < CCArray.length; a++) {
            moy +=
                (DSCC[a] * 0.2 + DSSCC[a] * 0.4 + CCCC[a] * 0.4) *
                CCArray[a].coef;
            coefSum += CCArray[a].coef;
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

/* ------------------------- Variables and constants ------------------------ */
const RMArray = [
    {
        name: "Proba",
        coef: 2,
    },
    {
        name: "TLA",
        coef: 1,
    },
    {
        name: "Graphe",
        coef: 1,
    },
    {
        name: "UML",
        coef: 1.5,
    },
    {
        name: "Java",
        coef: 2,
    },
    {
        name: "PL/SQL",
        coef: 1.5,
    },
    {
        name: "Reseau",
        coef: 1,
    },
];
const CCArray = [
    {
        name: "English",
        coef: 1,
    },
    {
        name: "Gestion",
        coef: 1,
    },
    {
        name: "SysDis",
        coef: 1.5,
    },
    {
        name: "Cloud",
        coef: 1.5,
    },
];
function StaticBD() {
    /* ******************************** RENDERING ******************************* */

    return (
        <>
            <Helmet title="L2 BDAD SEM1" defer={false} />

            <div className="contentContainer">
                <a
                    href="https://github.com/arfizato/"
                    without
                    rel="noreferrer"
                    target="_blank"
                >
                    <img src={github} alt="" />
                </a>
                {/* <p className="Arfizato">Made By Arfizato</p> */}
            </div>
            <form action={calculate}>
                <div className="BDbigboy">
                    <div className="BDgridContainer">
                        <div className="regimeMixte">
                            {RMArray.map((obj) => (
                                <RegMix data={obj.name} />
                            ))}
                        </div>

                        <div className="controleContinue">
                            {CCArray.map((obj) => (
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
                </div>
            </form>
        </>
    );
}

export default StaticBD;
