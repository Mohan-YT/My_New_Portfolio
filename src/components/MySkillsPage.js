import React, {lazy, Suspense, useEffect, useState} from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGithub, FaJs , FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress , SiMongodb } from "react-icons/si";

import { DarkTheme, mediaMax } from './Themes'


import SoundBar from '../subComponent/SoundBar';
import Loading from '../subComponent/Loading';


const HomeButton = lazy(()=> import('../subComponent/HomeButton'))
const LogoComponent = lazy(()=> import('../subComponent/LogoComponent'))
const SocialIcons = lazy(()=> import('../subComponent/SocialIcons'))
const ParticalStarComponent = lazy(()=> import('../subComponent/ParticalStarComponents'))
const BigTitles = lazy(()=> import('../subComponent/BigTitles'))



const MainContainer = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 70vw;
  height: 75vh;

  ${mediaMax(70)`
      width:80vw;
      height:65vh;
  `}

  ${mediaMax(50)`
      width:80vw;
      height:60vh;
  `}

  ${mediaMax(40)`
      width:75vw;
      height:50vh;
  `}

  ${mediaMax(30)`
      width:80vw;
      height:45vh;
  `}

  ${mediaMax(20)`
      width:85vw;
      height:35vh;
  `}
`


const Circle = styled.div`
  width: 100%;
  height: 100%;
  background: repeating-radial-gradient(gray 1px, transparent 4px, transparent 6rem 10%);
  transform: rotateX(30deg);

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

 
  .web-text{
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    width: calc(3.5rem + 3vw);
    height: calc(3.5rem + 3vw);

    border-radius: 50%;
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    font-size: calc(1.5rem + 1vw);

    box-shadow: 0 0 15px 1px ${(props) => props.theme.text};

    ${mediaMax(90)`
        width: calc(3rem + 3vw);
        height: calc(3rem + 3vw);
        font-size: calc(1.5rem + 1vw);
    `}

    ${mediaMax(70)`
        width: calc(2.5rem + 3vw);
        height: calc(2.5rem + 3vw);
        font-size: calc(1rem + 1vw);
    `}

    ${mediaMax(50)`
        width: calc(2rem + 3vw);
        height: calc(2rem + 3vw);
        font-size: calc(0.8rem + 1vw);
    `}

    ${mediaMax(40)`
        width: calc(2rem + 2.5vw);
        height: calc(2rem + 2.5vw);
        font-size: calc(0.8rem + 0.8vw);
    `}

    ${mediaMax(30)`
        width: calc(1.5rem + 3vw);
        height: calc(1.5rem + 3vw);
        font-size: calc(0.7rem + 0.7vw);
    `}

    ${mediaMax(20)`
        width: calc(1.5rem + 2.5vw);
        height: calc(1.5rem + 2.5vw);
        font-size: calc(0.8rem + 0.7vw);
    `}
  }

  .outside-h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
  }

  span{
    color: ${props => props.theme.text};
  }

  ${mediaMax(70)`
      background: repeating-radial-gradient(gray 1px, transparent 4px, transparent 5rem 10%);
  `}

  ${mediaMax(50)`
      background: repeating-radial-gradient(gray 1px, transparent 4px, transparent 4rem 10%);
  `}

  ${mediaMax(40)`
      background: repeating-radial-gradient(gray 1px, transparent 4px, transparent 3.3rem 10%);
  `}
  
  ${mediaMax(30)`
      background: repeating-radial-gradient(gray 1px, transparent 4px, transparent 2.5rem 10%);
      span{
        font-size:calc(0.5rem + 1vw);
      }
  `}

  ${mediaMax(20)`
      background: repeating-radial-gradient(gray 1px, transparent 4px, transparent 1.7rem 10%);
  `}


`;

const SkillKnow = styled.div`
    color: ${props => props.theme.text};
    width: calc(2.5rem + 2vw);
    height: calc(2.5rem + 2vw);

    ${mediaMax(90)`
         width: calc(2.3rem + 2.3vw);
         height: calc(2.3rem + 2.3vw);
    `}

    ${mediaMax(70)`
         width: calc(1.8rem + 1.8vw);
         height: calc(1.8rem + 1.8vw);
    `}

    ${mediaMax(50)`
         width: calc(1.4rem + 1.4vw);
         height: calc(1.4rem + 1.4vw);
    `}

    ${mediaMax(40)`
         width: calc(1rem + 2vw);
         height: calc(1rem + 2vw);
    `}

    ${mediaMax(30)`
         width: calc(1.2rem + 1.2vw);
         height: calc(1.2rem + 1.2vw);
    `}

    ${mediaMax(20)`
         width: calc(1rem + 1vw);
         height: calc(1rem + 1vw);
    `}
