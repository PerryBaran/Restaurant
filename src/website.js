import pizza from './img/pizza.jpg';
import buildHome from './homepage';
import buildMenu from './menu';
import buildContact from './contact';

function reset(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createNavbar(page) {
    const navbar = document.createElement('div');
    navbar.id = 'navbar';
    content.appendChild(navbar);

    const heading = document.createElement('h1');
    heading.innerHTML = 'PIZZA RONA';
    navbar.appendChild(heading);

    const homeButton = document.createElement('button');
    homeButton.innerHTML = 'HOME';
    navbar.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.innerHTML = 'MENU';
    navbar.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.innerHTML = 'CONTACT';
    navbar.appendChild(contactButton);

    if (page === 'home') {
        homeButton.className = 'active';
    } if (page === 'menu') {
        menuButton.className = 'active';
    } if (page === 'contact') {
        contactButton.className = 'active';
    }

    homeButton.addEventListener('click', () => {
        reset(content);
        initializeSite('home');
        buildHome();
    });

    menuButton.addEventListener('click', () => {
        reset(content);
        initializeSite('menu');
        buildMenu();
    });

    contactButton.addEventListener('click', () => {
        reset(content)
        initializeSite('contact')
        buildContact();
    });
}

function createBackground() {
    const backgroundImage = new Image();
    backgroundImage.src = pizza;
    backgroundImage.id = 'background';
    content.appendChild(backgroundImage);
}

function createBottombar() {
    const bottombar = document.createElement('div');
    bottombar.id = 'bottombar';
    content.appendChild(bottombar);

    const selfAttribution = document.createElement('a');
    selfAttribution.className = 'attribution';
    selfAttribution.href = 'https://github.com/Squilly-flac';
    selfAttribution.innerHTML = 'Perry Baran © 2021';
    bottombar.appendChild(selfAttribution);

    const iconAttribution = document.createElement('p');
    iconAttribution.className = 'attribution';
    iconAttribution.innerHTML = 'Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'
    bottombar.appendChild(iconAttribution);
}

function initializeSite(page) {
    createNavbar(page);
    createBottombar();
    createBackground();
}

export default initializeSite