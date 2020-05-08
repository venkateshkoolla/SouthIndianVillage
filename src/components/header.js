import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import Layout from "../components/layout"
import StyledBackgroundSection from "../components/background"
import BackgroundImage from 'gatsby-background-image'


const Header = ({ siteTitle }) => (
  <header
    style={{ background: `#030303`, marginBottom: `1.45rem`, color: `#f5ce42` }}  >
    <div style={{ margin: `0 auto`, maxWidth: 960}}>
      <div
        style={{
          margin: 0,
          color: `#f5ce42`,
          textDecoration: `none`,
          textAlign: `center`,
          position: `relative`,
        }}>
        <StyledBackgroundSection siteTitle={siteTitle}>
        </StyledBackgroundSection>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
