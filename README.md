# Portfolio with blog

Personal portfolio project built using Gatsby js and Stapi CMS. 

[Link to Live Website](https://ash-anthwal.netlify.app/)

The project uses the Jamstack architecture and is served as pre rendered static files for a smooth and performant user experience.

<hr/>

### PROJECT SETUP

In order to use complete project you will need:
1. Strapi Instance with all Contet-Types and at least single instance of data (for each content-type).
  - Check gatsby-config for more details.
3. Permissions for all content-type's

### Requirements

1. All components ready to go (including imports)
2. React Icons [Learn More](https://react-icons.github.io/react-icons/)

Usage: 
```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```
3. Make sure content-types exist in both Strapi application and gatsby-config.js, eg :

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```
