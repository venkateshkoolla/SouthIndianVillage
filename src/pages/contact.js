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
        <div id = "title-wrapper" class = "title-font" color = "#fff"  style = {{fontFamily: `serif`, paddingTop: `100px`, textAlign: "center", position: relative }}>
        Contact us</div>
        <div id = "caption" style = {{fontFamily: `serif`,fontSize:`20px`,paddingTop: `50px`,  textAlign: "center", position: relative }} >
        Let us know any concerns or feedback</div>
        <div  id= "ContactContainer" class = "parent"  style={{ margin: `0 auto`, maxWidth: `800px`, width: `100%`,
         marginTop : `150Px` , padding: `0px` }}>
        <div class = "child" style = {{width : `50%` , float : `left`}}>
        <div id ="left-container" style = {{  position : relative, margin : `5px` }}>
            <div class = "contact-title-font" style = {{borderColor: `red`, position : `relative`  ,fontFamily: `serif`,
             marginBottom: `50px`, textAlign : `center` }}>
              <span>Contact Info!</span>
            </div>
            
            <div id = "ContactInfoform" 
             style = {{ fontFamily: `serif`, fontsize: `20px`, position:`relative` ,
              display: `table`, tablelayout :`relative` }} >
              <div style={{ fontFamily: `serif` }}>                
                <div >647-862-5701<br></br></div>
                <div>647-983-5701<br></br></div>
                <div>southindianvillage.ca@gmail.com<br></br></div>
              </div>
            </div>
          </div> 
          </div>
          <div class = "child" style = {{ width : `50%` , float : `left`}}>
          <div id ="right-container" style = {{ margin : `5px` }}>
            <div class = "contact-title-font" style = {{borderColor: `red`, position : `relative`, 
            fontFamily: `serif`,  textAlign: `center`}}>
            <span>Get in touch!</span>
            </div>
            <div style ={{marginTop : `20px`}}>
            <div id = "GetInTouchform" 
            style = {{ borderColor:`red`, border:`4px solid`,
             fontFamily: `serif`, fontsize: `20px`, position:`relative`,
              tablelayout :`relative`, padding: `5px`}} >
              <div>
              <form name = "contact" method ="post" data-netlify="true">
                <div id = "form-group" position = "relative">
                  <div>
                    <div id = "name" >
                      <div>
                        <input type ="text" style = {{flex:1, width: `100%`}} name = "username" 
                        placeholder = "Name"  required = "true" />
                      </div>
                    </div>
                  </div>
                  <div id = "email" class = "contact-fields">
                    <div>
                      <input type ="text" style = {{width : `100%`}} name = "Email" placeholder = "Email" required = "true" />
                    </div>
                  </div>
                  <div id = "phonenumber" class = "contact-fields">
                    <span>
                      <input type ="text" style = {{width : `100%`}} placeholder = "phone number" name = "Phone number" required = "true" />
                    </span>
                  </div>
                  <div id ="textArea" class = "contact-fields">
                    <span>
                      <textarea name = "message" style = {{width : `100%`}} cols = "20" rows = "3" placeholder = "message"></textarea>
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
        </div>   
        </div>
      </div>
      
       
      
    </Layout>
  )
  
  export default ContactPage
  