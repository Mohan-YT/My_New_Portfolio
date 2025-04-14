import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/boy-five.png'
import { useTypewriter ,Cursor } from 'react-simple-typewriter';
import { mediaMax } from './Themes';

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    width: 60vw;
    height: 55vh;
    display: flex;

    
    background:linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%)bottom,
        linear-gradient(
            to right,
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50%)top;


        background-repeat: no-repeat;
        background-size: 100% 2px;
        border-left: 2px solid ${props => props.theme.body};
        border-right: 2px solid ${props => props.theme.text};
        z-index: 1;

        ${mediaMax(1200)`
          width: 65vw;
        `};

        ${mediaMax(60)`
            width: 65vw;
        `};

        ${mediaMax(50)`
            width: 75vw;
            height: 45vh
            background-size: 100% 2px;
            justify-content:space-between;
            align-items:center;
        `};

        ${mediaMax(40)`
            width: 50vw;
            flex-direction: column;
        `};

        ${mediaMax(30)`
            width: 60vw;
        `};
        ${mediaMax(20)`
            width: 55vw;
        `};

    @media only screen and (max-width: 40em) {
        background: none;
        border: none;
        border-top: 2px solid ${(props) => props.theme.body};
        border-bottom: 2px solid ${(props) => props.theme.text};
        background-image: linear-gradient(
            ${(props) => props.theme.body} 50%,
            ${(props) => props.theme.text} 50%
        ),
        linear-gradient(
            ${(props) => props.theme.body} 50%,
            ${(props) => props.theme.text} 50%
        );
        background-size: 2px 100%;
        background-position: 0 0, 100% 0;
        background-repeat: no-repeat;
    }


`

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .pic{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0%);
        width:fit-content;
        height:fit-content;
    }

    ${mediaMax(90)`
        width:100%;
        .pic{
        width:90%;
        }
    `}

    ${mediaMax(80)`
        width:100%;
        .pic{
        width:82%;
        }
    `}
    ${mediaMax(65)`
        .pic{
        width:95%;
        height:auto;
        }
    `}

    ${mediaMax(50)`
     height: 100%;
      .pic {
        width: 95%;
        height:auto;
       }
    `};

    ${mediaMax(40)`
        height: 50%;
        .pic {
        height: 130%;
        width: 65%; 
        }
    `};

    ${mediaMax(30)`
        .pic { 
        width: 70%; 
        }
    `};

    ${mediaMax(20)`
        .pic {
        width: 85%;
        }
    `};

    `

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 1.5rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem 0;

    & > *:last-child{
        color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
        font-size:calc(0.5em + 1.5vw);
        font-weight:300;

        ${mediaMax(40)`
        font-size: calc(0.5rem + 1vw);
        `};
    }

   ${mediaMax(40)`
         padding: 1rem 1.5rem;
        font-size: calc(1rem + 1.5vw);
   `};



    ${mediaMax(20)`
         padding: 2rem 1rem;

    `};
`

  

export default function HomePage() {

    const [height, setHeight] = useState("55vh");
    useEffect(() => {
        if (window.matchMedia("(max-width: 40em)").matches) {
          setHeight("70vh");
        }
        if (window.matchMedia("(max-width: 30em)").matches) {
          setHeight("67vh");
        }
      },[]);

    //text
const[text] = useTypewriter({
    words : ['Mohan.'],
    loop : true,
    typeSpeed : 100,
    deleteSpeed : 100,
    delaySpeed : 2000
}) 


  return (
    <Box 
        initial={{height:0}}
        animate={{height: height}}
        transition={{type:'spring',duration:1,delay:0.8}}>
       <SubBox>
            <Text>
                <h1>Hi,</h1>
                <h3>I'm {text}<Cursor cursorStyle="|" /></h3>
                <h6>I design and develop simple, yet beautifully crafted websites.</h6>
            </Text>
       </SubBox>
       <SubBox>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1,delay:1.5}}>
                <img className='pic' src={Me} alt="Profile Pic" />
            </motion.div>
       </SubBox>
    </Box>
  )
}
