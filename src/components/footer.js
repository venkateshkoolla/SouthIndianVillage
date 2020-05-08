import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer  style={{background: `#030303`, marginBottom: `1.45rem`, color: `#f5ce42`}}>
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`}}>
    <div float = "left" style={{ margin: `0 auto`, maxWidth: 400, borderBottom: `1px solid`}}>
    <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ fontFamily: `myFirstFont`, fontSize: `50px`, color: `#f5ce42`, textDecoration: `none`,textAlign: `center`
                 }}>
          {siteTitle}
        </Link>
      </h1>
      <div Align="left">Telugu tiffin services & Catering</div>
    </div>
    <div float = "left" style={{ margin: `0 auto`, maxWidth: 400}}>
    <div id = "phone" style = {{float:`left`}} >647-862-5701</div>
    {/* <div id = "phone" style = {{float:`left`}} >647-983-5701</div> */}
    <div id = "phone" style = {{float:`right`}}>southindianvillage.ca@gmail.com</div>

    </div>
      
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
