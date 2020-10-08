import { useTip } from "./TipDataProvider.js"
import { Tips } from "./Tip.js"



export const TipList = () => {
    const contentElement = document.querySelector(".tank__clean")
    const tips = useTip()

    let tipHTMLRepresentaion = ""

    for (const tip of tips) {
        tipHTMLRepresentaion += Tips(tip)
    }

    contentElement.innerHTML += `
    <article class="tank__clean">
        ${tipHTMLRepresentaion}
        </article>
        `
}