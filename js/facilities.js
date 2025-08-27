const facilitiesSection = document.querySelector(".facilities")

const facilitiesContent = /*html*/ `
<h2>${facilities.headline}</h2>
<div>
    ${facilities.options.map((elm)=>{
        return /*html*/ `
        <article>
            <figure>
                <img src=${elm.icon} alt="head image">
            </figure>
            <h3>${elm.headline}</h3>
            <p>${elm.text}</p>
            <a href="#">Show me more</a>
        </article>
        `
    }).join("")}
</div>
`

facilitiesSection.insertAdjacentHTML("afterbegin", facilitiesContent)