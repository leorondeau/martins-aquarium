import { useFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js" 

export const FishList = () => {
    const contentElement = document.querySelector(".large__container")
    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
       const allFish = Fish(fish)
        fishHTMLRepresentations += allFish
    }
    return contentElement.innerHTML += `
        <article class="fishList">
        ${fishHTMLRepresentations}
        </article>`
}



