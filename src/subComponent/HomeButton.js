import React from 'react'
import styled, {keyframes} from 'styled-components'
import { NavLink } from 'react-router-dom';
import { HomeIcon } from '../components/AllSvg';

// Define multi-color animation
const multiColor = keyframes`
    0% { 
        filter: drop-shadow(0 0 15px #fa3c62);
        background-color: #fa3c62;
     }
    20% { 
        filter: drop-shadow(0 0 15px #3985f6);
        background-color: #3985f6;
    }
    40% { 
        filter: drop-shadow(0 0 15px #50C878); 
        background-color: #50C878;
    }
    60% { 
        filter: drop-shadow(0 0 15px #08E8DE); 
        background-color: #08E8DE;
    }
    80% { 
        filter: drop-shadow(0 0 15px #fb63fb); 
        background-color: #fb63fb;
        }
    100% {
        filter: drop-shadow(0 0 15px #b65afc); 
        background-color: #b65afc;
    }
`;

const Home = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%,0);

    background-color: #FCF6F4;
    padding: 0%.3rem;
    border-radius: 50%;
    border: 1px solid #000;
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    cursor: pointer;

    &:hover {
        animation: ${multiColor} 1.5s infinite alternate;
    }

    &:first-child{
        text-decoration: none;
        color: inherit;
    }
`
export default function HomeButton() {
  return (
    <Home>
        <NavLink to='/'>
            <HomeIcon width={30} height={30} />
        </NavLink>
    </Home>
  )
}
