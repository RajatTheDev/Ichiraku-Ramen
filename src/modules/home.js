
export function home () {
    const defaultDiv = document.getElementById('content');
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('home-content');
    
    const heading = document.createElement('h1');
    heading.classList.add('page-heading');
    heading.textContent = "Ichiraku Ramen: Taste the Legacy of Konoha.";
    
    const div = document.createElement('div');
    div.classList.add('home-info-div');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    para1.textContent = "Step into Ichiraku Ramen, the legendary eatery directly inspired by the beloved Naruto anime series, where every bowl brings the vibrant world of Konoha to life! We've meticulously crafted our menu to embody the spirit and authentic flavors of the ramen shop that fueled Naruto Uzumaki himself. Prepare to dive into a truly unique dining experience, where the deliciousness of our handcrafted ramen is matched only by the nostalgic charm of a place deeply rooted in your favorite ninja saga.";
    para2.textContent = "At Ichiraku Ramen, we pride ourselves on serving up bowls that are as satisfying as they are iconic. From the rich, savory depth of our Miso Ramen to the hearty goodness of our Pork Bone Broth and the adventurous kick of our Fire Style, our variety ensures there's a perfect bowl for every ninja's palate. Join us for an unforgettable meal where the legacy of Naruto meets culinary excellence, and discover why Ichiraku Ramen isn't just food, it's an adventure in every slurp.";
    
    defaultDiv.appendChild(parentDiv);
    parentDiv.appendChild(heading);
    parentDiv.appendChild(div);
    div.appendChild(para1);
    div.appendChild(para2);
};