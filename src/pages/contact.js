import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
      <SEO title="Contact" />
      <div style={{maxWidth: `800px`, wordSpacing: `100px` , padding: `10px`}}>
      <ul>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/about/" >About</Link></li>
      <div class="subnav">
        <li class="subnavbtn"><Link to="/Menu/" >Menu</Link> <i class="fa fa-caret-down"></i></li>
            <div class="subnav-content">
                <Link to="/tiffinservice/">Tiffin service</Link>
                <Link to="/catering/">Catering</Link>
            </div>
        </div>
      {/* <li><Link to="/menu/">Menu</Link></li> */}
      <li><Link to="/packages/">Packages</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>     
      </div>
      
      {/* <p>Welcome to your new Gatsby site.</p> */}
      {/* <p>Now go build something great.</p> */}
      <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
       <h1>CONTACT</h1>
       <h3>647-983-5701</h3>
       <h3>647-862-5701</h3>
       <h3>southindianvillage@gmail.com</h3>
      </div>
      
    </Layout>
  )
  
  export default ContactPage
  