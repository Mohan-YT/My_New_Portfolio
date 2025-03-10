import React from 'react'
import { NavLink } from 'react-router-dom'
import {  Github, Instagram, LinkedInAlt, WhatsApp } from '../components/AllSvg'
import styled from 'styled-components'

import {DarkTheme, mediaMax} from '../components/Themes'
import { motion } from 'framer-motion'


const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    & > *:not(:last-child) { //select each div except last child
        margin: 0.4rem 0;
    }

    ${mediaMax(50)`
        & > *:not(:last-child) { 
        margin: 0.18rem 0;
       }
   `}
   
    ${mediaMax(30)`
        & > *:not(:last-child) { 
        margin: 0.2rem 0;
       }
   `}
  
`

const Line = styled(motion.span)`
    width: 2px;
    height: 7.5rem;
    background-color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`

export default function SocialIcons(props) {
  return (
    <Icons>
      <motion.div
                 initial={{scale:0}}
                 animate={{scale:[0,1,1.5,1]}}
                 transition={{type:"tween", duration:1, delay:0.8}} >
        <NavLink to='https://github.com/Mohan-YT/' style={{color : 'inherit'}} target='_blank' >
            <Github width={23} height={23} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </motion.div>
      <motion.div
                 initial={{scale:0}}
                 animate={{scale:[0,1,1.5,1]}}
                 transition={{type:"tween", duration:1, delay:1}} >
        <NavLink to='https://www.linkedin.com/in/s-mohan-prasanth/' style={{color : 'inherit'}} target='_blank' >
            <LinkedInAlt width={23} height={23} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </motion.div>
      <motion.div
                 initial={{scale:0}}
                 animate={{scale:[0,1,1.5,1]}}
                 transition={{type:"tween", duration:1, delay:1.2}} >
        <NavLink to='https://www.instagram.com/_whiteyt37_/' style={{color : 'inherit'}} target='_blank' >
            <Instagram width={23} height={23} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </motion.div>
      <motion.div
                 initial={{scale:0}}
                 animate={{scale:[0,1,1.5,1]}}
                 transition={{type:"tween", duration:1, delay:1.4}} >
        <NavLink to='https://wa.link/5drw0l' style={{color : 'inherit'}} target='_blank' >
            <WhatsApp width={23} height={23} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </motion.div>

      <Line color={props.theme} 
            initial={{
                height:0
              }}
            animate={{
                height:"7.5rem"
              }}
            transition={{
              type:'spring',
              duration:1,
              delay:0.8
            }}
        />

    </Icons>
  )
}
