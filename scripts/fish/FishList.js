import { mostHolyFish , soldierFish , regularFish } from './FishDataProvider.js'
import { Fish } from   './Fish.js'




export const FishList = () => {
    const contentElement = document.querySelector(".fishList")
    
    const fishes = mostHolyFish()

    let holyHTMLRepresentations = ""
    
    for (const fish of fishes) {
        
        holyHTMLRepresentations += Fish(fish)
    }

    const soldierFishes = soldierFish()
    let soldierHTMLRepresentations = ""
    
    for (const fish of soldierFishes) {

        soldierHTMLRepresentations += Fish(fish)
    }

    const regularFishes = regularFish()
    let regularHTMLRepresentations = ""
    
    for (const fish of regularFishes) {
        
        regularHTMLRepresentations += Fish(fish)
    }


    return contentElement.innerHTML += `
    <article class="fishList">
        ${holyHTMLRepresentations}
        ${soldierHTMLRepresentations}
        ${regularHTMLRepresentations}
        </article>`
}



