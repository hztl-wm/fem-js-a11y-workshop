import React from "react" // import what?!
import { css } from "@emotion/core" // this library is already installed in this app allows you to write styles in this file

// template literal
const styles = css` 
    .routeSkipHeading {
        position: relative; 
    }
    .routeSkipLink {
        display: inline-block;
        margin-left: -0.75em;
        opacity: 0;
        position: absolute;
        text-decoration: none;
    }
    .routeSkipLink:before {
        content: '⇽';
        display: block;
    }
    .routeSkipLink:focus,
    .routeSkipLink:hover {
        opacity: 1;
    }
`

// start of component
const RouteHeading = ({level = 1, targetID, children}) => { // passed in a level with a start value of 1, looking for a targetID, and a children
    const Heading = `h${level}`; // this will use whatever 'h'level element to match the heading it is attached to
    return (
        <Heading css={styles} className="routeSkipHeading"> {/* pass styles established above, add className from above */}
            <a href={`#${targetID}`} // will match any element based on its ID, better pass in a valid ID!
               id="skip-main" // this is an id...
               className="routeSkipLink" // className that matches above css
               aria-label={`back to ${targetID}`} // accessibile attribute? yep.
               title={`Skip to ${targetID}`}> {/* more accessibility! */}
            </a>
            {children} {/* pass the children in */}
        </Heading>
    )
}
export default RouteHeading
// export so you can use it
