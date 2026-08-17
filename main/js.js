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

const testimonialData = [
    {
        para: "The food was absolutely delicious and the service was excellent. I really enjoyed my experience at this restaurant. Every dish was freshly prepared with quality ingredients and had an amazing taste. The staff was very friendly, polite, and attentive throughout our visit. The atmosphere was also comfortable and relaxing, which made our dining experience even better. I would definitely recommend this place to everyone.",
        image: "images/testimonial-image1.png",
        name: "Rahul Sharma"
    },
    {
        para: "Amazing food with great presentation and excellent taste. I visited this restaurant with my friends and we all had a wonderful experience. Every dish we ordered was fresh, flavorful, and beautifully served. The staff was very helpful and provided quick service whenever we needed anything. The restaurant also has a pleasant environment where you can comfortably enjoy your meal. I will definitely visit again.",
        image: "images/testimonial-image1.png",
        name: "Aman Gupta"
    },
    {
        para: "I loved the quality and taste of the food at this restaurant. Everything we ordered was prepared perfectly and tasted really fresh. The presentation of the dishes was also impressive and made the food even more enjoyable. The staff members were friendly, professional, and always ready to help. The overall atmosphere was peaceful and comfortable. It was a great dining experience and I would happily recommend this restaurant.",
        image: "images/testimonial-image1.png",
        name: "Rohit Singh"
    },
    {
        para: "One of the best restaurant experiences I have had recently. The food was delicious, the portions were good, and every dish was served beautifully. I especially liked the freshness and quality of the ingredients used in the meals. The staff was welcoming and made us feel comfortable throughout our visit. The environment was clean, peaceful, and perfect for spending time with family and friends. I would definitely come here again.",
        image: "images/testimonial-image1.png",
        name: "Vikas Mehta"
    },
    {
        para: "The dishes were full of flavor and the quality of the ingredients was really impressive. I enjoyed every bite of the meal and especially loved the main course. The food was served fresh and the presentation was also very attractive. The staff provided excellent service and were very polite throughout our visit. The restaurant has a warm and comfortable atmosphere that makes you want to stay longer. Overall, it was a memorable experience.",
        image: "images/testimonial-image1.png",
        name: "Arjun Verma"
    },
    {
        para: "I had a wonderful dining experience at this restaurant with my family. The food was fresh, tasty, and served at the right temperature. Every dish had a unique and delicious flavor that we really enjoyed. The staff members were very polite, attentive, and made sure everything was perfect for us. I also loved the clean and peaceful environment of the restaurant. It is definitely a great place to enjoy a good meal.",
        image: "images/testimonial-image1.png",
        name: "Karan Malhotra"
    },
    {
        para: "The overall experience was fantastic from start to finish. The food had an amazing taste and the presentation was also impressive. Everything we ordered was fresh and prepared with great attention to detail. The service was fast and the staff was very friendly and professional. The atmosphere was comfortable and made our visit even more enjoyable. I really liked the restaurant and would surely recommend it to my friends and family.",
        image: "images/testimonial-image1.png",
        name: "Aditya Kapoor"
    },
    {
        para: "Great food, friendly staff, and a lovely environment made our visit really enjoyable. Every dish we ordered was delicious and prepared with great care. The flavors were balanced perfectly and the food was served fresh. The staff was quick to respond and always treated us politely. The restaurant was also clean and comfortable, making it a perfect place for a relaxed meal. I had a great experience and would love to visit again.",
        image: "images/testimonial-image1.png",
        name: "Mohit Yadav"
    },
    {
        para: "The food quality was excellent and the taste was even better than I expected. We tried different dishes and everything was fresh, flavorful, and perfectly prepared. The staff was helpful and made sure that everything was comfortable during our visit. I really liked the peaceful environment and the way the food was presented. It is a great place to enjoy delicious food with friends or family. I would definitely recommend this restaurant.",
        image: "images/testimonial-image1.png",
        name: "Saurabh Mishra"
    }
];

const slider = document.getElementById("imageSlider");
const mainImage = document.getElementById("mainImage");
const slideCards = document.getElementById("sliderCards");
const slidePrev = document.getElementById("prev");
const slideNext = document.getElementById("next");
const filterTabs = document.querySelector("#filterTabs");
const filterCards = document.querySelector("#filterCards");
const testemonialCards = document.querySelector("#testemonialCards");
const testePrev = document.getElementById("testemonial-prev");
const testeNext = document.getElementById("testemonial-next");

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

function renderCards() {
    filterCards.innerHTML = "";

    const filteredFood = filterMenu.filter(food => {

        const matchesCategory = activeCategory === "all" || activeCategory === food.category.toLocaleLowerCase();

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


function renderCategories() {
    categories.forEach(category => {
        const button = document.createElement("button");
        button.className = "tab";
        button.setAttribute("data-category", category.toLocaleLowerCase());
        button.innerText = category;

        if (button.dataset.category === "all") {
            button.classList.add('active');
        }

        filterTabs.append(button);
    });

    const buttons = document.querySelectorAll(".tab");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            activeCategory = btn.dataset.category;

            buttons.forEach(btn => btn.classList.remove("active"));

            btn.classList.add('active');
            renderCards();
        })
    })
}

function testeSlider() {

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


renderCategories();
renderCards();
initFoodSlider();
circleSlider();
testeSlider();