const sitesSection = document.querySelector(".sites")

const sitesContent = /*html*/ `
    <article class="sitesTitle">
        <h2>${sites.headline}</h2>
        <p>${sites.text}</p>
        <button><img src=${sites.btnicon}> Start</button>
    </article>
    <div class="gridSites">
        ${sites.places.map((elm)=>{
            return /*html*/ `
                <article>
                    <figure>
                        <img src=${elm.img} alt=${elm.name + " image"}>
                    </figure>
                    <h3>${elm.name}</h3>
                    <p>${elm.city}</p>
                    <a href="#">View the Site</a>
                </article>
            `
        }).join("")}
    </div>
`

sitesSection.insertAdjacentHTML("afterbegin", sitesContent)