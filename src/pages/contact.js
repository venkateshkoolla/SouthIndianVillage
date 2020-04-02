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
      <div id = "divContact"  style={{ paddingRight: `15px`, paddingLeft: `15px`, marginRight: auto, marginLeft:auto, maxWidth: `800px`, marginBottom: `1.0rem`}} >
        <div id = "title-wrapper" class = "title-font" color = "#fff"  style = {{fontFamily: `serif`, padding: `100px`, textAlign: "center", position: relative }}>
        Contact us</div>
        <div id = "caption" style = {{fontFamily: `serif`,fontSize:`20px`,  textAlign: "center", position: relative }} >
        Let us know any concerns or feedback</div>
        <div id= "ContactContainer"  style={{ margin: `0 auto`, maxWidth: 800, marginTop : `250Px`}}>
          <div id ="left-container" style = {{display : `table-cell`, }}>
            <div style = {{borderColor: `red`, position : `relative`, display: `table`, fontFamily: `serif`, fontSize : `40px`}}>
              <span>Get in touch!</span>
            </div>
            <div style ={{marginTop : `20px`}}>
            <div id = "GetInTouchform" 
            style = {{ borderColor:`red`, border:`4px solid`,
             fontFamily: `serif`, fontsize: `20px`, position:`relative` , display: `table`, tablelayout :`relative`, padding: `25px`}} >
              <div>
              <form name = "contact" method ="post" data-netlify="true">
                <div id = "form-group">
                  <div id = "name">
                    <div id = "username-symbol">
                      <i>Name:</i>
                    </div>
                    <span>
                      <input type ="text" name = "username" placeholder = "Name"  required = "true"/>
                    </span>
                  </div>
                  <div id = "email">
                    <div id = "email-symbol">
                      <i>Email:</i>
                    </div>
                    <span>
                      <input type ="text" name = "Email" placeholder = "Email" required = "true" />
                    </span>
                  </div>
                  <div id = "phonenumber">
                    <div id = "phone-symbol">
                      <i>PhoneNumber:</i>
                    </div>
                    <span>
                      <input type ="text" placeholder = "phone number" name = "Phone number" required = "true" />
                    </span>
                  </div>
                  <div id ="textArea">
                    <span>
                      <textarea name = "message" cols = "20" rows = "3" placeholder = "message" width = "80%"></textarea>
                    </span>
                  </div>
                  <div id = "btn-submit">
                    <span>
                      <input type ="submit" value = "send feedback"></input>
                    </span>
                  </div>
                </div>
                </form>
              </div>
          </div>
          </div>
          </div>
          <div id ="right-container" style = {{display : `table-cell`, paddingLeft:`60px` }}>
            <div style = {{borderColor: `red`, position : `relative` , display: `table` ,fontFamily: `serif`, fontSize: `40px`, marginBottom: `50px`}}>
              <span>Contact Info!</span>
            </div>
            
            <div id = "ContactInfoform" 
             style = {{ borderColor:`red`, 
             fontFamily: `serif`, fontsize: `20px`, position:`relative` , display: `table`, tablelayout :`relative` }} >
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
  