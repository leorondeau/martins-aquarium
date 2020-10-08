export const eachLocation = (location) => {
    return `
    <section>
        <div><img class="location__img" src="${location.img}" /></div>
        <div>${location.name}</div>
        <div>"${location.quote}"</div>
        <div>-${location.author}</div>
    </section>
    `
}