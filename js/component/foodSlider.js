import { foodMenu } from "../data/foodMenu.js";

const slideCards = document.getElementById("sliderCards");
const slidePrev = document.getElementById("prev");
const slideNext = document.getElementById("next");

function foodmenuSlider() {

    foodMenu.forEach(food => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <div class="card-image">
                <img src="${food.image}" alt="${food.name}">
            </div>

            <div class="card-content">
                <div class="card-name">${food.name}</div>

                <div class="star">
                    ${`<i class="fa-solid fa-star"></i>`.repeat(food.rating)}
                </div>

                <p class="card-des">
                    ${food.description}
                </p>
            </div>

            <div class="card-rate flex">
                <span class="price">${food.price}</span>
                <button class="add-btn">Add To Cart</button>
            </div>
        `;

        slideCards.append(card);
    });
}

export function initFoodSlider() {

    foodmenuSlider();

    let sliderIndex = 0;

    const visibleCards = 4;

    const cardWidth =
        document.querySelector(".card").offsetWidth + 20;

    const maxIndex =
        foodMenu.length - visibleCards;

    function updateSlider() {

        slideCards.style.transform =
            `translateX(-${sliderIndex * cardWidth}px)`;
    }

    slideNext.addEventListener("click", () => {

        if (sliderIndex < maxIndex) {
            sliderIndex++;
            updateSlider();
        }
    });

    slidePrev.addEventListener("click", () => {

        if (sliderIndex > 0) {
            sliderIndex--;
            updateSlider();
        }
    });
}