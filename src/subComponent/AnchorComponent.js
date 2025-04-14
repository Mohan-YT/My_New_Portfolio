import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Anchor, Link } from '../components/AllSvg'
import { mediaMax } from '../components/Themes'


const Container = styled.div`
    position: relative;

    ${mediaMax(47)`
        display:none;
    `}

`

const Slider = styled.div`
    position: fixed;
    top: 0;
    right: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100%);

    .chain{
        transform: rotate(135deg);
    }

`
const PreDisplay = styled.div`
    position: absolute;
    top: 0;
    right: 2rem;

`



export default function AnchorComponent(props) {

    const ref = useRef(null)
    const hiddenRef = useRef(null)

    useEffect(()=>{

        const handleScroll = ()=>{
            let scrollPostition = window.pageYOffset;
            let windowSlide = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let diff = Math.max(bodyHeight - (scrollPostition + windowSlide))

            //diff*100/scrollpostiotion
            let diffP = (diff * 100) / (bodyHeight - windowSlide)

            ref.current.style.transform = `translateY(${-diffP}%)`

            if (hiddenRef.current) {
                hiddenRef.current.style.opacity = window.pageYOffset > 5 ? '0' : '1';
                hiddenRef.current.style.transition = 'opacity 0.3s ease';
            }else{
                hiddenRef.current.style.display = 'block'
            }
        }

        window.addEventListener('scroll',handleScroll)

        return ()=> window.removeEventListener('scroll',handleScroll)
    })


  return (
    <Container>
        <PreDisplay ref={hiddenRef} className='hidden'>
            <Anchor width={70} height={70} fill="currentColor"/>
        </PreDisplay> 
        <Slider ref={ref}>
            {
                [...Array(props.numbers)].map((x,id)=>{
                    return <Link key={id} width={25} height={25} fill="currentColor" className="chain" />
                })
            }
            <Anchor width={70} height={70} fill="currentColor"/>
        </Slider>
    </Container>
  )
}
