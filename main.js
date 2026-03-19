const restaurants = [
    { name: 'Roux', category: "French" },
    { name: 'Hong Wah', category: "Asian" },
    { name: 'Pittsford Pub', category: "American" },
    { name: "Tom Wahl's", category: "American" },
    { name: "Bill Gray's", category: "American" },
    { name: 'Cheesecake Factory', category: "American" },
    { name: "Adelita's", category: "Mexican" },
    { name: 'Atlas Eats', category: "American" },
    { name: "Aladdin's", category: "Greek" },
    { name: 'Monte Alban', category: "Mexican" },
    { name: 'Amore', category: "Italian" },
    { name: "Benucci's", category: "Italian" },
    { name: 'Nosh', category: "American" },
    { name: 'Black & Blue', category: "American" },
    { name: "Avvino", category: "Italian" },
    { name: "Joey's", category: "Italian" },
    { name: "Rosey's", category: "Italian" },
    { name: "Good Luck", category: "American" },
    { name: 'Basin Pub', category: "American" },
    { name: 'Blu Wolf', category: "American" },
    { name: "Gate House", category: "American" },
    { name: "Pane Vino", category: "Italian" },
    { name: "Max of Eastman Place", category: "Italian" },
    { name: "Bitter Honey", category: "Mexican" },
    { name: "Bocaccini's", category: "Italian" },
    { name: "Branca Basin", category: "Italian" },
    { name: "Branca Midtown", category: "Italian" },
    { name: "Brown Hound at MAG", category: "American" },
    { name: "Fiamma Centro", category: "Italian" },
    { name: "Char", category: "American" },
    { name: "Chortke", category: "American" },
    { name: "Chen Garden", category: "Asian" },
    { name: "Coho", category: "American" },
    { name: "Compane", category: "Italian" },
    { name: "Crisp", category: "American" },
    { name: "Cure", category: "American" },
    { name: "Delmonico's", category: "American" },
    { name: "Erie Grill", category: "American" },
    { name: "Fiorella", category: "Italian" },
    { name: "Gio's Prime 26", category: "American" },
    { name: "Good Smoke", category: "American" },
    { name: "Han Noodle", category: "Asian" },
    { name: "Horizons at Woodcliff", category: "American" },
    { name: "Humphrey House", category: "American" },
    { name: "Jeremiah's", category: "American" },
    { name: "Jines", category: "Breakfast" },
    { name: "Jojo", category: "Italian" },
    { name: "King and I", category: "Asian" },
    { name: "Label Pittsford", category: "American" },
    { name: "Lemoncello", category: "Italian" },
    { name: "Lento", category: "American" },
    { name: "Leonore's", category: "Italian" },
    { name: "Living Roots", category: "American" },
    { name: "Lucano", category: "Italian" },
    { name: "Lulu Taqueria", category: "Mexican" },
    { name: "Magnolia's", category: "American" },
    { name: "Max Chophouse", category: "American" },
    { name: "Native", category: "American" },
    { name: "New York Beer Project", category: "American" },
    { name: "Next Door", category: "American" },
    { name: "Old Pueblo Grill", category: "Mexican" },
    { name: "Olives", category: "Greek" },
    { name: "Patron Saint", category: "American" },
    { name: "Pasta Villa", category: "Italian" },
    { name: "Radio Social", category: "American" },
    { name: "Red Sun", category: "Asian" },
    { name: "Redd", category: "American" },
    { name: "Redd Wood", category: "American" },
    { name: "Rooney's", category: "American" },
    { name: "Salena's", category: "Mexican" },
    { name: "Simply Crepes", category: "Breakfast" },
    { name: "Sinbad's", category: "Greek" },
    { name: "Sodam", category: "Asian" },
    { name: "Steve's Diner", category: "Breakfast" },
    { name: "Strangebird", category: "American" },
    { name: "Sultan", category: "Greek" },
    { name: "Sunny's Diner", category: "Breakfast" },
    { name: "The Revelry", category: "American" },
    { name: "The Richmond", category: "American" },
    { name: "Tony D's", category: "Italian" },
    { name: "Velvet Belly", category: "American" },
    { name: "Vern's", category: "American" }
];

const categories = [
    "Italian",
    "American",
    "Sandwiches",
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
