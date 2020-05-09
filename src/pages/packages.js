import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { auto } from "eol"
import { relative } from "upath"

const PackagesPage = () => (
    <Layout>
      <SEO title="Packages" />
     
      <div id = "divAbout"  style={{ paddingRight: `15px`, paddingLeft: `15px`, marginRight: auto, marginLeft:auto, maxWidth: `800px`, marginBottom: `1.0rem`}} >      
        
      <div id = "title-wrapper" class = "title-font" color = "#fff"  style = {{fontFamily: `serif`, paddingTop: `100px`, textAlign: "center", position: relative }}>
        PRICING</div>
        <div id = "bullets" style = {{fontFamily: `serif`,fontSize:`20px`, paddingTop: `50px`, textAlign: "Left"}} >
        
        <ul class = "ul-bullets">
          <li class = "li-bullets">Lunch and dinner only $13.75 per day.</li>
          <li class = "li-bullets">Weekly $69 only.</li>
          <li class = "li-bullets">Food will be delivered 5 times per week at your door steps.</li>
          <li class = "li-bullets">Minimum 2 week registration required.</li>
          <li class = "li-bullets">Veg/Non veg option available at the same price.</li>
          <li class = "li-bullets">Non-Veg comes as 2 times per week.</li>     
          <li class = "li-bullets">Custom package? Please contact us</li>     
        </ul>
        </div>
      </div>
      
      
    </Layout>
  )
  
  export default PackagesPage
  