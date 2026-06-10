export const categories = [
  "All",
  "Hot Sandwiches",
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

export const menuItems = [
  {
    id: "classic-cheesesteak",
    category: "Hot Sandwiches",
    name: "Classic Cheesesteak",
    price: 13.95,
    desc: "Shaved beef, grilled onions and peppers, and melted provolone on a toasted roll.",
    flags: ["customer favorite"],
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "banh-mi-chicken",
    category: "Hot Sandwiches",
    name: "Banh Mi Chicken",
    price: 13.5,
    desc: "Marinated chicken, crisp vegetables, cilantro, jalapeño, and house sauce.",
    flags: ["big flavor"],
    image: "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "fried-chicken",
    category: "Hot Sandwiches",
    name: "Fried Chicken Sandwich",
    price: 13.75,
    desc: "Crispy fried chicken with fresh toppings and Toasted house sauce.",
    flags: ["customer favorite"],
    image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=85",
    modifiers: sandwichModifiers
  },
  {
    id: "avocado-chicken",
    category: "Hot Sandwiches",
    name: "Avocado Chicken",
    price: 13.5,
    desc: "Grilled chicken, onions, peppers, lettuce, tomato, cilantro, and fresh avocado.",
    flags: [],
    modifiers: sandwichModifiers
  },
  {
    id: "american-burger",
    category: "Burgers & Wraps",
    name: "American Burger",
    price: 12.95,
    desc: "A Toasted take on the classic American burger, hot off the grill.",
    flags: ["customer favorite"],
    modifiers: sandwichModifiers
  },
  {
    id: "el-camino",
    category: "Burgers & Wraps",
    name: "El Camino Chicken Wrap",
    price: 12.75,
    desc: "Grilled chicken and fresh vegetables wrapped for an easy desk-side lunch.",
    flags: [],
    modifiers: sandwichModifiers
  },
  {
    id: "house-salad",
    category: "Salads & Sides",
    name: "Toasted House Salad",
    price: 10.5,
    desc: "Fresh greens, vegetables, and your choice of dressing. Add chicken if you like.",
    flags: ["lighter lunch"],
    modifiers: [{
      id: "protein",
      name: "Add protein",
      required: false,
      options: [{ id: "none", name: "No protein", price: 0 }, { id: "chicken", name: "Grilled chicken", price: 4 }]
    }, drinkGroup]
  },
  {
    id: "loaded-tots",
    category: "Salads & Sides",
    name: "Loaded Tater Tots",
    price: 7.5,
    desc: "Crispy tots loaded Toasted-style. Built for sharing, if you feel generous.",
    flags: ["shareable"],
    modifiers: []
  },
  {
    id: "mediterranean-coffee",
    category: "Coffee & Drinks",
    name: "Mediterranean Coffee",
    price: 4.25,
    desc: "A distinctive Toasted Cafe coffee favorite, served hot.",
    flags: [],
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
    modifiers: []
  },
  {
    id: "breakfast-croissant",
    category: "Breakfast",
    name: "Breakfast Croissant",
    price: 8.5,
    desc: "A warm, flaky start to the workday.",
    flags: ["morning"],
    modifiers: []
  }
];

export const featuredIds = ["classic-cheesesteak", "banh-mi-chicken", "fried-chicken"];
