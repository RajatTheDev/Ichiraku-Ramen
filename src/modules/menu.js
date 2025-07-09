import image1 from "../images/miso-chashu-ramen.jpg"
import image2 from "../images/spicy-naruto-ramen.jpg"
import image3 from "../images/tonkotsu-ramen.jpg"
import image4 from "../images/veg-shoyu-ramen.jpg"
import image5 from "../images/gyoza.jpg"
import image6 from "../images/tempura.jpg"

const menuItems = [
    {
        name: "Miso Chashu Ramen",
        price: "両 450", // Added price
        info: "Rich miso broth, tender pork chashu, soft-boiled egg, and green onions. A classic comfort.",
        imageSrc: image1
    },
    {
        name: "Spicy Naruto Ramen",
        price: "両 500",
        info: "Fiery red broth, extra spicy, with Naruto fish cakes, bamboo shoots, and a kick!",
        imageSrc: image2
    },
    {
        name: "Tonkotsu Ramen",
        price: "両 480",
        info: "Creamy, milky pork bone broth simmered for hours, topped with succulent pork belly.",
        imageSrc: image3
    },
    {
        name: "Vegetable Shoyu Ramen",
        price: "両 420",
        info: "Light soy-sauce based broth with fresh seasonal vegetables and tofu. Vegan friendly!",
        imageSrc: image4
    },
    {
        name: "Gyoza (5 pcs)",
        price: "両 250",
        info: "Pan-fried pork and cabbage dumplings, crispy on the bottom, juicy inside.",
        imageSrc: image5
    },
    {
        name: "Tempura Platter",
        price: "両 380",
        info: "Assorted deep-fried shrimp and vegetables, perfectly crispy and light.",
        imageSrc: image6
    }
];


export function menu () {
    const defaultDiv = document.getElementById('content');
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('menu-content');
    defaultDiv.appendChild(parentDiv);

    const heading = document.createElement('h1');
    heading.classList.add('page-heading');
    heading.textContent = "Menu";
    parentDiv.appendChild(heading);

    let menuCardDiv = document.createElement('div');
    menuCardDiv.classList.add('menu-card-parent');
    menuItems.forEach(item => {
        const menuCardHTML = `
            <div class="menu-card">
                <img src="${item.imageSrc}" alt="${item.name}" class="dish-image">
                <div class="dish-details"> <h3 class="dish-name">${item.name}</h3> <p class="dish-price">${item.price}</p>
                </div>
                <p class="dish-info">${item.info}</p>
            </div>
        `;
        menuCardDiv.insertAdjacentHTML('beforeend', menuCardHTML);
    });

    parentDiv.appendChild(menuCardDiv);
};