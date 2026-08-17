import { categories } from "../data/categories.js";
import { setActiveCategory } from "./foodCards.js";

const filterTabs = document.querySelector("#filterTabs");

export function renderCategories() {

    categories.forEach(category => {

        const button = document.createElement("button");

        button.className = "tab";

        button.dataset.category =
            category.toLowerCase();

        button.innerText = category;

        if (button.dataset.category === "all") {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {

            const buttons =
                document.querySelectorAll(".tab");

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            setActiveCategory(button.dataset.category);
        });

        filterTabs.append(button);
    });
}