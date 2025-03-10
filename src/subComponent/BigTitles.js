import React from 'react'
import styled from 'styled-components'



const Text = styled.div`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    color: ${props => `rgba(${props.theme.textRgba},0.1)`};
    font-size:calc(5rem + 5vw);
    font-weight: 1000;
    z-index: 0;
`




export default function BigTitles(props) {
  return (
   <Text top={props.top} left={props.left} right={props.right}>
        {props.text}
   </Text>
  )
}
