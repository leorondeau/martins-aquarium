export const Fish = (fish) => {
    return `
    <section class="fishList">
        <div class="fish card">
            <h4>Peppermint Anglefish</h4>
            <div><img class="fish__img" src="${fish.img}" /></div>
            <div class="fish__name"> Name: ${fish.name}</div>
            <div>Species: ${fish.species}</div>
            <div>Length: ${fish.length}</div>
            <div>Diet: ${fish.diet}</div>
            <div class="location"> Location: ${fish.location}</div>

        </div>
    </section>
    `}