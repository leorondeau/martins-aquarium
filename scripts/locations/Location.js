export const eachLocation = (location) => {
    return `
    <section>
        <h4 class="location__name">${location.name}</h4>
        <div><img class="location__img" src="${location.img}" /></div>
        <div>"${location.quote}"</div>
        <div>-${location.author}</div>
    </section>
    `
}