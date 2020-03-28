import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { StyledFullScreenWrapper } from './SharedStyledComponents'

// import { StyledFullScreenWrapper } from './SharedStyledComponents'

const BackgroundSection = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "seamless-bg-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
            return (
              <StyledFullScreenWrapper>
              <StyledSymetryWrapper>
              <BackgroundImage
                Tag="section"
                //className={className}
                fluid={data.placeholderImage.childImageSharp.fluid}
                backgroundColor={`#040e18`}
              >
                <h2>gatsby-background-image</h2>
              </BackgroundImage>
              </StyledSymetryWrapper>
              <StyledSymetryWrapper>
        {/* <StyledWelcomeImage
          fluid={data.placeholderImage.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          objectFit="cover"
          objectPosition="50% 50%"
        /> */}
      </StyledSymetryWrapper>
              </StyledFullScreenWrapper>

            )
}

  const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
  `
  const StyledSymetryWrapper = styled.div`
  width: 50vw;
  height: 100%;
  overflow: hidden;
  `

  const StyledWelcomeImage = styled(Img)`
  width: 100vw;
  height: auto;
`

  export default StyledBackgroundSection