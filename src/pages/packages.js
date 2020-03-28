import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PackagesPage = () => (
    <Layout>
      <SEO title="Packages" />
      <div style={{maxWidth: `800px`, wordSpacing: `100px` , padding: `10px`}}>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about/" >About</Link></li>
        <li><Link to="/menu/">Menu</Link></li>
        <li><Link to="/packages/">Packages</Link></li>
        <li><Link to="/contact/">Contact</Link></li>
      </ul>     
  </div>
      
      <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}PACKAGES
      </div>
      
    </Layout>
  )
  
  export default PackagesPage
  