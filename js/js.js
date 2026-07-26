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

const popularFoods = [
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
const popularCards = document.getElementById("popularCards");

mainImage.src = foods[0].image;

foods.forEach((food, index) => {

    const box = document.createElement("div");
    box.className = "mini-image-box flex";

    if(index === 0){
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

        document.querySelectorAll(".mini-image-box").forEach(card=>{
            card.classList.remove("active");
        });

        box.classList.add("active");

    });

    slider.appendChild(box);

});

popularFoods.forEach(food => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="popular-image-box">
            <img src="${food.image}">
        </div>

        <div class="popular-dishes-content">
            <h4>${food.name}</h4>

            <div class="rating">
                ${'<i class="fa-solid fa-star"></i>'.repeat(food.rating)}
            </div>

            <p class="para">
                ${food.description}
            </p>

            <div class="rate">
                <span class="price">${food.price}</span>
                <button class="border-btn">Add To Cart</button>
            </div>
        </div>
    `;

    popularCards.append(card);

});

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentIndex = 0;

const card = document.querySelector(".card");
const gap = 20;

const cardWidth = card.offsetWidth + gap;

next.addEventListener("click", () => {

    const maxSlide = popularFoods.length - 4;

    if(currentIndex < maxSlide){
        currentIndex++;
    }

    popularCards.style.transform =
    `translateX(-${currentIndex * cardWidth}px)`;

});

prev.addEventListener("click", () => {

    if(currentIndex > 0){
        currentIndex--;
    }

    popularCards.style.transform =
    `translateX(-${currentIndex * cardWidth}px)`;

});



