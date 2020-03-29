import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TiffinServiceImage from "../components/tiffinserviceimage"

const ContactPage = () => (
    <Layout>
    <div class = "navbar" > 
      <SEO title="Tiffin service" />
      
      {/* <p>Welcome to your new Gatsby site.</p> */}
      {/* <p>Now go build something great.</p> */}
      <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
       <TiffinServiceImage/>       
      </div>
      </div>
    </Layout>
  )
  
  export default ContactPage
  