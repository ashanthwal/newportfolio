import React from "react"
import { Link } from "gatsby"
import "./Hero.css"


function Hero() {

  


  return (
    
    <>
      <div className="header">
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "Lato" }}>Web Design | Development</h2>
          <h4 style={{ marginTop: "3.5rem", fontSize: "1.3rem" }}>
            Hi, I am Ash...
          </h4>
          <h4 style={{ fontSize: "1.3rem" }}>
            I Develop Beautiful and performant Web Applications.
          </h4>


        </div>
      </div>


      <Link style={{ textAlign: "center" }} to="/contact" className="btn">
        Contact Me
      </Link>
    </>
  )
}

export default Hero
