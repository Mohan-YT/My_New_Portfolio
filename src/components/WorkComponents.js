import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github } from './AllSvg';
import { motion } from 'framer-motion';
import { mediaMax } from './Themes';


const Box = styled(motion(NavLink))`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 25.2rem;
    padding: 0.7rem 0.8rem 0;
    margin: 0.3rem;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    backdrop-filter: blur(2px);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    z-index: 5;

    &:hover{
      color: ${props => props.theme.body};
      background-color: ${props => props.theme.text};
      transition: all 0.3s ease;
    }



    ${mediaMax(50)`
        width: calc(10rem + 8vw);
    `}

    ${mediaMax(47)`
        width: calc(10rem + 12vw);
    `}

    ${mediaMax(40)`
        width: calc(10rem + 44vw);
    `}

    ${mediaMax(35)`
        width: calc(10rem + 27vw);
    `}

    ${mediaMax(25)`
        width: calc(10rem + 20vw);
    `}

    ${mediaMax(25)`
        width: calc(10rem + 15vw);
    `}
`
const Image = styled.div`
  background-image: ${props => `url(${props.img})`};
  width: 100%;
  height: 90%;
  background-size:cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover &{
    border: 1px solid ${props => props.theme.body};
  }
`
const Title = styled.h3`
  color: inherit;
  padding: 0%.5rem 0;
  padding-top: 1rem;
  font-family: 'karla',sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.text};

  ${Box}:hover &{
    border-bottom: 1px solid ${props => props.theme.body};
  }
`
const Discription = styled.p`
  padding: 0.5rem 0;
`
const HashTags = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`
const Tag = styled.span`
  padding-right: 0.5rem;
`
const Git = styled(NavLink)`
  color: inherit;
  display: flex;
  justify-content: end;

  ${Box}:hover &{
    &>*{
      fill: ${props => props.theme.body}
    }
  }
`

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`

//framer motion configration

const Item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};



export default function WorkComponents(props) {
  const {name, description, tags,imgSrc, live, github} = props.work
  return (
    <Container 
              variants={Item}>
        <Box target="_blank"
            to={live}

            >
              <Image img={imgSrc} />
              <Title>{name}</Title>
              <Discription>
                 {description}
               </Discription>
              <HashTags>
                <div>
                    {
                      tags.map((t,id)=>{
                        return <Tag key={id}>#{t}</Tag>
                      })
                    }
                </div>
              
                <Git to={github}>
                    <Github width={30} className='icon'  />
                </Git>
              </HashTags>
          
        </Box>
    </Container>
    
  )
}
