const footerSection = document.querySelector(".footer")

const footerContent = /*html*/ `
<div class="gridOuterFooter">
    <article class="footerHeadline">
        <h3>${footer.headline}</h3>
        <h2>
            ${footer.subHeadline.slice(0, 4)}
            <br>
            ${footer.subHeadline.slice(5, 12)}
            <br>
            ${footer.subHeadline.slice(13, 18)}
            <br>
            ${footer.subHeadline.slice(19, 27)}
        </h2>
    </article>
    <div class="gridInnerFooter">
        ${footer.section.map((elm)=> {
            return /*html*/ `
            <article>
                <h3>${elm.sectionName}</h3>
                <ul>
                    ${elm.sectionList.map((listElm) => {
                        return /*html*/`
                        <li>
                            <a href="${listElm.url}">${listElm.name}</a>
                        </li>
                        `
                    }).join("")}
                </ul>
            </article>
            `
        }).join("")}
    </div>
</div>
<article class="footerBottom">
    <h4>${footer.copyright}</h4>
    <div class="footerBottomGrid">
        ${footer.bottomList.map((elm)=>{
            return /*html*/ `<a href="${elm.url}">${elm.name}</a>`
        }).join("")}
    </div>
</article>
`

footerSection.insertAdjacentHTML("afterbegin", footerContent)