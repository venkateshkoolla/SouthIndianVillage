import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TiffinServiceImage from "../components/tiffinserviceimage"
import { relative } from "upath"

const ContactPage = () => (
    <Layout>
    <div class = "navbar" > 
      <SEO title="Tiffin service" />
      
      <div id = "title-wrapper" class = "title-font" color = "#fff"  style = {{fontFamily: `serif`, padding: `50px`, textAlign: "center", position: relative }}>
        Tiffin services</div>
      <div style={{ maxWidth: `600px`, padding:`20px`, marginLeft:`3rem`, marginRight:`1.45rem`, marginBottom: `1.45rem` }}>
       <TiffinServiceImage/>       
      </div>
      </div>
    </Layout>
  )
  
  export default ContactPage
  