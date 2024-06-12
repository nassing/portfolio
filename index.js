// Clicking outside of the contact card will close it
document.getElementById('contact-overlay').addEventListener('click', () => {
  document.getElementById('contact-wrapper').classList.add('invisible');
});

// Clicking on a button with the class 'show-contact' will open the contact component
const showContactButtons = Array.from(document.getElementsByClassName('show-contact'));
showContactButtons.forEach((element) => {
    element.addEventListener('click', () => {
        document.getElementById('contact-wrapper').classList.remove('invisible');
    })
});
