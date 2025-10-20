const discoverButton = document.getElementById('discover');
const destinationSection = document.getElementById('destination');

discoverButton.addEventListener('click', function(event) {
    destinationSection.scrollIntoView({
        behavior: 'smooth'
    });
});


const specialButton = document.getElementById('special');
const heroSection = document.querySelector('.hero');

specialButton.addEventListener('click', function(event) {
    heroSection.scrollIntoView({
        behavior: 'smooth'
    });
});


const contactButton = document.getElementById('contact');
const subscribeSection = document.querySelector('.subscribe-section');

contactButton.addEventListener('click', function(event) {
    subscribeSection.scrollIntoView({
        behavior: 'smooth'
    });
});

