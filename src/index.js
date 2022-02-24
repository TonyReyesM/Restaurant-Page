import './style.css';
import homeImg from './ramen-homeimg.jpg';
import contactImg from './ramencook.jpg';
import hakataImg from './meals-imgs/hakata-ramen.jpg';
import sapporoMisoImg from './meals-imgs/sapporo-miso-ramen.jpg';
import sapporoImg from './meals-imgs/sapporo-ramen.jpg';
import tokyoStyleImg from './meals-imgs/tokyo-style-ramen.jpg';
import tsukemenImg from './meals-imgs/tsukemen.jpg'

function headerCreate () {
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.innerHTML = 'Oishii Ramen'

    const japName = document.createElement('h3');
    japName.classList.add('restaurant-name');
    japName.innerHTML = 'おいしいらめん'

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('home-button');
    homeBtn.classList.add('selected')
    homeBtn.innerHTML = 'Home'
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-button');
    menuBtn.innerHTML = 'Menu'
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contact-button');
    contactBtn.innerHTML = 'Contact'

    tabs.append(homeBtn);
    tabs.append(menuBtn);
    tabs.append(contactBtn);

    header.append(restaurantName);
    header.append(japName);
    header.append(tabs)

    return header
}

function infoSecCreate () {
    const infoSec = document.createElement('div')
    infoSec.classList.add('info')
    if(homeBtn.classList.contains('selected')) {
        infoSec.append(homeTab())
    };

    return infoSec
}

function footerCreate() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = 'Copyright © 2022 tonyreyesm'
    return footer
}

function homeTab () {
    const home = document.createElement('div')
    home.classList.add('home')
    home.classList.add('tab')
    
    const intro1 = document.createElement('p');
    intro1.classList.add('intro')
    intro1.innerHTML = 'The tastiest and best ramen in town. Come visit us now!'

    const homeImage = new Image();
    homeImage.src = homeImg;

    const intro2 = document.createElement('p');
    intro2.classList.add('intro')
    intro2.innerHTML = 'Serving tastiness since 1995'

    home.append(intro1)
    home.append(homeImage)
    home.append(intro2)

    return home
}

