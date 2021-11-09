function createContact(heading, text) {
    const container = document.createElement('div');

    const header = document.createElement('h4');
    header.innerHTML = heading;
    container.appendChild(header);

    const details = document.createElement('p');
    details.innerHTML = text;
    container.appendChild(details);

    return container;
}

function createMap() {
    const map = document.createElement('div');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.7855876369017!2d-1.5680612840666222!3d53.82889014615775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879595b4558eac3%3A0xfe06c2f11ee2c53e!2sPizza%20Roma!5e0!3m2!1sen!2suk!4v1636472397988!5m2!1sen!2suk" width="50%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'

    return map
}

function buildInfo(){
    const info = document.createElement('div');
    info.className = 'info';

    info.appendChild(createContact('Tel:', '0113 209 1050'))
    info.appendChild(createContact('Address:', ' 17 Stonegate Rd, Meanwood, Leeds LS6 4HZ'))
    info.appendChild(createMap())
    
    return info;
}

function buildContact() {
    const container = document.createElement('div');
    container.id = 'container';
    content.appendChild(container);

    container.appendChild(buildInfo());
}

export default buildContact