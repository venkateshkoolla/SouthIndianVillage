import { Link } from "gatsby"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { StyledFullScreenWrapper } from './SharedStyledComponents'
import Layout from "../components/layout"

const BackgroundHeader = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "BackgroundHeader.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      fluid={data.placeholderImage.childImageSharp.fluid}>
      <div class="title-font" style={{ padding: `50px 0 10px 0`, fontFamily: `myFirstFont` }}>
        {siteTitle}
      </div>
      <div className="caption-font" style={{ textDecoration: ``, fontsize: `25px` }}>
        Telugu tiffin services & catering
        </div>
      <div className="locations-font" style={{ marginBottom: `0px`, textDecoration: ``, fontsize: `10px` }}>
        Mississauga - Brampton
        </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundHeader)`
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
  `
export default StyledBackgroundSection