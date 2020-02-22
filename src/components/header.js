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
      className="d-flex flex-column"
      style={{
        color: "#fff",
        margin: `0 auto`,
        maxWidth: 80,
        backgroundColor: "#1c1e1f",
        padding: "17px 20px",
      }}
    >
      <FontAwesomeIcon className="my-5 active" icon={faUserAlt} />
      <FontAwesomeIcon className="my-5" icon={faIdCard} />
      <FontAwesomeIcon className="my-5" icon={faPenSquare} />
      <FontAwesomeIcon className="my-5" icon={faGlasses} />
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
