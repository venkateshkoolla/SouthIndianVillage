/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import styled from 'styled-components'

const Navigation = styled.nav`
height: 10vh;
  display: flex;
  list-style-type: none;
  overflow: hidden;  
  position: relative;
  justify-content: space-between;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  z-index: 2;
  align-self: center;

  @media (max-width: 500px) {
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }`
const Toggle = styled.div`
display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 0vw;

  @media (max-width: 500px) {
    display: flex;
  }`
const Navbox = styled.div`
display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: #889933;
  max-width: 100%;
  overflow: hidden;
  list-style-type: none;

  @media (max-width: 500px) {
    flex-direction: column;
    position: fixed;
    width: 50%;
    justify-content: flex-start;
    padding-top: 0vh;
    background-color: #333;
    transition: all 0.3s ease-in;
    top: 34vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }`
const Hamburger = styled.div`
background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }`

const Layout = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

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

      <div style={{ margin: `0 auto`, maxWidth: `800px`, padding: `0 1.0875rem 1.45rem`, color: '#f5ce42', fontFamily: `'Merriweather Sans','sans-serif'`, fontSize: `20px` }}>
        <div>
          <Navigation>
            <Toggle
              navbarOpen={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}>
              {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
              <Navbox>
                <ul>
                  {/* <button class="button-Navbar"> 🞬 </button> */}
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/about/" >About</Link></li>
                  <li><Link to="/tiffinservice/" >Tiffin services</Link></li>
                  <li><Link to="/catering/" >Catering</Link></li>
                  <li><Link to="/packages/">Packages</Link></li>
                  <li><Link to="/contact/">Contact</Link></li>
                </ul>
              </Navbox>
            ) : (
                <Navbox open>
                  <ul >
                    {/* <button class="button-Navbar"> 🞬 </button> */}
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about/" >About</Link></li>
                    <li><Link to="/tiffinservice/" >Tiffin services</Link></li>
                    <li><Link to="/catering/" >Catering</Link></li>
                    <li><Link to="/packages/">Packages</Link></li>
                    <li><Link to="/contact/">Contact</Link></li>
                  </ul>
                </Navbox>
              )}

          </Navigation>
        </div>
        <div>
          <main style = {{backgroundColor: `#333`}}>{children}</main>
        </div>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
