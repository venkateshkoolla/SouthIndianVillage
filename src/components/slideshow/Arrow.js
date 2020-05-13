import React from "react"
import { css, jsx } from '@emotion/core'
//  import leftArrow from './'
//  import rightArrow from '../images/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => (

    <div onClick={handleClick} css={css`
    display : flex;
    position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 325px` : `left: 325px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}>

        {direction === 'right' ? <span>"Right"</span> : <span>"Left"</span>}
    </div>
)

export default Arrow