`


const Skill = ({ name, icon: Icon, x, y }) => {
  return (
    <motion.h3 className='outside-h3'
      whileHover={{ scale: 1.2 }} 
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }} 
      transition={{ duration: 0.6 }} >
        <SkillKnow as={Icon}  />
        <span>{name}</span>
    </motion.h3>
  )
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1,transition: { duration: 1 , delay:0.2 } },
  exit: { opacity: 0, transition: { duration: 1 , delay:0.2 } },
};

export default function MySkillsPage() {

  const [Xaxis,setXaxis] = useState({
    html:'',
    css:'',
    js:'',
    react:'',
    bt:'',
    tcss:'',
    next:'',
    node:'',
    express:'',
    db:'',
    git:''
  })

  const [Yaxis,setYaxis] = useState({
    html:'',
    css:'',
    js:'',
    react:'',
    bt:'',
    tcss:'',
    next:'',
    node:'',
    express:'',
    db:'',
    git:''
  })

  useEffect(()=>{
    if(window.matchMedia("(max-width:90em)").matches){
      setXaxis({
          html:'0',
          css:'14.5',
          js:'-14',
          react:'-1',
          bt:'28',
          tcss:'25',
          next:'-16',
          node:'-29',
          express:'-15',
          db:'12',
          git:'14'
        })

      setYaxis({
          html:'-8.5',
          css:'2',
          js:'0',
          react:'12',
          bt:'5',
          tcss:'-9',
          next:'13.5',
          node:'-1',
          express:'-15',
          db:'-16',
          git:'14'
        })

    }

    if(window.matchMedia("(max-width:70em)").matches){
      setXaxis({
        html:'0',
        css:'14.5',
        js:'-15',
        react:'-1',
        bt:'30',
        tcss:'27',
        next:'-18',
        node:'-30.5',
        express:'-16.5',
        db:'12',
        git:'15'
      })

    setYaxis({
        html:'-10.5',
        css:'2',
        js:'0',
        react:'14',
        bt:'5',
        tcss:'-10',
        next:'14.5',
        node:'-1',
        express:'-16.5',
        db:'-18.5',
        git:'16'
      })

    }

    if(window.matchMedia("(max-width:50em)").matches){
      setXaxis({
        html:'0',
        css:'15.5',
        js:'-16',
        react:'-1',
        bt:'32',
        tcss:'29',
        next:'-20',
        node:'-32.5',
        express:'-20',
        db:'12',
        git:'16.5'
      })

    setYaxis({
        html:'-12.5',
        css:'2',
        js:'0',
        react:'16.5',
        bt:'5',
        tcss:'-11.5',
        next:'17.5',
        node:'-1',
        express:'-19',
        db:'-22.5',
        git:'20'
      })

    }

    if(window.matchMedia("(max-width:30em)").matches){
      setXaxis({
        html:'0',
        css:'15.5',
        js:'-16',
        react:'-1',
        bt:'32',
        tcss:'29',
        next:'-20',
        node:'-32.5',
        express:'-20',
        db:'12',
        git:'16.5'
      })

    setYaxis({
        html:'-12.5',
        css:'2',
        js:'0',
        react:'16.5',
        bt:'5',
        tcss:'-11.5',
        next:'17.5',
        node:'-1',
        express:'-19',
        db:'-22.5',
        git:'20'
      })

    }
 
    if(window.matchMedia("(max-width:20em)").matches){
      setXaxis({
        html:'0',
        css:'15.5',
        js:'-16',
        react:'-1',
        bt:'32',
        tcss:'29',
        next:'-20',
        node:'-32.5',
        express:'-20',
        db:'12',
        git:'16.5'
      })

    setYaxis({
        html:'-12.5',
        css:'2',
        js:'0',
        react:'16.5',
        bt:'5',
        tcss:'-11.5',
        next:'17.5',
        node:'-1',
        express:'-19',
        db:'-22.5',
        git:'20'
      })

    }



  },[])


  return (
   <>
      <ThemeProvider theme={DarkTheme}>
          <Suspense fallback={<Loading />}>
              <MainContainer variants={pageVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit">

                <ParticalStarComponent />  {/* star partical component */}

                  <HomeButton />
                  <LogoComponent theme="dark" />
                  <SocialIcons theme="dark" />
                  <SoundBar />

                  <Box>
                      <Circle>
                          <motion.h3 className='web-text' whileHover={{scale:1.2}} >
                                  web
                          </motion.h3>


                          <Skill name='html' icon={FaHtml5} x={Xaxis.html+"vw"} y={Yaxis.html+"vw"} />
                          <Skill name='css' icon={FaCss3Alt} x={Xaxis.css+"vw"} y={Yaxis.css+"vw"} /> 
                          <Skill name='javascript' icon={FaJs} x={Xaxis.js+"vw"} y={Yaxis.js+"vw"} />
                          <Skill name='react.js' icon={FaReact} x={Xaxis.react+"vw"} y={Yaxis.react+"vw"} />
                          <Skill name='bootstrap' icon={FaBootstrap} x={Xaxis.bt+"vw"} y={Yaxis.bt+"vw"}/>
                          <Skill name='tailwindcss' icon={SiTailwindcss} x={Xaxis.tcss+"vw"} y={Yaxis.tcss+"vw"} />
                          <Skill name='next.js' icon={SiNextdotjs} x={Xaxis.next+"vw"}  y={Yaxis.next+"vw"} />
                          <Skill name='node.js' icon={FaNodeJs} x={Xaxis.node+"vw"}  y={Yaxis.node+"vw"} />
                          <Skill name='express.js' icon={SiExpress} x={Xaxis.express+"vw"}  y={Yaxis.express+"vw"} />
                          <Skill name='mongoDB' icon={SiMongodb} x={Xaxis.db+"vw"}  y={Yaxis.db+"vw"} />
                          <Skill name='github' icon={FaGithub} x={Xaxis.git+"vw"} y={Yaxis.git+"vw"} />


                      </Circle>
                  </Box>

                  <BigTitles text="SKILLS" top="5%" right="9%" />

              </MainContainer>
          </Suspense>
      </ThemeProvider>
   </>
  )
}
