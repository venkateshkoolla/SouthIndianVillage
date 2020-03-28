import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/background"
import styled from 'styled-components'

import {
  StyledContentWrapperLeft,
  StyledImageWrapper,
  StyledLink,
  StyledWrapper,
} from '../components/SharedStyledComponents'

const IndexPage = () => (
  <Layout>
  {/* <StyledBackgroundSection>
  <StyledWrapper>
  <StyledContentWrapperLeft> */}
  {/* <StyledImageWrapper> */}
    <div class = "navbar" > 
    <SEO title="Home" />
      <div >
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about/" >About</Link></li>
          <div class="subnav">
          <button class="subnav-link"><Link to="/Menu/" >Menu</Link> <i class="fa fa-caret-down"></i></button>
            <div class="subnav-content" >
                <Link to="/tiffinservice/">Tiffin service</Link>
                <Link to="/catering/">Catering</Link>
            </div>
        </div>
          <li><Link to="/packages/">Packages</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>
      
      </div> 
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>  
    </div>
    {/* </StyledImageWrapper> */}
    <StyledImageWrapper>
            </StyledImageWrapper>
    {/* </StyledContentWrapperLeft>
    </StyledWrapper>
</StyledBackgroundSection> */}
  </Layout>
)

export default IndexPage
