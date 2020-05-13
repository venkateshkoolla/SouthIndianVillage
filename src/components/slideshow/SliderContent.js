import react from 'react'
import styled from '@emotion/styled'

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  width: 250vw;
  display: flex;
  height: 75vh
`

export default SliderContent

// width: ${props => props.width}px;