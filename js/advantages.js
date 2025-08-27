const advantagesSection = document.querySelector(".advantages")

const advantagesContent = /*html*/ `
<h2>Our Advantages</h2>
<div>
    ${advantages.map((elm)=>{
        return /*html*/ `
        <article>
            <figure>
                <img src=${elm.icon} alt="icon">
            </figure>
            <h3>${elm.headline}</h3>
            <p>${elm.text}</p>
        </article>
        `
    }).join("")}
</div>
`

advantagesSection.insertAdjacentHTML("afterbegin", advantagesContent)