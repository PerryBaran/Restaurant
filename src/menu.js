function createHeading(text) {
    const heading = document.createElement('h3');
    heading.innerHTML = text;

    return heading
}

function createItem(name, text, price) {
    const container = document.createElement('div');
    container.className = 'menuOption'

    const item = document.createElement('h4');
    item.innerHTML = name;
    
    const descrition = document.createElement('p');
    descrition.innerHTML = text;
    descrition.className = 'description';

    const pricing = document.createElement('p');
    pricing.innerHTML = price;
    pricing.className = 'price';

    container.appendChild(item);
    container.appendChild(descrition);
    container.appendChild(pricing);

    return container
}

function buildMenu() {
    console.log('hello')
    const menu = document.createElement('div');
    menu.className = 'menu';
    content.appendChild(menu);

    menu.appendChild(createHeading('Starters'));
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createHeading('Pizzas'));
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createHeading('Sides'));
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createHeading('Drinks'));
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
    menu.appendChild(createItem('filler', 'lots and lots of filler', '£2.00'))
}

export default buildMenu