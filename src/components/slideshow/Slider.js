import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
/**
 * @function Slider
 */

const Slider = props => {

    const getWidth = () => 800
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    })
    const { translate, transition, activeIndex } = state

    const nextSlide = () => {
        if (activeIndex === props.slides.length - 1) {
          return setState({
            ...state,
            translate: 0,
            activeIndex: 0
          })
        }
    
        setState({
          ...state,
          activeIndex: activeIndex + 1,
          translate: (activeIndex + 1) * getWidth()
        })
      }
    
      const prevSlide = () => {
        if (activeIndex === 0) {
          return setState({
            ...state,
            translate: (props.slides.length - 1) * getWidth(),
            activeIndex: props.slides.length - 1
          })
        }
    
        setState({
          ...state,
          activeIndex: activeIndex - 1,
          translate: (activeIndex - 1) * getWidth()
        })
    }

    return <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}
        css={SliderCSS}>
        <SliderContent
            translate={translate}
            transition={transition}
            width={getWidth()* props.slides.length}
            // width = "800px"
        >
           
            {props.slides.map((slide, i) => (
            <Slide key={slide + i} content={slide} />
        ))}
        </SliderContent>
        <Arrow direction="left" handleClick={prevSlide} />
        <Arrow direction="right" handleClick={nextSlide} />
        {/*  */}</div>
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`

export default Slider
// height: 100vh;