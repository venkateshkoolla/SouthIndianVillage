import React from "react"
import ReactDOM from 'react-dom'
import { useStaticQuery, graphql } from "gatsby"

import Slider from '../components/slideshow/Slider'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Image1 from "../components/image1"
import Image2 from "../components/image2"
import Slider1 from "../components/slider1"
import Slider2 from "../components/slider2"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/background"
import styled from 'styled-components'
import { auto } from "eol"
import { relative } from "upath"

import {
  StyledContentWrapperLeft,
  StyledImageWrapper,
  StyledLink,
  StyledWrapper,
} from '../components/SharedStyledComponents'

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `760px`, marginBottom: `1.45rem` }}>
      <div>
        <div style={{ position:`relative`,
         width: `760px`, backgroundPosition: `center`, backgroundSize:`cover` }}>
          <Slider slides={images} />
        </div>
        <div style={{ padding: `10px` }}>
          <Image />
        </div>
      </div>
      <br></br>
    </div>
    <div id="our-food" class="parent" style={{
      margin: `0 auto`, maxWidth: `800px`, width: `100%`,
      marginTop: `50Px`, padding: `0px`
    }}>
      <div class="child" style={{ width: `50%`, float: `left` }}>
        <div id="left-container" style={{ position: relative, margin: `5px` }}>
          <Image1 />
        </div>
      </div>
      <div class="child" style={{ width: `50%`, float: `left` }}>
        <div id="right-container" style={{ margin: `5px`, color: `#fff`, }}>
          <div class="contact-title-font" style={{
            borderColor: `red`, position: `relative`,
            fontFamily: `serif`, textAlign: `center`
          }}>
            <span>Our food!</span>
          </div>
          <div style={{ marginTop: `20px` }}>
            <div id="GetInTouchform"
              style={{
                borderColor: `red`, border: `2px solid`,
                fontFamily: `serif`, fontsize: `20px`, position: `relative`,
                tablelayout: `relative`, padding: `5px`
              }} >
              <div class="priciples-font" color="#fff" style={{ fontFamily: `serif`, textAlign: "center", position: `relative` }}>
                <div>
                  Zero preservative
                </div>
                <div>
                  Zero frozen
            </div>
                <div >
                  Zero toxic
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="mission" class="parent" style={{
      margin: `0 auto`, maxWidth: `800px`, width: `100%`,
      marginTop: `50Px`, padding: `0px`
    }}>
      <div class="child" style={{ width: `50%`, float: `left` }}>
        <div id="left-container" style={{ position: relative, margin: `5px` }}>
          <Image2 />
        </div>
      </div>
      <div class="child" style={{ width: `50%`, float: `left` }}>
        <div id="right-container" style={{ margin: `5px`, color: `#fff`, }}>
          <div class="contact-title-font" style={{
            borderColor: `red`, position: `relative`,
            fontFamily: `serif`, textAlign: `center`
          }}>
            <span>Our packing!</span>
          </div>
          <div style={{ marginTop: `20px` }}>
            <div id="GetInTouchform"
              style={{
                borderColor: `red`, border: `2px solid`,
                fontFamily: `serif`, fontsize: `20px`, position: `relative`,
                tablelayout: `relative`, padding: `5px`
              }} >
              <div class="priciples-font" color="#fff" style={{ fontFamily: `serif`, textAlign: "center", position: `relative` }}>
                <div>
                  100% eco-friendly containers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
    {/* </StyledImageWrapper> */}
    <StyledImageWrapper>
    </StyledImageWrapper>
    {/* </StyledContentWrapperLeft>
    </StyledWrapper>
</StyledBackgroundSection> */}
  </Layout>
)

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  // var i;
  // var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  // if (n > slides.length) {slideIndex = 1}    
  // if (n < 1) {slideIndex = slides.length}
  // for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";  
  // }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
}

export default IndexPage


