/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
// import React from 'react';
import * as React from "react";
import PropTypes from "prop-types";

// Import pages
    import RegMix from "./RegMix";
    import CContinue from "./CContinue";

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                              whatever this is                              */
/* -------------------------------------------------------------------------- */

function calculate() {
    /* ------------------------------ Regime mixte ------------------------------ */
    let tempArray =  document.getElementsByClassName("test1") ;
    const DSRM = [];
    for (let i =0;i<tempArray.length;i++){
        DSRM.push(tempArray[i].value);
    }
    tempArray =  document.getElementsByClassName("test2") ;
    const ExamRM = [];
    for (let i =0;i<tempArray.length;i++){
        ExamRM.push(tempArray[i].value);
    }
    //adding
    let moy=0;
    for (let a=0;a<RMArray.length;a++){
        moy+= (DSRM[a]*0.3 + ExamRM[a]*0.7) * RMArray[a].coef;
    }
    /* ---------------------------- controle continue --------------------------- */
    tempArray = document.getElementsByClassName("cc1"); // DS1
    const DSCC= [];
    for (let i =0;i<tempArray.length;i++){
        DSCC.push(tempArray[i].value);
    }
    tempArray = document.getElementsByClassName("cc2"); //DS2
    const DSSCC= [];
    for (let i =0;i<tempArray.length;i++){
        DSSCC.push(tempArray[i].value);
    }
    tempArray = document.getElementsByClassName("cc3"); //CC
    const CCCC= [];
    for (let i =0;i<tempArray.length;i++){
        CCCC.push(tempArray[i].value);
    }
    //adding    
    for (let a=0;a<CCArray.length;a++){
        moy+= (DSCC[a]*0.4 +DSSCC[a]*0.4 +CCCC[a]*0.2 ) * CCArray[a].coef;
    }
    moy= moy/15;
    alert("moeyennek"+moy);

}

/* ------------------------- Variables and constants ------------------------ */
  const RMArray= [
      {
          name: "Proba",
          coef: 2
      },
      {
          name: "TLA",
          coef: 1
      },
      {
          name: "Graphe",
          coef: 1
      },
      {
          name: "UML",
          coef: 1.5
      },
      {
          name: "Java",
          coef: 2
      },
      {
          name: "PL/SQL",
          coef: 1.5
      },
      {
          name: "Reseau",
          coef: 1
      },
  ]
  const CCArray= [
      {
          name: "English",
          coef:1
      },
      {
          name: "Gestion",
          coef:1
      },
      {
          name: "SysDis",
          coef:1.5
      },
      {
          name: "Cloud",
          coef:1.5
      },
  ]
function StaticBD() {
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <form action={calculate}>
        <div className="bigboy">
            <div className="gridContainer">
                <div className="regimeMixte">
                    {
                        RMArray.map(obj =>  (
                            <RegMix data={obj.name}/>
                        ))
                    }
                </div>

                <div className="controleContinue">
                    {
                        CCArray.map(obj =>  (
                            <CContinue data={obj.name}/>
                        ))
                    }
                </div>
            </div>
            <button className="btn-3 buttonn" onClick={calculate} type="button" ><span>Submit</span></button>
        </div>
      </form>
    </>
  );
}

export default StaticBD;
