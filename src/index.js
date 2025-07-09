import "./style.css";
import {home} from "./modules/home";
import {menu} from "./modules/menu";
import {about} from "./modules/about";
import {contact} from "./modules/contact";


const navButtons = document.querySelectorAll('.nav-button');
const parentDiv = document.getElementById('content');

navButtons.forEach((button) => {
    if (button.textContent === "Home") {
        button.addEventListener('click', () => {
            parentDiv.textContent = "";
            home();
        });
    } else if (button.textContent === "Menu") {
        button.addEventListener('click', () => {
            parentDiv.textContent = "";
            menu();
        });
    } else if (button.textContent === "About us") {
        button.addEventListener('click', () => {
            parentDiv.textContent = "";
            about();
        });
    } else if (button.textContent === "Contact us") {
        button.addEventListener('click', () => {
            parentDiv.textContent = "";
            contact();
        });
    }
});

home();