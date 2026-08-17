import { foods } from "../data/foods.js";

const slider = document.getElementById("imageSlider");
const mainImage = document.getElementById("mainImage");

export function circleSlider() {

    mainImage.src = foods[0].image;

    foods.forEach((food, index) => {

        const box = document.createElement("div");

        box.className = "mini-image-box flex";

        if (index === 0) {
            box.classList.add("active");
        }

        box.innerHTML = `
            <div class="mini-image">
                <img src="${food.image}">
            </div>
            <h4>${food.name}</h4>
        `;

        box.addEventListener("click", () => {

            mainImage.src = food.image;

            document.querySelectorAll(".mini-image-box")
                .forEach(card => {
                    card.classList.remove("active");
                });

            box.classList.add("active");
        });

        slider.appendChild(box);
    });
}