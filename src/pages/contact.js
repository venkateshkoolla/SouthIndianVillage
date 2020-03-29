import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
      <SEO title="Contact" />      
            <div style={{ maxWidth: `800px`, marginBottom: `1.45rem`,fontFamily: `serif` }}>
       <div style = {{fontSize: `50px`, padding: `10px`}}>Contact<br></br></div>
       <div style = {{fontSize: `20px`, padding: `10px`}}>647-983-5701<br></br></div>
       <div style = {{fontSize: `20px`, padding: `10px`}}>647-862-5701<br></br></div>
       <div style = {{fontSize: `20px`, padding: `10px`}}>southindianvillage@gmail.com<br></br></div>

      </div>
      
    </Layout>
  )
  
  export default ContactPage
  