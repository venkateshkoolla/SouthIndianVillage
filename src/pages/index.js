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
    {/* <div class = "navbar" >  */}
    <SEO title="Home" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
      <Image />
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

export default IndexPage
