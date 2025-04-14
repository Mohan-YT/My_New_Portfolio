import React, { useState , lazy, Suspense   } from 'react'
import styled, { keyframes } from 'styled-components'

import { NavLink } from 'react-router-dom' 
import myImage from '../assets/Images/download.png' 
import HomePage from './HomePage'
import { LuArrowUp } from 'react-icons/lu';
import SoundBar from '../subComponent/SoundBar'
import { motion } from 'framer-motion'
import Loading from '../subComponent/Loading'
import { mediaMax } from './Themes'


const HomeButton = lazy(()=> import('../subComponent/HomeButton'))
const LogoComponent = lazy(()=> import('../subComponent/LogoComponent'))
const SocialIcons = lazy(()=> import('../subComponent/SocialIcons'))


const MainContainer = styled(motion.div)`
  background: ${props => props.theme.body};
  width : 100vw;
  height : 100vh;
  overflow: hidden;
  position: relative;

  h2,h3,h4,h5,h6{
    font-family: 'Karla',sans-serif;
    font-weight: 500;
  }

  h2 {
    ${mediaMax(40)`
      font-size:1.2em;

  `};

    ${mediaMax(30)`
      font-size:1em;

  `};
  }
`
const Container = styled.div`
  padding: 2rem;
`
const Contact = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

`
const Hire = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(0.7rem + 1vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`

const Projucts = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 50%;
  left:calc(1.2rem + 2vw);
  transform:translate(-50%, -150%) rotate(-90deg) ;
  text-decoration: none;
  z-index: 1;

    @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
    @media only screen and (max-width: 30em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }

  ${mediaMax(50)`
    left:calc(1.8rem + 2vw);
  `}

  ${mediaMax(30)`
    left:calc(2.1rem + 2vw);
  `}

  ${mediaMax(20)`
    left:calc(2.2rem + 2vw);
  `}
`
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`
const About = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;
`
const Skills = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`
const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`

const Center =styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  transform: translate(-50%,-50%);
  border:none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition:all 1s ease;

  & > :first-child{
    animation: ${rotate} infinite 2.5s linear
 }

  & > :last-child{
   display: ${props => props.click ? 'none' : 'inline-block'};
   padding-top: 1rem;
 }

 @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`

const Image = styled.img`
  border-radius: 50%;
  border: 2px solid black;
  transition: all 1 ease;
`
const DarkDiv = styled.div`
  position: absolute;
  background-color: #000;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.3s;

  ${mediaMax(50)`
    hight:40vh;
 `}

  ${(props) =>
    props.click
      ? mediaMax(40)`
       height: 50%;
      right:0;
      width: 100%;
      transition: width 0.5s ease, height 1s ease 0.5s;
       `
      : mediaMax(40)`
       height: 0;
       width: 0;
  `};
`

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1,transition: { duration: 1 , delay:0.2 } },
  exit: { opacity: 0, transition: { duration: 1 , delay:0.2 } },
};



export default function Main() {
  const [click,setClick] = useState(false)

  const handleClick = ()=>{
    setClick((prev)=>!prev)
  }

  const [path, setpath] = useState("");

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 40em)").matches;



  const resumePath = "/resume/MOHAN.pdf";
  
  return (
    <Suspense fallback={<Loading />} >
        <MainContainer variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit={path === "about" || path === "skills" ? moveY : moveX}>

          <Container>
              <HomeButton />
              <LogoComponent theme={click ? 'dark' : 'light'}  />
              {mq ? (
              <SocialIcons theme="light" />
            ) : (
              <SocialIcons theme={click ? "dark" : "light"} />
            )}
              <SoundBar />

              <DarkDiv click={click} />
              <Center click={click}>
                {mq ? (
                      <Image onClick={handleClick} src={myImage} width={click ? 60 : 130} height={click ? 60 : 130} />
                ) : (
                      <Image onClick={handleClick} src={myImage} width={click ? 100 : 190} height={click ? 100 : 190} />
                )}
                  <motion.span  whileHover={{scale:1.1}}
                                whileTap={{scale:0.8}}>Click Here <LuArrowUp /></motion.span>
              </Center>
              
              {mq ? (
              <Contact
                click={+click} target='_blank'
                to='mailto:mohanprasanth3883@gmail.com'
              >
                <motion.h3
                  initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Say hi..
                </motion.h3>
              </Contact>
            ) : (
              <Contact
                click={+false} target='_blank'
                to='mailto:mohanprasanth3883@gmail.com'
              >
                <motion.h3
                  initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Say hi..
                </motion.h3>
              </Contact>
            )}

            {
              mq ? (
                <Hire to={resumePath} click={+click} onClick={() => setpath("blog")} target='_blank'>
                <motion.h2  
                            initial={{
                              y:-200,
                              transition: {type:'spring', duration: 1.5, delay:0.8}
                            }}
                            animate={{
                              y:0,
                              transition: {type:'spring', duration: 1.5, delay:0.8}
                            }}
                            whileHover={{scale:1.2}}
                            whileTap={{scale:0.8}}>Resume</motion.h2>
              </Hire>
              ) : (
                <Hire to={resumePath} click={+false} onClick={() => setpath("blog")} target='_blank'>
                <motion.h2  
                            initial={{
                              y:-200,
                              transition: {type:'spring', duration: 1.5, delay:0.8}
                            }}
                            animate={{
                              y:0,
                              transition: {type:'spring', duration: 1.5, delay:0.8}
                            }}
                            whileHover={{scale:1.2}}
                            whileTap={{scale:0.8}}>Resume</motion.h2>
              </Hire>
              )
            }
              

              <Projucts to='/work' click={+click}>
                <motion.h2  onClick={() => setpath("work")}
                            initial={{
                              y:-200,
                              transition: {type:'spring', duration: 1.5, delay:0.8}
                            }}
                            animate={{
                              y:0,
                              transition: {type:'spring', duration: 1.5, delay:0.8}
                            }} 
                            whileHover={{scale:1.2}}
                            whileTap={{scale:0.8}}>Work</motion.h2>
              </Projucts>
              
              <BottomBar>
                  <About to='/about' onClick={() => setClick(false)} click={mq ? +false : +click}>
                      <motion.h2  onClick={() => setpath("about")}
                                  initial={{
                                    y:200,
                                    transition: {type:'spring', duration: 1.5, delay:0.8}
                                  }}
                                  animate={{
                                    y:0,
                                    transition: {type:'spring', duration: 1.5, delay:0.8}
                                  }}
                                  whileHover={{scale:1.2}}
                                  whileTap={{scale:0.8}}>About</motion.h2>
                  </About>

                  <Skills to='/skills'>
                      <motion.h2   onClick={() => setpath("skills")}
                                  initial={{
                                    y:200,
                                    transition: {type:'spring', duration: 1.5, delay:0.8}
                                  }}
                                  animate={{
                                    y:0,
                                    transition: {type:'spring', duration: 1.5, delay:0.8}
                                  }}
                                  whileHover={{scale:1.2}}
                                  whileTap={{scale:0.8}}>My Skills</motion.h2>
                  </Skills>
                  
              </BottomBar>

          </Container>

          {click && <HomePage click={click} />}
          
        </MainContainer>
    </Suspense>
  )
}
