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
      
      {/* <p>Welcome to your new Gatsby site.</p> */}
      {/* <p>Now go build something great.</p> */}
      <div id = "divAbout"  style={{ paddingRight: `15px`, paddingLeft: `15px`, marginRight: auto, marginLeft:auto, maxWidth: `800px`, marginBottom: `1.0rem`}} >
        <div id = "title-wrapper" color = "#fff"  style = {{fontFamily: `serif`,fontSize:`74px`, padding: `140px`, textAlign: "center", position: relative }}>
        ABOUT</div>
        <div id = "caption" style = {{fontFamily: `serif`,fontSize:`30px`, padding: `140px`, textAlign: "center", position: relative }} >A Complete healthy balanced diet</div>
        <div id = "divStory"  style={{ paddingRight: `15px`, paddingLeft: `15px`, marginRight: auto, marginLeft:auto, maxWidth: `800px`, marginBottom: `1.45rem`}} >
        <div id = "title-wrapper" color = "#fff"  style = {{fontFamily: `serif`,fontSize:`74px`, padding: `140px`, textAlign: "center", position: relative }}>
        Our Story
        </div>
        <div id = "title-wrapper" color = "#fff"  style = {{fontFamily: `serif`,fontSize:`20px`, textAlign: "center", position: relative }}>
        We are inspired by a indian traditional culture where food it self is everything. Our mission is to to serve high end quality
    , hygiene and balanced diet in GTA. We are very unique in providing very old balanced diet like our most famous ragi muddha, ragi roti,
    Jowar roti, and ancient grain millet recipes 
        </div>
      </div>
      </div>
      
    </Layout>
  )
  
  export default AboutPage
  