import { eachLocation } from "./Location.js"
import { useLocation } from "./LocationDataProvider.js"



export const LocationList = () => {

   const contentElement = document.querySelector(".locations")
    const locations = useLocation()
    let locationHTMLRepresention = ""
    for (const location of locations) {
        
        locationHTMLRepresention += eachLocation(location)
    }

    return contentElement.innerHTML += `
    <article>
    ${locationHTMLRepresention}
    </article>`
}