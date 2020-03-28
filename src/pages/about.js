import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { auto } from "eol"
import { relative } from "upath"

const AboutPage = () => (
    <Layout>
      <SEO title="About" />
      <div style={{maxWidth: `800px`, wordSpacing: `100px` , padding: `10px`}}>
      <ul>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/about/" >About</Link></li>
      <li><Link to="/menu/">Menu</Link></li>
      <li><Link to="/packages/">Packages</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>     
      </div>
      
      {/* <p>Welcome to your new Gatsby site.</p> */}
      {/* <p>Now go build something great.</p> */}
      <div id = "divAbout"  style={{ paddingRight: `15px`, paddingLeft: `15px`, marginRight: auto, marginLeft:auto, maxWidth: `800px`, marginBottom: `1.45rem`}} >
        <div id = "title-wrapper" color = "#fff"  style = {{fontFamily: `serif`,fontSize:`74px`, padding: `140px`, textAlign: "center", position: relative }}>
        ABOUT</div>
        <div id = "caption" fontSize = "15px">A Complete healthy balanced diet</div>
        <div id = "divStory"  style={{ paddingRight: `15px`, paddingLeft: `15px`, marginRight: auto, marginLeft:auto, maxWidth: `800px`, marginBottom: `1.45rem`}} >
        <div id = "title-wrapper" color = "#fff"  style = {{fontFamily: `serif`,fontSize:`74px`, padding: `140px`, textAlign: "center", position: relative }}>
        Our Story</div>
      </div>
      </div>
      
    </Layout>
  )
  
  export default AboutPage
  