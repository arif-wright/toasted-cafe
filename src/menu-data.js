export const categories = [
  "Popular",
  "Hot Sandwiches",
  "Cold Sandwiches",
  "Salads",
  "Sides",
  "Breakfast",
  "Sweet Tooth",
  "Coffee",
  "Beverages"
];

export const popularIds = [
  "classic-cheesesteak",
  "banh-mi-chicken",
  "fried-chicken",
  "american-burger",
  "el-camino",
  "chicken-caesar-salad",
  "latte",
  "breakfast-tacos"
];

const sideGroup = {
  id: "side",
  name: "Choose your side",
  required: true,
  options: [
    { id: "fries", name: "Fries", price: 0 },
    { id: "tots", name: "Tater tots", price: 0 },
    { id: "salad", name: "Side salad", price: 0 },
    { id: "chips", name: "Chips", price: 0 }
  ]
};

const chipGroup = {
  id: "chip-flavor",
  name: "Pick a chip flavor",
  required: true,
  showWhen: { group: "side", value: "chips" },
  options: [
    { id: "sea-salt", name: "Sea Salt", price: 0 },
    { id: "bbq", name: "Barbecue", price: 0 },
    { id: "jalapeno", name: "Jalapeño", price: 0 },
    { id: "salt-vinegar", name: "Salt & Vinegar", price: 0 }
  ]
};

const drinkGroup = {
  id: "drink",
  name: "Add a drink",
  required: false,
  options: [
    { id: "none", name: "No drink", price: 0 },
    { id: "tea", name: "SM Iced Tea", price: 3 },
    { id: "fountain", name: "SM Fountain Drink", price: 3 },
    { id: "coffee", name: "Unlimited Coffee", price: 3.5 }
  ]
};

const sandwichModifiers = [sideGroup, chipGroup, drinkGroup];

const dressingGroup = {
  id: "dressing",
  name: "Choose your dressing",
  required: true,
  options: [
    { id: "ranch", name: "Ranch", price: 0 },
    { id: "caesar", name: "Caesar", price: 0 },
    { id: "chipotle-ranch", name: "Chipotle ranch", price: 0 },
    { id: "vinaigrette", name: "Vinaigrette", price: 0 }
  ]
};

const tenderSauceGroup = {
  id: "sauce",
  name: "Choose your sauce",
  required: true,
  options: [
    { id: "ranch", name: "Ranch", price: 0 },
    { id: "bbq", name: "Barbecue", price: 0 },
    { id: "spicy-mayo", name: "Spicy house mayo", price: 0 }
  ]
};

const mayoGroup = {
  id: "mayo",
  name: "Choose your house mayo",
  required: true,
  options: [
    { id: "regular", name: "Regular house mayo", price: 0 },
    { id: "spicy", name: "Spicy house mayo", price: 0 }
  ]
};

const burgerExtrasGroup = {
  id: "burger-extra",
  name: "Add to your burger",
  required: false,
  options: [
    { id: "none", name: "No extras", price: 0 },
    { id: "cheese", name: "Cheese", price: 1 },
    { id: "double", name: "Double meat", price: 2 },
    { id: "bacon", name: "Bacon", price: 1.25 },
    { id: "avocado", name: "Avocado", price: 1.25 }
  ]
};

