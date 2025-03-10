import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import music from '../assets/audio/music.mp3'
import { mediaMax } from '../components/Themes'
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
    display: flex;
    cursor: pointer;
    position: fixed;
    left: 8rem;
    top: 3rem;
    z-index: 5;

    & > *:nth-child(1){
        animation-delay: 0.2s;
    }
    & > *:nth-child(2){
        animation-delay: 0.3s;
    }
    & > *:nth-child(3){
        animation-delay: 0.4s;
    }
    & > *:nth-child(4){
        animation-delay: 0.5s;
    }
    & > *:nth-child(5){
        animation-delay: 0.8s;
    }

    ${mediaMax(30)`
        top:6.5rem;
        left:1.5rem;
    `}
`

const play = keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(2);
    }
    100%{
        transform: scaleY(1);
    }
`

const Line = styled.span`
    background-color: ${props => props.theme.body};
    border: 1.5px solid ${props => props.theme.text};

    animation: ${play} 1s ease infinite;
    animation-play-state: ${props => props.click ? "running" : "paused"};
    height: 0.7rem;
    width: 0.8px;
    margin: 0 0.1rem;
`

export default function SoundBar() {

    const ref = useRef(null)
    const [click,setClick] = useState(false)

    const handleClick = ()=>{
        setClick(!click)

        if(!click){
            ref.current.play()
        }else{
            ref.current.pause()
        }
    }

  return (
    <>
        <Box 
            initial={{
                x:-200,
                transition: {type:'spring', duration: 1.5, delay:0.8}
            }}
            animate={{
                x:0,
                transition: {type:'spring', duration: 1.5, delay:0.8}
            }} 
            whileHover={{scale:1.2}}
            whileTap={{scale:0.8}}
            onClick={handleClick}>
                    <Line click={click} />
                    <Line click={click} />
                    <Line click={click} />
                    <Line click={click} />
                    <Line click={click} />
                    <audio src={music} ref={ref} loop />
        </Box>
    </>
  )
}
