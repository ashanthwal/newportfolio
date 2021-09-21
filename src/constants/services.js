import React from "react"
import { FaCode } from "react-icons/fa"
import { DiDatabase, DiAptana } from "react-icons/di"

export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Frontend",
    text: (
      <ul>
        <li>HTML</li>
        <li>CSS/SASS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Nextjs/Gatsbyjs</li>
        <li>Redux</li>
      </ul>
    ),
  },
  {
    id: 2,
    icon: <DiDatabase className="service-icon" />,
    title: "Backend",
    text: (
      <ul>
        <li>Node JS</li>
        <li>Express</li>
        <li>Mongo DB</li>
        <li>SQL</li>
        <li>Django/Flask</li>
        
      </ul>
    ),
  },
  {
    id: 3,
    icon: <DiAptana className="service-icon" />,
    title: "Other technologies",
    text: (
      <ul>
        <li>AJAX</li>
        <li>GraphQL</li>
        <li>REST APIs</li>
        <li>Git/Github</li>
        <li>Cloud Platforms</li>
        <li>Unit Testing/ Debugging tools</li>
      </ul>
    ),
  },
]
