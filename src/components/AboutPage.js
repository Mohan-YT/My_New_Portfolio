import React, { lazy, Suspense, useEffect, useState } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

import { motion } from 'framer-motion'

import { DarkTheme, mediaMax } from './Themes'


import astronaut from '../assets/Images/s-man-3-removebg-preview.png'
import SoundBar from '../subComponent/SoundBar'
import Loading from '../subComponent/Loading'

const HomeButton = lazy(()=> import('../subComponent/HomeButton'))
const LogoComponent = lazy(()=> import('../subComponent/LogoComponent'))
const SocialIcons = lazy(()=> import('../subComponent/SocialIcons'))
const ParticalComponent = lazy(()=> import('../subComponent/ParticalComponent'))
const BigTitles = lazy(()=> import('../subComponent/BigTitles'))




const MainContainer = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .About{
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 48vw;
    height: 58vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: calc(0.6rem + 0.9vw);
    backdrop-filter: blur(4px);


    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'ubutntu Mono', monospace;
    font-style: italic;


    ${mediaMax(50)`
      top:7rem;
    `}

    ${mediaMax(40)`
      top:6.8rem;
      left: calc(4.5rem + 4.5vw);
    `}

    ${mediaMax(30)`
      top:6.5rem;
      left: calc(4rem + 4vw);
      padding:1.2rem;
    `}

    ${mediaMax(28)`
        top: 5.8rem ;
        font-size: calc(0.664rem + 0.7vw);
        padding:1.1rem;
    `}

    ${mediaMax(25)`
        top:5.5rem;
        font-size: calc(0.640rem + 0.674vw);
    `}

    ${mediaMax(23)`
        top:5.5rem;
        font-size: calc(0.6rem + 0.674vw);
    `}

    ${mediaMax(20)`
        font-size: calc(0.6rem + 0.6vw);
        padding:1rem;
    `}
  }
`

const float = keyframes`
  0%{
    transform: translateY(-10px);
  }
  50%{
    transform: translateY(15px) translateX(15px);
  }
  100%{
    transform: translateY(-10px);
  }
`


const SpaceMan = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 25vw;
  animation: ${float} 4s ease-in-out infinite;
  z-index: 1;

  img{
    width: 100%;
    height: auto;
    
  }

  ${mediaMax(30)`
    top:7%;
    right:4%;
  `}

  ${mediaMax(20)`
    top:5.5%;
    right:4%;
  `}
`

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1,transition: { duration: 1 , delay:0.2 } },
  exit: { opacity: 0, transition: { duration: 1 , delay:0.2 } },
};



export default function AboutPage() {

  const [height, setHeight] = useState("55vh");
    useEffect(() => {
        if (window.matchMedia("(max-width: 50em)").matches) {
          setHeight("60vh");
        }
        if (window.matchMedia("(max-width: 30em)").matches) {
          setHeight("68vh");
        }
        if (window.matchMedia("(max-width: 28em)").matches) {
          setHeight("70vh");
        }
        if (window.matchMedia("(max-width: 25em)").matches) {
          setHeight("71vh");
        }
        if (window.matchMedia("(max-width: 20em)").matches) {
          setHeight("72vh");
        }
      },[]);

  return (
   <>
      <ThemeProvider theme={DarkTheme}>
          <Suspense fallback={<Loading />}>
              <MainContainer variants={pageVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit">

                <ParticalComponent theme='dark' />  {/* star partical component */}

                  <HomeButton />
                  <LogoComponent theme="dark" />
                  <SocialIcons theme="dark" />
                  <SoundBar />

                  <SpaceMan>
                      <motion.img  src={astronaut} alt="space=man" />
                  </SpaceMan>

                  <motion.div className ='About' initial={{ opacity:0 , height:0 , delay:2.2 }}
                                                animate={{ opacity : 1 , height:height , delay:2.2 }} 
                                                transition={{ duration: 0.7 }} >
                      I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
                      <br /><br />
                      I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
                      <br /><br />
                      I love exploring creativity in web design and believe everything is art with consciousness..Connect with me through my social links!
                  </motion.div>

                    <BigTitles text="ABOUT" top="3.5%" right="15%" />
                    
              </MainContainer>
          </Suspense>
      </ThemeProvider>
   </>
  )
}