function menuTab () {
    const menu = document.createElement('div')
    menu.classList.add('menu')
    menu.classList.add('tab')

    const sapporoMisoMeal = document.createElement('div');
    sapporoMisoMeal.classList.add('meal')
    const sapporoMisoTitle = document.createElement('h4');
    sapporoMisoTitle.classList.add('name')
    sapporoMisoTitle.innerHTML = 'Sapporo Miso Ramen';
    const sapporoMisoImage = new Image();
    sapporoMisoImage.src = sapporoMisoImg;
    const sapporoMisoDescription = document.createElement('p')
    sapporoMisoDescription.classList.add('description')
    sapporoMisoDescription.innerHTML = "Using chicken or pork bones combined with red miso to make the broth, you get a truly rich and heart-warming soup for those chilly weather days."
    sapporoMisoMeal.append(sapporoMisoTitle)
    sapporoMisoMeal.append(sapporoMisoImage)
    sapporoMisoMeal.append(sapporoMisoDescription)

    const hakataMeal = document.createElement('div');
    hakataMeal.classList.add('meal');
    const hakataTitle = document.createElement('h4');
    hakataTitle.classList.add('name')
    hakataTitle.innerHTML = 'Hakata Ramen';
    const hakataImage = new Image();
    hakataImage.src = hakataImg;
    const hakataDescription = document.createElement('p')
    hakataDescription.classList.add('description')
    hakataDescription.innerHTML = "The tonkotsu bone broth is super silky and this dish needs minimal toppings as it's already drenched in flavor."
    hakataMeal.append(hakataTitle)
    hakataMeal.append(hakataImage)
    hakataMeal.append(hakataDescription)

    const sapporoMeal = document.createElement('div');
    sapporoMeal.classList.add('meal')
    const sapporoTitle = document.createElement('h4');
    sapporoTitle.classList.add('name')
    sapporoTitle.innerHTML = 'Sapporo Ramen';
    const sapporoImage = new Image();
    sapporoImage.src = sapporoImg;
    const sapporoDescription = document.createElement('p')
    sapporoDescription.classList.add('description')
    sapporoDescription.innerHTML = "A miso soybean base sets the scene along with the tonkotsu pork bone broth and the golden curly noodles."
    sapporoMeal.append(sapporoTitle)
    sapporoMeal.append(sapporoImage)
    sapporoMeal.append(sapporoDescription)

    const tokyoStyleMeal = document.createElement('div');
    tokyoStyleMeal.classList.add('meal')
    const tokyoStyleTitle = document.createElement('h4');
    tokyoStyleTitle.classList.add('name')
    tokyoStyleTitle.innerHTML = 'Tokyo Style Ramen';
    const tokyoStyleImage = new Image();
    tokyoStyleImage.src = tokyoStyleImg;
    const tokyoStyleDescription = document.createElement('p')
    tokyoStyleDescription.classList.add('description')
    tokyoStyleDescription.innerHTML = "Celebrated as the ‘original ramen’, tokyo style ramen is the poster child for what wonders can happen can broth meets noodle."
    tokyoStyleMeal.append(tokyoStyleTitle)
    tokyoStyleMeal.append(tokyoStyleImage)
    tokyoStyleMeal.append(tokyoStyleDescription)

    const tsukemenMeal = document.createElement('div');
    tsukemenMeal.classList.add('meal')
    const tsukemenTitle = document.createElement('h4');
    tsukemenTitle.classList.add('name')
    tsukemenTitle.innerHTML = 'Tsukemen';
    const tsukemenImage = new Image();
    tsukemenImage.src = tsukemenImg;
    const tsukemenDescription = document.createElement('p')
    tsukemenDescription.classList.add('description')
    tsukemenDescription.innerHTML = "These thick and hearty ramen noodles are cooked, plunged into cool water, and then served alongside a bowl of tare ramen broth."
    tsukemenMeal.append(tsukemenTitle)
    tsukemenMeal.append(tsukemenImage)
    tsukemenMeal.append(tsukemenDescription)

    menu.append(sapporoMisoMeal)
    menu.append(hakataMeal)
    menu.append(sapporoMeal)
    menu.append(tokyoStyleMeal)
    menu.append(tsukemenMeal)

    return menu
}

function contactTab () {
    const contact = document.createElement('div')
    contact.classList.add('contact')
    contact.classList.add('tab')

    const phone = document.createElement('div')
    phone.classList.add('phone')
    phone.innerHTML = 'Phone: 123 456 789'

    const contactImage = new Image();
    contactImage.src = contactImg;
    contactImage.classList.add('map')

    const address = document.createElement('div')
    address.classList.add('address')
    address.innerHTML = 'Address: Franklin Avenue 47, Los Angeles, CA'

    contact.append(phone)
    contact.append(address)
    contact.append(contactImage)

    return contact
}

const content = document.getElementById('content')
content.append(headerCreate());

const homeBtn = document.querySelector('.home-button')
const menuBtn = document.querySelector('.menu-button')
const contactBtn = document.querySelector('.contact-button')

homeBtn.addEventListener('click', () => {
    homeBtn.classList.add('selected')
    menuBtn.classList.remove('selected')
    contactBtn.classList.remove('selected')

    const infoSec = document.querySelector('.info');
    infoSec.removeChild(document.querySelector('.tab'))
    infoSec.append(homeTab())
})

menuBtn.addEventListener('click', () => {
    homeBtn.classList.remove('selected')
    menuBtn.classList.add('selected')
    contactBtn.classList.remove('selected')

    const infoSec = document.querySelector('.info');
    infoSec.removeChild(document.querySelector('.tab'))
    infoSec.append(menuTab())

    const meals = document.querySelectorAll('.meal')
    meals.forEach(meal => meal.addEventListener('mouseover', () => meal.classList.add('hovered')));
    meals.forEach(meal => meal.addEventListener('mouseout', () => meal.classList.remove('hovered')))
})

contactBtn.addEventListener('click', () => {
    homeBtn.classList.remove('selected')
    menuBtn.classList.remove('selected')
    contactBtn.classList.add('selected')

    const infoSec = document.querySelector('.info');
    infoSec.removeChild(document.querySelector('.tab'))
    infoSec.append(contactTab())
})

content.append(infoSecCreate());

content.append(footerCreate())