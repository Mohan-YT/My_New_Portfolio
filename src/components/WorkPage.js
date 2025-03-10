import React, {useState, useEffect , lazy, Suspense } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'

import { Work } from '../data/WorkData'

import WorkComponents from './WorkComponents'
import AnchorComponent from '../subComponent/AnchorComponent'
import SoundBar from '../subComponent/SoundBar'
import Loading from '../subComponent/Loading'
import { mediaMax } from './Themes'


const HomeButton = lazy(()=> import('../subComponent/HomeButton'))
const LogoComponent = lazy(()=> import('../subComponent/LogoComponent'))
const SocialIcons = lazy(()=> import('../subComponent/SocialIcons'))
const BigTitles = lazy(()=> import('../subComponent/BigTitles'))


const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  position: relative;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;



  ${mediaMax(50)`
    padding-top:8rem ;
  `}
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,minmax(calc(10rem + 15vw),1fr));
  grid-gap: calc(1rem + 2vw);

  ${mediaMax(40)`
      grid-template-columns: repeat(1,minmax(calc(10rem + 15vw),1fr));
      margin-left:2rem
  `}
`

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1,transition: { duration: 1 , delay:0.2 } },
  exit: { opacity: 0, transition: { duration: 1 , delay:0.2 } },
};

const container ={
  hidden: {opacity:0},
  show:{
    opacity:1,
    transition : {
      staggerChildren: 0.8,
      duration:0.5
    }
  }
}


export default function WorkPage() {

  const [numbers,setNumbers] = useState(0)

  useEffect(()=>{
    let num = (window.innerHeight - 70)/25;
    setNumbers(parseInt(num))
  },[])

  return (
    <Suspense fallback={<Loading />}>
        <MainContainer variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit">
            <Container>
                <LogoComponent />
                <HomeButton />
                <SocialIcons />
                <SoundBar />

                
                <AnchorComponent numbers={numbers} />
                  <Center>
                      <Grid as={motion.div} variants={container} initial="hidden" animate="show">
                        {
                          Work.map(work => (
                            <WorkComponents key={work.id} work={work} />
                          ))
                        }
                      </Grid>
                  </Center>
            </Container>

                <BigTitles text="WORKS" left="5rem" top="2.5rem" />

        </MainContainer>
    </Suspense>
  )
}
