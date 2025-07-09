export function contact () {
    const defaultDiv = document.getElementById('content');
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('contact-us-content');
    defaultDiv.appendChild(parentDiv);

    const heading = document.createElement('h1');
    heading.classList.add('page-heading');
    heading.textContent = "Contact us";
    parentDiv.appendChild(heading);

    const form = document.createElement('form');
    form.classList.add('contact-form');

     // Name Field

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = "Name:";
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'user_name'); 
    nameInput.setAttribute('required', '');
    form.appendChild(nameInput);

    // Email Field

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = "Email:";
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'user_email');
    emailInput.setAttribute('required', '');
    form.appendChild(emailInput);

    // Message Field 

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = "Your Message:";
    form.appendChild(messageLabel);

    const messageTextarea = document.createElement('textarea');
    messageTextarea.setAttribute('id', 'message');
    messageTextarea.setAttribute('name', 'user_message');
    messageTextarea.setAttribute('rows', '6');
    messageTextarea.setAttribute('required', '');
    form.appendChild(messageTextarea);

    // Submit Button

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = "Send Message";
    form.appendChild(submitButton);

    parentDiv.appendChild(form);

    const otherContactHeading = document.createElement('h2');
    otherContactHeading.classList.add('other-contact-heading');
    otherContactHeading.textContent = "Other Ways to Connect";
    parentDiv.appendChild(otherContactHeading);

    const contactList = document.createElement('ul');
    contactList.classList.add('contact-details-list');

    // Phone
    const phoneItem = document.createElement('li');
    phoneItem.innerHTML = '<strong>Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a>';
    contactList.appendChild(phoneItem);

    // Email
    const emailItem = document.createElement('li');
    emailItem.innerHTML = '<strong>Email:</strong> <a href="mailto:ramen@ichiraku.com">ramen@ichiraku.com</a>';
    contactList.appendChild(emailItem);

    // Address
    const addressItem = document.createElement('li');
    addressItem.innerHTML = '<strong>Address:</strong> Ichiraku Ramen, Entry Gate, Konoha VIllage';
    contactList.appendChild(addressItem);

    // Working Hours
    const hoursItem = document.createElement('li');
    hoursItem.innerHTML = '<strong>Working Hours:</strong> Mon-Sun, 7:00 AM - 11:00 PM JST';
    contactList.appendChild(hoursItem);

    parentDiv.appendChild(contactList);

};