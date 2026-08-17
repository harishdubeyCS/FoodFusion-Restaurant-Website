const categories = [
    "All",
    "Special Foods",
    "Mexican",
    "Italian",
    "Japanese",
    "Drinks"
];

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

const filterMenu = [

    {
        name: "Mexican Rice",
        image: "images/Mexican Rice.png",
        price: 18,
        rating: 5,
        description: "Mexican Special",
        category: "Mexican"
    },
    {
        name: "Veg Thali",
        image: "images/vegThali.png",
        price: 20,
        rating: 4,
        description: "Healthy Lunch",
        category: "Special Foods"
    },
    {
        name: "Enchiladas",
        image: "images/Enchiladas.png",
        price: 22,
        rating: 4,
        description: "Mexican Special",
        category: "Mexican"
    },
    {
        name: "Nachos",
        image: "images/Nachos.png",
        price: 16,
        rating: 4,
        description: "Crispy & Cheesy",
        category: "Mexican"
    },
    {
        name: "Lasagna",
        image: "images/Lasagna.png",
        price: 28,
        rating: 5,
        description: "Italian Classic",
        category: "Italian"
    },
    {
        name: "Pepperoni Pizza",
        image: "images/pepperoniPizza.png",
        price: 32,
        rating: 5,
        description: "Italian Classic",
        category: "Italian"
    },
    {
        name: "Penne Pasta",
        image: "images/pasta.png",
        price: 24,
        rating: 4,
        description: "Creamy & Tasty",
        category: "Italian"
    },
    {
        name: "Chicken Biryani",
        image: "images/chickenBiryani.png",
        price: 34,
        rating: 5,
        description: "Famous for All Restaurant",
        category: "Special Foods"
    },
    {
        name: "Platter",
        image: "images/platter.png",
        price: 34,
        rating: 5,
        description: "Famous for All Restaurant",
        category: "Special Foods"
    },
    {
        name: "Chocolate Lava Cake",
        image: "images/ChocolateLavaCake.png",
        price: 38,
        rating: 5,
        description: "Famous for All Restaurant",
        category: "Special Foods"
    },
    {
        name: "Chocolate Shake",
        image: "images/chocolateShake.png",
        price: 14,
        rating: 5,
        description: "Rich Chocolate Flavor",
        category: "Drinks"
    },
    {
        name: "Sushi Rolls",
        image: "images/sushiRolls.png",
        price: 36,
        rating: 5,
        description: "Japanese Favorite",
        category: "Japanese"
    },
    {
        name: "Ramen",
        image: "images/ramen.png",
        price: 26,
        rating: 5,
        description: "Hot Japanese Noodles",
        category: "Japanese"
    },
    {
        name: "Mojito",
        image: "images/mojito.png",
        price: 12,
        rating: 4,
        description: "Fresh & Cool",
        category: "Drinks"
    },
    {
        name: "Paneer Biryani",
        image: "images/paneerBiryani.png",
        price: 30,
        rating: 4,
        description: "Famous for All Restaurant",
        category: "Special Foods"
    },
    {
        name: "Grilled Fish",
        image: "images/fish.png",
        price: 42,
        rating: 4,
        description: "Fresh & Delicious",
        category: "Special Foods"
    },
    {
        name: "Noodles",
        image: "images/Noodles.png",
        price: 24,
        rating: 4,
        description: "Creamy & Tasty",
        category: "Italian"
    },
    {
        name: "Dark Coffee",
        image: "images/drink.png",
        price: 12,
        rating: 4,
        description: "Fresh & Cool",
        category: "Drinks"
    }
];

const slider = document.getElementById("imageSlider");
const mainImage = document.getElementById("mainImage");
const slideCards = document.getElementById("sliderCards");
const slidePrev = document.getElementById("prev");
const slideNext = document.getElementById("next");
const filterTabs = document.querySelector("#filterTabs");
const filterCards = document.querySelector("#filterCards");

let activeCategory = "all";


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
                ${`<i class="fa-solid fa-star"></i>`.repeat(food.rating)}
            </div>
            <p class="card-des">${food.description}</p>
        </div>
        <div class="card-rate flex">
            <span class="price">${food.price}</span>
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

function renderCards(){
    filterCards.innerHTML = "";

    const filteredFood = filterMenu.filter(food =>{

        const matchesCategory = activeCategory === "all" || activeCategory === food.category.toLocaleLowerCase();

        return matchesCategory;
    });

    filteredFood.forEach(food =>{
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
               <div class="card-image">
                    <img src="${food.image}" alt="${food.name}">
                </div>
                <div class="card-content">
                    <div class="card-name">${food.name}</div>
                    <div class="star">
                        ${'<i class="fa-solid fa-star"></i>'.repeat(food.rating)}
                    </div>
                    <p class="card-des">${food.description}</p>
                </div>
                <div class="card-rate flex">
                    <span class="price">$${food.price.toFixed(2)}</span>
                    <button class="add-btn">Add To Cart</button>
                </div>
        `;

        filterCards.append(card);
    })
}


function renderCategories(){
    categories.forEach(category =>{
        const button = document.createElement("button");
        button.className = "tab";
        button.setAttribute("data-category", category.toLocaleLowerCase());
        button.innerText = category;

        if(button.dataset.category === "all"){
            button.classList.add('active');
        }

        filterTabs.append(button);
    });

    const buttons = document.querySelectorAll(".tab");

    buttons.forEach(btn =>{
        btn.addEventListener("click", () =>{

            activeCategory = btn.dataset.category;

            buttons.forEach(btn => btn.classList.remove("active"));

            btn.classList.add('active');
            renderCards();
        })
    })
}

renderCategories();
renderCards();
initFoodSlider();
circleSlider();