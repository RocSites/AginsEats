const restaurants = [
    { name: 'Trata', category: "American" },
    { name: 'Roux', category: "French" },
    { name: 'Owl House', category: "American" },
    { name: 'Texas Roadhouse', category: "American" },
    { name: 'Hong Wah', category: "Asian" },
    { name: 'Roam', category: "American" },
    { name: 'Pittsford Pub', category: "American" },
    { name: "McDonald's", category: "American" },
    { name: "Tom Wahl's", category: "American" },
    { name: "Bill Gray's", category: "American" },
    { name: "Wegman's", category: "Wegman's" },
    { name: "P.F. Chang's", category: "Asian" },
    { name: 'Cheesecake Factory', category: "American" },
    { name: "Moe's", category: "Mexican" },
    { name: "Adelita's", category: "Mexican" },
    { name: 'Atlas Eats', category: "American" },
    { name: 'Food at Fisher Station', category: "Breakfast" },
    { name: 'Char Broil', category: "Breakfast" },
    { name: "Leo's", category: "Sandwiches" },
    { name: 'Basha', category: "Greek" },
    { name: 'Aladdin’s', category: "Greek" },
    { name: 'Monte Alban', category: "Mexican" },
    { name: 'Panera', category: "Sandwiches" },
    { name: 'Amore', category: "Italian" },
    { name: 'Benucci’s', category: "Italian" },
    { name: 'Nosh', category: "American" },
    { name: 'Black & Blue', category: "American" },
    { name: 'Philly Steak Out', category: "American" },
    { name: "Pontillo's", category: "Pizza" },
    { name: "Avvino", category: "Italian" },
    { name: "Joey's", category: "Italian" },
    { name: "Michael's Valley Grill", category: "Italian" },
    { name: "Marks", category: "Pizza" },
    { name: "Rosey's", category: "Italian" },
    { name: "Good Luck", category: "American" },
    { name: 'Basin Pub', category: "American" },
    { name: 'Blu Wolf', category: "American" },
    { name: 'Old Stone Tavern', category: "American" },
    { name: "Gate House", category: "American" },
    { name: "Pane Vino", category: "Italian" },
    { name: "Thali of India", category: "Asian" },
    { name: "Branca", category: "Italian" },
    { name: "Max of Eastman Place", category: "Italian" },
    { name: "Dogtown", category: "American" },
    { name: "McCann's Meats", category: "American" },
    { name: "Bitter Honey", category: "Mexican" },
    { name: "Pizza Stop", category: "Pizza" },
    { name: "Phillips European", category: "Italian" },
    { name: "DiBella's", category: "Sandwiches" }
];

const categories = [
    "Italian",
    "American",
    "Fast-food",
    "Sandwiches",
    "Bakeries",
    "Asian",
    "Breakfast",
    "French",
    "Mexican",
    "Greek",
    "Pizza"
];

const giveRandomRestaurant = () => {
    const anyRestaurant = document.getElementById("anyRestaurant");
    let randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    anyRestaurant.innerHTML = "<h3>" + randomRestaurant.name + "</h3>";
};

const generateDropdown = () => {
    const categoryDropdown = document.getElementById("categoryDropdown");
    categoryDropdown.insertAdjacentHTML("afterbegin",
        categories.map(category => `<a class='dropdown-item' onClick = showCategoryList('${category}')>` + category + "</a>").join(''));
};

const categoryList = document.getElementById("categoryList");

const showCategoryList = (category) => {
    categoryList.innerHTML =
        "<h3>" + category + " restaurants:" + "</h3>" +
        "<ul>" + restaurants.filter(restaurant => restaurant.category === category).map(match => "<li>" + match.name + "</li>").join('') + "</ul>";
};


generateDropdown();

