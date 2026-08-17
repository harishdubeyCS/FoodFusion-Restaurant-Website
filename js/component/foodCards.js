import { filterMenu } from "../data/filterMenu.js";

const filterCards = document.querySelector("#filterCards");

let activeCategory = "all";

export function renderCards() {

    filterCards.innerHTML = "";

    const filteredFood = filterMenu.filter(food => {

        const matchesCategory =
            activeCategory === "all" ||
            activeCategory === food.category.toLowerCase();

        return matchesCategory;
    });

    filteredFood.forEach(food => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <div class="card-image">
                <img src="${food.image}" alt="${food.name}">
            </div>

            <div class="card-content">

                <div class="card-name">
                    ${food.name}
                </div>

                <div class="star">
                    ${'<i class="fa-solid fa-star"></i>'.repeat(food.rating)}
                </div>

                <p class="card-des">
                    ${food.description}
                </p>

            </div>

            <div class="card-rate flex">

                <span class="price">
                    $${food.price.toFixed(2)}
                </span>

                <button class="add-btn">
                    Add To Cart
                </button>

            </div>
        `;

        filterCards.append(card);
    });
}

export function setActiveCategory(category) {

    activeCategory = category;

    renderCards();
}