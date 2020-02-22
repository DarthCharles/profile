import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUserAlt,
  faIdCard,
  faPenSquare,
  faGlasses,
} from "@fortawesome/free-solid-svg-icons"

const Header = () => (
  <header>
    <div
      className="d-flex flex-row flex-md-column justify-content-around p-4"
      style={{
        color: "#fff",
        margin: `0 auto`,
        backgroundColor: "#1c1e1f",
        height: "100%",
      }}
    >
      <FontAwesomeIcon className="my-md-4 active" icon={faUserAlt} />
      <FontAwesomeIcon className="my-md-4" icon={faIdCard} />
      <FontAwesomeIcon className="my-md-4" icon={faPenSquare} />
      <FontAwesomeIcon className="my-md-4" icon={faGlasses} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
