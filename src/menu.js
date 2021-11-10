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
    pricing.innerHTML = 'from £' + price;
    pricing.className = 'price';

    container.appendChild(item);
    container.appendChild(descrition);
    container.appendChild(pricing);

    return container
}

function buildMenu() {
    const menu = document.createElement('div');
    menu.className = 'menu';
    content.appendChild(menu);

    menu.appendChild(createHeading('Starters'));
    menu.appendChild(createItem('Dry Ribs', 'BBQ spare ribs', '2.00'))
    menu.appendChild(createItem('Ribs in BBQ sauce', 'BBQ spare ribs in BBQ sauce', '2.30'))
    menu.appendChild(createItem('Salt & Pepper Ribs', "BBQ spare ribs with salt and peppers", '3.50'))
    menu.appendChild(createItem('"Chicken"', '"Chicken" balls', '2.40'))
    menu.appendChild(createItem('Salt & Pepper "Chicken"', '"Chicken" with salt and peppers', '3.10'))
    menu.appendChild(createItem('Garlic Bread', 'Garlic on a pizza base', '2.00'))
    menu.appendChild(createItem('Salt & Pepper Bat', "Bat with salt and peppers", '3.90'))
    menu.appendChild(createHeading('Pizzas'));
    menu.appendChild(createItem('Margherita', 'Mozerella cheese, tomato sauce & Italian herbs', '6.90'))
    menu.appendChild(createItem('Garlic Magherita', 'Mozerella cheese, tomato sauce, garlic & Italian herbs', '7.10'))
    menu.appendChild(createItem('Quatro Formagi', 'A combination of 4 cheeses', '7.20'))
    menu.appendChild(createItem('Murciélago', 'Mozerella cheese, tomato sauce, bat & Italian herbs', '7.60'))
    menu.appendChild(createItem('Meat Feast', 'Mozerella cheese, tomato sauce, salami, chicken, bat, beef & Italian herbs', '8.00'))
    menu.appendChild(createItem('Al-Funghi', 'Mozerella cheese, tomato sauce, mushrooms & Italian herbs', '7.30'))
    menu.appendChild(createItem('BBQB', 'Mozerella cheese, BBQ sauce & smoked bat', '8.00'))
    menu.appendChild(createItem('Vegetarian', 'Mozerella cheese, tomato sauce, mushrooms, onions, green peppers & Italian herbs', '7.50'))
    menu.appendChild(createItem('Hot Shot', 'Mozerella cheese, tomato sauce, chilli, green peppers & bat', '8.30'))
    menu.appendChild(createItem('Murciélago Funghi', 'Mozerella cheese, tomato sauce, bat, mushroom & Italian herbs', '7.60'))
    menu.appendChild(createItem('UM PA PA', "God's gift to this world", '8.50'))
    menu.appendChild(createItem("Chef's Special", 'Anything the chef can cough on', '8.30'))
    menu.appendChild(createItem('Half & Half', '2 Half pizzas of your choice', '7.00'))
    menu.appendChild(createHeading('Sides'));
    menu.appendChild(createItem('Chips', 'Chips', '1.50'))
    menu.appendChild(createItem('Fries', 'Kinda like chips but thinner and cost more', '1.60'))
    menu.appendChild(createItem('French Fries', 'Just Fries but cost even more', '1.80'))
    menu.appendChild(createItem('Potato Wedgies', 'Kinda like chips but with more potato', '2.00'))
    menu.appendChild(createItem('Salt & Pepper Chips', 'Chips with salt and peppers', '2.30'))
    menu.appendChild(createHeading('Dips'));
    menu.appendChild(createItem('Ketchup', 'Tomatoish dip', '0.40'))
    menu.appendChild(createItem('BBQ', 'BBQ dip', '0.40'))
    menu.appendChild(createItem('Garlic Mayo', 'Garlic Mayonnaise dip', '0.40'))
    menu.appendChild(createItem('Chilli', 'Chilli dip', '0.40'))
    menu.appendChild(createHeading('Drinks'));
    menu.appendChild(createItem('Coke', 'Coca Cola', '1.50'))
    menu.appendChild(createItem('Diet Coke', 'Diet Coca Cola', '1.50'))
    menu.appendChild(createItem('Fanta', 'Like fizza orange mate', '1.50'))
    menu.appendChild(createItem('Mysterious Liqud', 'What could it be?', '1.60'))
}

export default buildMenu