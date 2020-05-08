import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Header = ({ siteTitle }) => (
  <header
    style={{ background: `#030303`, marginBottom: `1.45rem`, color: `#f5ce42` }}  >
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, paddingBottom: `10px` }}>

      <div
        style={{
          margin: 0,
          color: `#f5ce42`,
          textDecoration: `none`,
          textAlign: `center`,
          position: `relative`,
        }}>
        <div class="title-font" style={{ padding: `20px`, fontFamily: `myFirstFont` }}>
          {siteTitle}
        </div>
        <div className="caption-font" style={{ textDecoration: ``, fontsize: `25px` }}>
          Telugu tiffin services & catering
        </div>
      </div>
    </div>
    <div className="locations-font" style={{ marginBottom: `0px`, textDecoration: ``, fontsize: `10px` }}>
      Mississauga - Brampton
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
