import { testimonialData } from "../data/testimonialData.js";

const testemonialCards =
    document.querySelector("#testemonialCards");

export function testimonialSlider() {

    testimonialData.forEach(testo => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <p>${testo.para}</p>

            <div class="card-image">
                <img src="${testo.image}">
            </div>

            <h4 class="testemonial-card-heading">
                ${testo.name}
            </h4>
        `;

        testemonialCards.append(card);
    });

    testimonialData.forEach(testo => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <p>${testo.para}</p>

            <div class="card-image">
                <img src="${testo.image}">
            </div>

            <h4 class="testemonial-card-heading">
                ${testo.name}
            </h4>
        `;

        testemonialCards.append(card);
    });
}