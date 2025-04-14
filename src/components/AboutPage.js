import React, { lazy, Suspense } from 'react'
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
  position: relative;
`

const About = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  ${mediaMax(50)`
          width: 50vw;
          height: 55vh;
          top:55%;
          left:45%;
          transform:translate(-50%,-50%);
          padding: 1.5rem;

  `};
  ${mediaMax(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);

  `};
  ${mediaMax(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: blur(1.5px);
          margin-top:2rem;

  `};

${mediaMax(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};

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


const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 30vw;
  animation: ${float} 4s ease-in-out infinite;
  z-index: 1;

  img{
    width: 100%;
    height: auto;

  }

  ${mediaMax(50)`
      z-index: 5;
    `}

`

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1,transition: { duration: 1 , delay:0.2 } },
  exit: { opacity: 0, transition: { duration: 1 , delay:0.2 } },
};



export default function AboutPage() {

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

                  <SpaceMan   initial={{ right: '-20%', top: '100%' }}
                              animate={{
                              right: '5%',
                              top: '10%',
                              transition: { duration: 2, delay: 0.5 },
                            }}>
                      <motion.img  src={astronaut} alt="space=man" />
                  </SpaceMan>

                  <About className ='About' initial={{ opacity:0 , height:0 , delay:2.2 }}
                                                animate={{ opacity : 1 , height:"auto" , delay:2.2 }} 
                                                transition={{ duration: 0.7 }} >
                      I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
                      <br /><br />
                      I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
                      <br /><br />
                      I love exploring creativity in web design and believe everything is art with consciousness..Connect with me through my social links!
                  </About>

                    <BigTitles text="ABOUT" top="3.5%" right="15%" />
                    
              </MainContainer>
          </Suspense>
      </ThemeProvider>
   </>
  )
}
