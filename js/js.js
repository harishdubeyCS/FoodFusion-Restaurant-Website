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


const slider = document.getElementById("imageSlider");
const mainImage = document.getElementById("mainImage");

mainImage.src = foods[0].image;

foods.forEach((food, index) => {

    const box = document.createElement("div");
    box.className = "mini-image-box";

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

