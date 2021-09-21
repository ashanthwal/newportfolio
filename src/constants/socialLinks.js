import React from "react"
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon zoom"></FaLinkedin>,
    url: "https://www.linkedin.com/in/ashutosh-ash-anthwal-50782b1b0",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon zoom"></FaGithubSquare>,
    url: "https://github.com/ashanthwal",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon zoom"></FaInstagramSquare>,
    url: "https://www.instagram.com/ashanthwal",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
