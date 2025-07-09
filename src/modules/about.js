import aboutImage from '../images/about-img.jpg';

export function about() {
    const defaultDiv = document.getElementById('content');
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('about-us-content');

    const heading = document.createElement('h1');
    heading.classList.add('page-heading');
    heading.textContent = "About us";

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('about-us-info');
    const image = document.createElement('img');
    image.classList.add('about-us-image');
    image.src = aboutImage;

    const subDiv = document.createElement('div');
    subDiv.classList.add('about-us-info');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    para1.textContent = "Welcome to Ichiraku Ramen, where the warmth of a homemade meal meets the excitement of the ninja world! Established since the earliest days of Konoha. Ichiraku Ramen has been a beloved staple, serving up delicious bowls of comfort to generations of loyal customers. Our story began with a simple vision: to create a place where everyone, from the busiest shinobi to the everyday villager, could enjoy a truly satisfying and heartwarming meal.";
    para2.textContent = "At Ichiraku, we believe in the power of good food to bring people together. While we don't always reveal our secret family recipes, our commitment to quality ingredients, time-honored cooking techniques, and a friendly, welcoming atmosphere has always been at the forefront. Founded by Teuchi and now continued by Ayame, our team is dedicated to upholding the legacy of Ichiraku, ensuring that every visit is a memorable one. Come and experience the taste that has become legendary, and discover why Ichiraku Ramen isn't just a restaurant, it's a home away from home.";

    defaultDiv.appendChild(parentDiv);
    parentDiv.appendChild(heading);
    parentDiv.appendChild(infoDiv);
    infoDiv.appendChild(image);
    infoDiv.appendChild(subDiv);
    subDiv.appendChild(para1);
    subDiv.appendChild(para2);
}