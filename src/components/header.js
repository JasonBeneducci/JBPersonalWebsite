import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `cyan`,
      marginBottom: `0`,
      marginTop: '0'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2%`,
      }}
    >
      <h1 style={{ margin: 0, color: 'black', textAlign: 'center' }}>
          {siteTitle}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Jason Beneducci`,
}

export default Header
