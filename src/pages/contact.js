import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { auto } from "eol"
import { relative } from "upath"

const ContactPage = () => (
    <Layout>
      <SEO title="Contact" /> 
      <div id = "divAbout"  style={{ paddingRight: `15px`, paddingLeft: `15px`, marginRight: auto, marginLeft:auto, maxWidth: `800px`, marginBottom: `1.0rem`}} >
        <div id = "title-wrapper" color = "#fff"  style = {{fontFamily: `serif`,fontSize:`74px`, padding: `50px`, textAlign: "center", position: relative }}>
        Contact us</div>
        <div id = "caption" style = {{fontFamily: `serif`,fontSize:`30px`,  textAlign: "center", position: relative }} >
        Let us know any concerns or feedback</div>
        <div id= "ContactContainer" style={{ margin: `0 auto`, maxWidth: 800, padding: `75px`}}>
          <div>
            <div style = {{float:`left`, borderColor: `red`}}>
              <span>Get in touch!</span>
            </div>
            
            <div style = {{float:`right`, borderColor: `red`}}>
              <span style = {{textAlign:`left`}}>Contact info</span>
            </div>
          </div>

          <div>
          <div id = "GetInTouchform" style = {{float:`left`, borderColor:`red`, border:`4px solid`}} >
          <div style={{ fontFamily: `serif` }}>
                <div style = {{fontSize: `20px`}}>647-983-5701<br></br></div>
                <div style = {{fontSize: `20px`}}>647-862-5701<br></br></div>
              </div>
          </div>
          <div id = "ContactUsform" style = {{float:`right`, borderColor:`red`}}>
              <div style={{ fontFamily: `serif` }}>
                <div style = {{fontSize: `20px`}}>647-983-5701<br></br></div>
                <div style = {{fontSize: `20px`}}>647-862-5701<br></br></div>
                <div style = {{fontSize: `20px`}}>southindianvillage@gmail.com<br></br></div>
              </div>
          </div>
          </div>
        </div>
      </div>
      
       
      
    </Layout>
  )
  
  export default ContactPage
  