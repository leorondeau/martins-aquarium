export const Fish = (fish) => {
    return `
   
        <div class="fish card">
            <h4>${fish.type}</h4>
            <div><img class="fish__img" src="${fish.img}" /></div>
            <div class="fish__name"> Name: ${fish.name}</div>
            <div>Species: ${fish.species}</div>
            <div>Length: ${fish.length} inches</div>
            <div>Diet: ${fish.diet}</div>
            <div class="location"> Location: ${fish.location}</div>

        </div>
    
    `}

    