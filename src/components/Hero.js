import React from "react"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <header>
      <div
        style={{
          textAlign: "center",
          marginTop: "10rem",
        }}
      >
        <div>
          <h2 style={{ fontFamily: "Lato" }}>Web Design | Development</h2>
          <h4 style={{ marginTop: "2.5rem" }}>Hi, I am Ash... </h4>
          <h4>
            I Develop Beautiful and Performant Web Applications.
          </h4>
          <span
              class="txt-type"
              data-wait="2000"
              data-words='["Web Design", "Developement"," & Computers"]'
            ></span>

          <Link to="/contact" className="btn">
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Hero
