const foods = [
    {
        name: "Dishes",
        image: "images/dish.png"
    },
    {
        name: "Snacks",
        image: "images/snack.png"
    },
    {
        name: "Platter",
        image: "images/platter.png"
    },
    {
        name: "Drinks",
        image: "images/drink.png"
    },
    {
        name: "Desserts",
        image: "images/cake.png"
    }
];

const foodMenu = [
    {
        name: "Chicken Biryani",
        image: "images/chickenBiryani.png",
        rating: 5,
        description: "Chicken Biryani is very famous.",
        price: "$34.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/pasta.png",
        rating: 3,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/french fires.png",
        rating: 2,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/chicken showarna.png",
        rating: 5,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/pasta.png",
        rating: 3,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/french fires.png",
        rating: 2,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/chicken showarna.png",
        rating: 5,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/french fires.png",
        rating: 2,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/chicken showarna.png",
        rating: 5,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/pasta.png",
        rating: 3,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/french fires.png",
        rating: 2,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    },
    {
        name: "Margherita Pizza",
        image: "images/chicken showarna.png",
        rating: 5,
        description: "Fresh cheese with tomato sauce.",
        price: "$29.00"
    }
];

const slider = document.getElementById("imageSlider");
const mainImage = document.getElementById("mainImage");
const slideCards = document.getElementById("sliderCards");
const slidePrev = document.getElementById("prev");
const slideNext = document.getElementById("next");

mainImage.src = foods[0].image;

function circleSlider() {
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

            document.querySelectorAll(".mini-image-box").forEach(card => {
                card.classList.remove("active");
            });

            box.classList.add("active");

        });

        slider.appendChild(box);

    });
}

function foodmenuSlider() {
    foodMenu.forEach(food => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
        <div class="card-image">
            <img src="${food.image}" alt="${food.name}">
        </div>
        <div class="card-content">
            <div class="card-name">${food.name}</div>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <p class="card-des">${food.description}</p>
        </div>
        <div class="card-rate flex">
            <span class="price">$${food.price}</span>
            <button class="add-btn">Add To Cart</button>
        </div>
    `;
        slideCards.append(card);
    })
}

function initFoodSlider() {
    
    foodmenuSlider();

    let sliderIndex = 0;
    const visibleCards = 4;
    const cardWidth = document.querySelector(".card").offsetWidth + 20;
    const maxIndex = foodMenu.length - visibleCards;

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

initFoodSlider();
circleSlider();