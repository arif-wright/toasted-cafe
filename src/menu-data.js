export const categories = [
  "All",
  "Hot Sandwiches",
  "Cold Sandwiches",
  "Burgers & Wraps",
  "Salads & Sides",
  "Coffee & Drinks",
  "Breakfast"
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
    { id: "tea", name: "Fresh iced tea", price: 2.5 },
    { id: "fountain", name: "Fountain drink", price: 2.5 },
    { id: "coffee", name: "House coffee", price: 2.75 }
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
    name: "Banh Mi Chicken",
    price: 11,
    desc: "Chicken, house aioli, pickled red onion, cucumber, carrot, cilantro, and tomato on a French roll.",
    flags: ["big flavor"],
    image: "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "banh-mi-pork-belly",
    category: "Hot Sandwiches",
    name: "Banh Mi Pork Belly",
    price: 14,
    desc: "Pork belly, house aioli, pickled red onion, cucumber, carrot, cilantro, and tomato on a French roll.",
    flags: ["bold favorite"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "banh-mi-steak",
    category: "Hot Sandwiches",
    name: "Banh Mi Steak",
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
    category: "Burgers & Wraps",
    name: "American Burger",
    price: 10,
    desc: "Beef patty with mayo, lettuce, tomato, pickles, and onion.",
    flags: ["customer favorite"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    modifiers: [burgerExtrasGroup, ...sandwichModifiers]
  },
  {
    id: "el-camino",
    category: "Burgers & Wraps",
    name: "El Camino Chicken",
    price: 11,
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
    category: "Burgers & Wraps",
    name: "Veggie Wrap",
    price: 9,
    desc: "Lettuce, cucumber, tomato, pickled carrots, red onion, avocado, seasonal hummus, and vinaigrette.",
    flags: ["vegetarian"],
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "chicken-caesar-salad",
    category: "Salads & Sides",
    name: "Chicken Caesar Salad",
    price: 11,
    desc: "Crisp romaine topped with grilled chicken, house-made Caesar dressing, Parmesan cheese, and seasoned croutons.",
    flags: ["lighter lunch"],
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=85",
    modifiers: [drinkGroup]
  },
  {
    id: "cobb-salad",
    category: "Salads & Sides",
    name: "Cobb Salad",
    price: 11,
    desc: "Chopped romaine, grilled chicken, bacon, avocado, tomato, carrots, onions, cucumbers, hard-boiled egg, and blue cheese.",
    flags: ["hearty salad"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    modifiers: [dressingGroup, drinkGroup]
  },
  {
    id: "chef-salad",
    category: "Salads & Sides",
    name: "Chef Salad",
    price: 11,
    desc: "Mixed greens with ham, turkey, Swiss, tomato, cucumber, carrots, onions, and hard-boiled egg.",
    flags: [],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    modifiers: [dressingGroup, drinkGroup]
  },
  {
    id: "fajita-salad",
    category: "Salads & Sides",
    name: "Fajita Salad",
    price: 11,
    desc: "Seasoned grilled chicken over fresh greens with bell peppers, onions, tomato, avocado, carrots, cucumbers, cheese, and tortilla strips.",
    flags: ["chipotle ranch"],
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=85",
    modifiers: [drinkGroup]
  },
  {
    id: "loaded-tots",
    category: "Salads & Sides",
    name: "Loaded Tater Tots",
    price: 7.5,
    desc: "Crispy tots loaded Toasted-style. Built for sharing, if you feel generous.",
    flags: ["shareable"],
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "fries-or-tots",
    category: "Salads & Sides",
    name: "French Fries or Tots",
    price: 4,
    desc: "Golden fries or crispy tater tots in your choice of size.",
    flags: ["side"],
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
    modifiers: [
      {
        id: "potato",
        name: "Choose one",
        required: true,
        options: [{ id: "fries", name: "French fries", price: 0 }, { id: "tots", name: "Tater tots", price: 0 }]
      },
      {
        id: "side-size",
        name: "Choose a size",
        required: true,
        options: [{ id: "small", name: "Small", price: 0 }, { id: "large", name: "Large", price: 3 }]
      }
    ]
  },
  {
    id: "side-salad",
    category: "Salads & Sides",
    name: "Side Salad",
    price: 4,
    desc: "A fresh side salad with your choice of dressing.",
    flags: ["side"],
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=85",
    modifiers: [dressingGroup]
  },
  {
    id: "chips",
    category: "Salads & Sides",
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
    category: "Coffee & Drinks",
    name: "Mediterranean Coffee",
    price: 4.25,
    desc: "A distinctive Toasted Cafe coffee favorite, served hot.",
    flags: [],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    modifiers: [{
      id: "size",
      name: "Choose a size",
      required: true,
      options: [{ id: "regular", name: "Regular", price: 0 }, { id: "large", name: "Large", price: 1 }]
    }]
  },
  {
    id: "iced-tea",
    category: "Coffee & Drinks",
    name: "Fresh Iced Tea",
    price: 2.75,
    desc: "Fresh brewed and ready to round out your lunch.",
    flags: [],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",
    modifiers: [{
      id: "tea",
      name: "Choose your tea",
      required: true,
      options: [{ id: "sweet", name: "Sweet", price: 0 }, { id: "unsweet", name: "Unsweet", price: 0 }]
    }]
  },
  {
    id: "breakfast-tacos",
    category: "Breakfast",
    name: "Breakfast Tacos",
    price: 7.95,
    desc: "A quick San Antonio morning favorite, served during breakfast hours.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  },
  {
    id: "breakfast-croissant",
    category: "Breakfast",
    name: "Breakfast Croissant",
    price: 8.5,
    desc: "A warm, flaky start to the workday.",
    flags: ["morning"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
    modifiers: []
  }
];

export const featuredIds = ["classic-cheesesteak", "banh-mi-chicken", "fried-chicken"];