export const menuItems = [
  {
    id: "classic-cheesesteak",
    category: "Hot Sandwiches",
    name: "Classic Cheesesteak",
    price: 13,
    desc: "Grilled steak, mayo, melted cheese, and sautéed onions and peppers on a toasted roll.",
    flags: ["customer favorite"],
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "banh-mi-chicken",
    category: "Hot Sandwiches",
    name: "Chicken Banh Mi",
    price: 11,
    desc: "Chicken, house aioli, pickled red onion, cucumber, carrot, cilantro, and tomato on a French roll.",
    flags: ["big flavor"],
    image: "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "banh-mi-pork-belly",
    category: "Hot Sandwiches",
    name: "Pork Belly Banh Mi",
    price: 14,
    desc: "Pork belly, house aioli, pickled red onion, cucumber, carrot, cilantro, and tomato on a French roll.",
    flags: ["bold favorite"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "banh-mi-steak",
    category: "Hot Sandwiches",
    name: "Steak Banh Mi",
    price: 12,
    desc: "Steak, house aioli, pickled red onion, cucumber, carrot, cilantro, and tomato on a French roll.",
    flags: [],
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "fried-chicken",
    category: "Hot Sandwiches",
    name: "Fried Chicken Sandwich",
    price: 9.5,
    desc: "Crispy fried chicken breast, Swiss cheese, pickles, and your choice of regular or spicy house mayo.",
    flags: ["customer favorite"],
    image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=85",
    modifiers: [mayoGroup, ...sandwichModifiers]
  },
  {
    id: "avocado-chicken",
    category: "Hot Sandwiches",
    name: "Avocado Chicken",
    price: 11,
    desc: "Grilled chicken, mayo, grilled onions, peppers, lettuce, tomato, cilantro, and fresh avocado.",
    flags: [],
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "american-burger",
    category: "Hot Sandwiches",
    name: "American Burger",
    price: 10,
    desc: "Beef patty with mayo, lettuce, tomato, pickles, and onion.",
    flags: ["customer favorite"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    modifiers: [burgerExtrasGroup, ...sandwichModifiers]
  },
  {
    id: "el-camino",
    category: "Hot Sandwiches",
    name: "El Camino Chicken",
    price: 12,
    desc: "Cilantro-lime marinated grilled chicken with smoky chipotle mayo, lettuce, tomato, avocado, and onions on a toasted bun.",
    flags: [],
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "pork-belly-sandwich",
    category: "Hot Sandwiches",
    name: "Pork Belly Sandwich",
    price: 14,
    desc: "Crispy pork belly with lettuce, tomato, onions, on a soft bun.",
    flags: ["hearty"],
    image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "chicken-tenders",
    category: "Hot Sandwiches",
    name: "Chicken Tenders",
    price: 9.5,
    desc: "Hand-breaded, golden-fried chicken tenders served with your choice of sauce and side.",
    flags: [],
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85",
    modifiers: [tenderSauceGroup, sideGroup, chipGroup, drinkGroup]
  },
  {
    id: "special",
    category: "Hot Sandwiches",
    name: "Special",
    price: 10.89,
    desc: "Ask about today's Toasted Cafe special.",
    flags: ["today's special"],
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "ham-swiss",
    category: "Cold Sandwiches",
    name: "Ham & Swiss",
    price: 10,
    desc: "Ham, Swiss, green leaf lettuce, tomatoes, cucumber, red onion, cilantro, and house-made mayonnaise.",
    flags: [],
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "blt",
    category: "Cold Sandwiches",
    name: "BLT",
    price: 11,
    desc: "Thick-cut smoked bacon, green leaf lettuce, Roma tomato, and house aioli.",
    flags: ["classic"],
    image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "roast-chicken",
    category: "Cold Sandwiches",
    name: "Roast Chicken",
    price: 10,
    desc: "Roasted chicken, green leaf lettuce, tomatoes, cucumber, red onion, cilantro, and house-made mayonnaise.",
    flags: [],
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "turkey-swiss",
    category: "Cold Sandwiches",
    name: "Turkey & Swiss",
    price: 10,
    desc: "Turkey, Swiss, green leaf lettuce, cucumber, tomatoes, red onion, cilantro, and house-made mayonnaise.",
    flags: [],
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "california-club",
    category: "Cold Sandwiches",
    name: "California Club",
    price: 11,
    desc: "Turkey breast, bacon, avocado, lettuce, tomato, cucumber, onion, and mayo on wheat bread.",
    flags: ["loaded"],
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "veggie-wrap",
    category: "Cold Sandwiches",
    name: "Veggie Wrap",
    price: 9,
    desc: "Lettuce, cucumber, tomato, pickled carrots, red onion, avocado, seasonal hummus, and vinaigrette.",
    flags: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "chicken-caesar-salad",
    category: "Salads",
    name: "Chicken Caesar Salad",
    price: 11,
    desc: "Crisp romaine topped with grilled chicken, house-made Caesar dressing, Parmesan cheese, and seasoned croutons.",
    flags: ["lighter lunch"],
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=85",
    modifiers: [drinkGroup]
  },
  {
    id: "cobb-salad",
    category: "Salads",
    name: "Cobb Salad",
    price: 11,
    desc: "Chopped romaine, grilled chicken, bacon, avocado, tomato, carrots, onions, cucumbers, hard-boiled egg, and blue cheese.",
    flags: ["hearty salad"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    modifiers: [dressingGroup, drinkGroup]
  },
  {
    id: "chef-salad",
    category: "Salads",
    name: "Chef Salad",
    price: 11,
    desc: "Mixed greens with ham, turkey, Swiss, tomato, cucumber, carrots, onions, and hard-boiled egg.",
    flags: [],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    modifiers: [dressingGroup, drinkGroup]
  },
  {
    id: "fajita-salad",
    category: "Salads",
    name: "Fajita Salad",
    price: 11,
    desc: "Seasoned grilled chicken over fresh greens with bell peppers, onions, tomato, avocado, carrots, cucumbers, cheese, and tortilla strips.",
    flags: ["chipotle ranch"],
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=85",
    modifiers: [drinkGroup]
  },
  {
    id: "sm-fries",
    category: "Sides",
    name: "SM Fries",
    price: 4,
    desc: "A small order of golden French fries.",
    flags: ["side"],
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "sm-tots",
    category: "Sides",
    name: "SM Tots",
    price: 4,
    desc: "A small order of crispy tater tots.",
    flags: ["side"],
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "lg-fries",
    category: "Sides",
    name: "LG Fries",
    price: 7,
    desc: "A large order of golden French fries.",
    flags: ["side"],
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "lg-tots",
    category: "Sides",
    name: "LG Tots",
    price: 7,
    desc: "A large order of crispy tater tots.",
    flags: ["side"],
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "side-salad",
    category: "Sides",
    name: "Side Salad",
    price: 4,
    desc: "A fresh side salad with your choice of dressing.",
    flags: ["side"],
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=85",
    modifiers: [dressingGroup]
  },
  {
    id: "chips",
    category: "Sides",
    name: "Chips",
    price: 2,
    desc: "A bag of chips in your favorite flavor.",
    flags: ["side"],
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=900&q=85",
    modifiers: [{
      id: "chip-flavor",
      name: "Pick a chip flavor",
      required: true,
      options: chipGroup.options
    }]
  },
  {
    id: "mediterranean-coffee",
    category: "Coffee",
    name: "Mediterranean Coffee",
    price: 5,
    desc: "A distinctive Toasted Cafe coffee favorite, served hot.",
    flags: [],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "unlimited-coffee",
    category: "Coffee",
    name: "Unlimited Coffee",
    price: 3.5,
    desc: "Fresh house coffee with refills while you dine in.",
    flags: [],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "latte",
    category: "Coffee",
    name: "Latte",
    price: 4.5,
    desc: "Espresso with smooth steamed milk.",
    flags: [],
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "espresso",
    category: "Coffee",
    name: "Espresso",
    price: 2.5,
    desc: "A rich shot of espresso.",
    flags: [],
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "americanos",
    category: "Coffee",
    name: "Americanos",
    price: 4.5,
    desc: "Espresso finished with hot water.",
    flags: [],
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "specialty-coffee",
    category: "Coffee",
    name: "Specialty Coffee",
    price: 5,
    desc: "Ask about today's specialty coffee.",
    flags: ["house specialty"],
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "cappuccinos",
    category: "Coffee",
    name: "Cappuccinos",
    price: 4.5,
    desc: "Espresso with steamed milk and a rich layer of foam.",
    flags: [],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "dozen-tacos",
    category: "Breakfast",
    name: "Dozen (12) Tacos",
    price: 16.99,
    desc: "A dozen breakfast tacos for the office or the table.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "potato-egg-taco",
    category: "Breakfast",
    name: "Potato & Egg Taco",
    price: 1.85,
    desc: "A warm breakfast taco with potato and egg.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "breakfast-tacos",
    category: "Breakfast",
    name: "Breakfast Tacos",
    price: 1.99,
    desc: "A quick San Antonio morning favorite.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "bean-cheese-taco",
    category: "Breakfast",
    name: "Bean & Cheese Taco",
    price: 1.65,
    desc: "A warm breakfast taco with beans and cheese.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "sa-keto-cito",
    category: "Breakfast",
    name: "The SA Keto-Cito",
    price: 9,
    desc: "A satisfying low-carb San Antonio breakfast.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "avocado-toast",
    category: "Breakfast",
    name: "Avocado Toast",
    price: 5,
    desc: "Fresh avocado served on toasted bread.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "breakfast-croissant",
    category: "Breakfast",
    name: "Breakfast Croissant",
    price: 5,
    desc: "A warm, flaky start to the workday.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "croque-madame",
    category: "Breakfast",
    name: "Croque Madame",
    price: 5.5,
    desc: "A warm café-style breakfast sandwich.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "egg-white-croissant",
    category: "Breakfast",
    name: "Egg White Croissant",
    price: 6,
    desc: "Egg whites served on a warm, flaky croissant.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "candy",
    category: "Sweet Tooth",
    name: "Candy",
    price: 2,
    desc: "A little something sweet for later.",
    flags: [],
    image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "gum",
    category: "Sweet Tooth",
    name: "Gum",
    price: 1.75,
    desc: "A pack of gum to take with you.",
    flags: [],
    image: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "cheesecake-croissant",
    category: "Sweet Tooth",
    name: "Cheesecake Croissant",
    price: 4.33,
    desc: "A flaky croissant with a sweet cheesecake filling.",
    flags: ["sweet favorite"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "muffins",
    category: "Sweet Tooth",
    name: "Muffins",
    price: 2.75,
    desc: "Ask about today's muffin selection.",
    flags: [],
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "pistachio-croissant",
    category: "Sweet Tooth",
    name: "Pistachio Croissant",
    price: 3.5,
    desc: "A flaky croissant with pistachio filling.",
    flags: ["sweet favorite"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "cookies",
    category: "Sweet Tooth",
    name: "Cookies",
    price: 1.25,
    desc: "A classic cookie for a sweet finish.",
    flags: [],
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "gatorade",
    category: "Beverages",
    name: "Gatorade",
    price: 2.5,
    desc: "A chilled bottle of Gatorade.",
    flags: [],
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "sm-fountain-drink",
    category: "Beverages",
    name: "SM Fountain Drink",
    price: 3,
    desc: "A small fountain drink.",
    flags: [],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "water",
    category: "Beverages",
    name: "Water",
    price: 0,
    desc: "A cup of water.",
    flags: [],
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "sm-iced-tea",
    category: "Beverages",
    name: "SM Iced Tea",
    price: 3,
    desc: "A small fresh-brewed iced tea.",
    flags: [],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "lg-fountain-drink",
    category: "Beverages",
    name: "LG Fountain Drink",
    price: 3.5,
    desc: "A large fountain drink.",
    flags: [],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "lg-iced-tea",
    category: "Beverages",
    name: "LG Iced Tea",
    price: 3.5,
    desc: "A large fresh-brewed iced tea.",
    flags: [],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "energy-drink",
    category: "Beverages",
    name: "Energy Drink",
    price: 3.75,
    desc: "A chilled energy drink.",
    flags: [],
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "bottle-soda",
    category: "Beverages",
    name: "Bottle Soda",
    price: 2.5,
    desc: "A chilled bottled soda.",
    flags: [],
    image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "bottle-water",
    category: "Beverages",
    name: "Bottle Water",
    price: 1.5,
    desc: "A chilled bottle of water.",
    flags: [],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  }
];

export const featuredIds = ["classic-cheesesteak", "banh-mi-chicken", "fried-chicken"];
