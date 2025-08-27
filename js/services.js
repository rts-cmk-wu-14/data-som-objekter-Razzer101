const servicesSection = document.querySelector(".services")

const servicesContent = services.map((elm) => {
    return /*html*/ `
<article>
    <figure>
        <img src=${elm.illustration} alt="illustration image">
    </figure>
    <h3>${elm.headline}</h3>
    <p>${elm.text}</p>
    <a href="#">${elm.linktext}</a>
</article>
`
}).join("")

servicesSection.insertAdjacentHTML("afterbegin", servicesContent)