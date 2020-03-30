/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import Image from "../components/image"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/background"
import styled from 'styled-components'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{margin: `0 auto`, maxWidth: `800px`,  padding: `0 1.0875rem 1.45rem`, color: '#f5ce42', fontFamily: `myFirstFont`, fontSize: `25px` }}>
      {/* <div > */}
      <div className = "navbar">
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about/" >About</Link></li>
          <div class="sub-nav">
          <button class="sub-nav-btn"><Link to="/Menu/" >Menu</Link> <i class="fa fa-caret-down"></i></button>
            <div class="sub-nav-content" >
                <Link to="/tiffinservice/">Tiffin service</Link>
                <Link to="/catering/">Catering</Link>
            </div>
        </div>
          <li><Link to="/packages/">Packages</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>   
      {/* </div>  */}
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
        
      </div>
      </div>   
<Footer siteTitle={data.site.siteMetadata.title}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
