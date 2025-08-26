const heroSection = document.querySelector(".hero")
const heroHeadlineNewArray = hero.headline.split("save your time")

const heroContent = /*html*/ `
<figure>
    <img src=${hero.image} alt="head image">
    <figcaption class="heroFig">
        <h1>${heroHeadlineNewArray[0]}<span class="orangeText">${hero.headline.slice(19, 34)}</span>${heroHeadlineNewArray[1]}</h1>
        <p>${hero.copy}</p>
        <button><img src=${hero.icon} alt="head image">Explore</button>
    </figcaption>
</figure>
`

heroSection.insertAdjacentHTML("afterbegin", heroContent)