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
      <div id = "divAbout"  style={{ paddingRight: `15px`, paddingLeft: `15px`, marginLeft:auto, marginRight: auto, marginLeft:auto, maxWidth: `800px`, marginBottom: `1.0rem`}} >
        <div id = "title-wrapper" color = "#fff"  style = {{fontFamily: `serif`,fontSize:`65px`, paddingTop: `140px`, textAlign: "center", position: relative }}>
        ABOUT</div>
        <div id = "caption" style = {{fontFamily: `serif`,fontSize:`20px`, paddingTop: `50px`, textAlign: "center", position: relative }} >
        zero preservatives, zero frozen, zero toxic</div>

        <div id = "caption" style = {{fontFamily: `serif`,fontSize:`20px`, paddingTop: `50px`, textAlign: "center", position: relative }} >
        SouthIndianVillage is Toronto's high end premium tiffin services which prepares daily fresh home kitchen food.
        </div>

        <div id = "bullets" style = {{fontFamily: `serif`,fontSize:`20px`, paddingTop: `25px`, textAlign: "Left", position : "relative"}} >
        
        <ul class = "ul-bullets">
          <li class = "li-bullets">Very unique menu in all over GTA</li>
          <li class = "li-bullets">Purely back home style</li>
          <li class = "li-bullets">No plastic or foam containers at all. We are proud to be 100 % eco friendly</li>
          <li class = "li-bullets">Weekly/Monthly services available for students/ professionals.</li>          
          <li class = "li-bullets">Open to customize the menu according to your taste. It s quite normal every one get bored with same food at some point.</li>
          <li class = "li-bullets">Zero chemicals Zero frozen is our fundamental</li>          
        </ul>
        </div>
        

        <div id = "divStory"  style={{ marginRight: auto, padding : `30px`, marginLeft:auto, marginTop : `25px`, maxWidth: `800px`, marginBottom: `1.0rem`}} >
        <div id = "title-wrapper" color = "#fff"  style = {{fontFamily: `serif`,fontSize:`50px`, paddingLeft: `5%`, textAlign: "center", position: relative }}>
        Our Story
        </div>
        <div id = "title-wrapper" color = "#fff"  style = {{fontFamily: `serif`,fontSize:`20px`, textAlign: "left", position: relative, marginTop : `80px`,}}>
        We are inspired by a indian traditional culture where food it self is everything. Our mission is to to serve high end quality, 
        hygiene and balanced diet in GTA. We are very unique in providing very old balanced diet like our most famous ragi muddha, ragi roti,
        Jowar roti, and ancient grain millet recipes .<br></br>
        <br></br>
        We are a home grown business and every ingredient that we use is made from our home kitchen. We promise to give the back home
        feeling that many of us missing in GTA.        

        </div>
      </div>
      </div>
      
    </Layout>
  )
  
  export default AboutPage
  