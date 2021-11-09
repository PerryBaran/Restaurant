import man from './img/man.jpg';

function createQuote() {
    const quote = document.createElement('p');
    quote.className = 'quote';
    quote.innerHTML = 'Pizza worth dying for';

    return quote;
}

function createLogo() {
    const logo = new Image();
    logo.src = man;
    logo.id = 'man';
    
    return logo;
}

function createAboutHeader() {
    const about = document.createElement('h2');
    about.innerHTML = 'ABOUT';

    return about;
}

function createAboutContent() {
    const about = document.createElement('p');
    about.className = 'about';
    about.innerHTML = "Pizza Rona was established in 2019 to expose the world to our life altering pizza. Over the last 2 years Pizza Rona has spread across the globe and has invaded the homes of over 1 million families. To get your taste of what everyone's talking about, check out our menu. For any questions or concerns please contact us via our contact page."

    return about;
}


function buildInfo(){
    const info = document.createElement('div');
    info.className = 'info';

    info.appendChild(createQuote());
    info.appendChild(createLogo());
    info.appendChild(createAboutHeader());
    info.appendChild(createAboutContent());

    return info;
}

function buildHome() {
    const container = document.createElement('div');
    container.id = 'container';
    content.appendChild(container);

    container.appendChild(buildInfo());
}

export default buildHome