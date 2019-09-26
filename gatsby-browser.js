exports.onRouteUpdate = ({ location, prevLocation }) => {
   if (prevLocation) {
       const skipLink = document.querySelector('.routeSkipLink') // find the element with the class
       if (skipLink) { // if it exists...
           skipLink.focus() // focus on it
       }
   }
}