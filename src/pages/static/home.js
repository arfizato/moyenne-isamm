/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from "react";
// import PropTypes from "prop-types";
import swal from "sweetalert";
import Helmet from "react-helmet";
import styled from "styled-components";
import KUTE from "kute.js";
// import { Link } from "gatsby";
// import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
// import "@szhsin/react-menu/dist/index.css";
import { useState } from "react";
import { StyledOffCanvas, Menu, Overlay } from "styled-off-canvas";

// Import pages

// Local Images
import Wave from "../../images/wave1.svg";
import Wavee from "../../images/wave2.svg";
import bpPattern from "../../images/blobScatter.svg";
import menuIcon from "../../images/menu.svg";
import { keyframes } from "styled-components";

/* -------------------------------------------------------------------------- */
/*                                Main Content                                */
/* -------------------------------------------------------------------------- */
function Dynamic() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Helmet title="wave" defer={false} />
            <WholePage>
                <StyledOffCanvas
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <button
                        className="menuButton"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <img src={menuIcon} alt="" />
                    </button>

                    <Menu>
                        <ul>
                            {/* <li>
                                <a onClick={() => setIsOpen(false)}>close</a>
                            </li> */}
                            <li>
                                <a href="/static/CM">CM</a>
                            </li>
                            <li>
                                <a href="/static/BD">BD</a>
                            </li>
                            <li>
                                <a href="/static/IM">IM</a>
                            </li>
                            <li>
                                <a href="/static/Test">Test</a>
                            </li>
                            <li>
                                <a href="/">home</a>
                            </li>
                        </ul>
                    </Menu>

                    <Overlay />
                </StyledOffCanvas>

                <Blockboy></Blockboy>
                <WaveContainer>
                    <div class="custom-shape-divider-top-1647714737">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                opacity=".25"
                                class="shape-fill"
                            ></path>
                            <path
                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                opacity=".5"
                                class="shape-fill"
                            ></path>
                            <path
                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                class="shape-fill"
                            ></path>
                        </svg>
                    </div>
                    <svg
                        // style="width: 0; height: 0; position: absolute"
                        aria-hidden="true"
                        focusable="false"
                        className="gradientSVG"
                    >
                        <linearGradient id="grad">
                            <stop offset="0%" stop-color="#00acee" />
                            <stop offset="100%" stop-color="#027efb" />
                        </linearGradient>
                    </svg>
                </WaveContainer>
                <Bg srcSet={bpPattern}></Bg>
            </WholePage>
        </>
    );
}
export default Dynamic;
/* ---------------------------- Styled Components --------------------------- */
const dawarni = keyframes`
    from{ transform: rotate(0deg);}
    to{ transform: rotate(360deg);}
`
const WholePage = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .menuButton{
        position: fixed;
        top: 20px;
        right:20px;
        width: 50px;
        height: 50px;
        background-color: transparent;
        border:none;
        img{

            &:hover{
                animation: ${dawarni} .5s 1 ease-out;
                cursor: crosshair;
            }
        }
        }
        `;
const Bg = styled.img`
    width: 100%;
    height: auto;
    min-height: 500px;
    position: absolute;
    z-index: -1;
`;
const Blockboy = styled.div`
    /* position: relative; */
    width: 100%;
    height: 60%;
    background: #00acee;
    background: linear-gradient(90deg, #00acee 0%, #027efb 100%);
`;
const WaveContainer = styled.div`
    position: relative;
    .custom-shape-divider-top-1647714737 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-top-1647714737 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 150px;
        @media screen and (max-width: 649px) {
            height: 100px;
        }
    }

    .custom-shape-divider-top-1647714737 .shape-fill {
        fill: url("#grad") #00acee;
    }
    .gradientSVG {
        width: 0;
        height: 0;
        position: absolute;
        background-color: red;
    }
`;
/* -------------------------------------------------------------------------- */
/*                             External Functions                             */
/* -------------------------------------------------------------------------- */
