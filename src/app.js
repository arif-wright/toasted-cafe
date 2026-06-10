import "./styles.css";

const favorites = [
  {
    name: "The Wake Up",
    price: "$10.50",
    description: "Soft scrambled eggs, sharp cheddar, bacon, and smoky tomato jam on brioche.",
    tag: "Breakfast favorite",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Turkey Pesto",
    price: "$13.75",
    description: "Roasted turkey, basil pesto, provolone, tomato, and arugula on toasted ciabatta.",
    tag: "House classic",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Hot Honey Latte",
    price: "$5.75",
    description: "Double espresso, steamed milk, wildflower honey, cinnamon, and a touch of heat.",
    tag: "Sip of the season",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85"
  }
];

const menu = [
  { category: "Breakfast", name: "The Wake Up", price: "$10.50", desc: "Scrambled egg, sharp cheddar, bacon, smoky tomato jam, brioche", flags: ["favorite"] },
  { category: "Breakfast", name: "Green Morning", price: "$11.25", desc: "Egg, avocado, feta, arugula, herb sauce, multigrain", flags: ["vegetarian"] },
  { category: "Breakfast", name: "Bodega Bagel", price: "$9.75", desc: "Fried egg, American cheese, sausage, hot sauce, everything bagel", flags: [] },
  { category: "Sandwiches", name: "Turkey Pesto", price: "$13.75", desc: "Roasted turkey, basil pesto, provolone, tomato, arugula, ciabatta", flags: ["favorite"] },
  { category: "Sandwiches", name: "Spicy Chicken", price: "$14.25", desc: "Crispy chicken, hot honey, pickles, slaw, toasted potato roll", flags: ["spicy"] },
  { category: "Sandwiches", name: "The Garden Melt", price: "$12.75", desc: "Roasted vegetables, mozzarella, olive tapenade, sourdough", flags: ["vegetarian"] },
  { category: "Salads", name: "Crispy Grain Bowl", price: "$13.50", desc: "Farro, greens, sweet potato, avocado, crispy chickpeas, tahini", flags: ["vegan", "gluten free"] },
  { category: "Salads", name: "Chicken Caesar-ish", price: "$14.50", desc: "Little gem, grilled chicken, parmesan, breadcrumbs, lemony dressing", flags: [] },
  { category: "Coffee", name: "Hot Honey Latte", price: "$5.75", desc: "Espresso, steamed milk, wildflower honey, cinnamon, cayenne", flags: ["favorite"] },
  { category: "Coffee", name: "Brown Sugar Cold Brew", price: "$5.50", desc: "Slow-steeped cold brew, brown sugar, oat milk foam", flags: ["vegan"] }
];

document.querySelector("#app").innerHTML = `
  <div class="announcement">Good mornings start here <span aria-hidden="true">·</span> Order ahead & skip the line</div>
  <header class="site-header">
    <a href="#home" class="logo" aria-label="Toasted Cafe home"><span class="logo-mark"></span><span>toasted cafe</span></a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#menu">Menu</a><a href="#catering">Catering</a><a href="#locations">Locations</a><a href="#story">Our story</a>
    </nav>
    <div class="header-actions">
      <button class="bag" aria-label="Shopping bag">Bag<span class="bag-count">0</span></button>
      <button class="btn btn-orange desktop-order order-trigger">Order now</button>
      <button class="menu-toggle" aria-label="Open menu"></button>
    </div>
  </header>
  <nav class="mobile-menu" aria-label="Mobile navigation">
    <a href="#menu">Menu</a><a href="#catering">Catering</a><a href="#locations">Locations</a><a href="#story">Our story</a>
  </nav>

  <main>
    <section class="hero" id="home">
      <div class="hero-copy">
        <p class="eyebrow">Your neighborhood cafe</p>
        <h1>Made to make your day <span class="accent">better.</span></h1>
        <p>Proper breakfast, seriously good sandwiches, and coffee that keeps up. Made fresh, served warm, and ready when you are.</p>
        <div class="hero-actions">
          <button class="btn btn-orange order-trigger">Start an order</button>
          <a class="btn btn-outline" href="#menu">Explore the menu</a>
        </div>
      </div>
      <div class="hero-media">
        <img src="https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=1400&q=90" alt="Fresh toasted sandwich cut in half" />
        <div class="hero-badge">Made fresh, every single time</div>
      </div>
    </section>

    <section class="quick-order" aria-label="Quick order">
      <div class="quick-title"><span>01</span><div><strong>How do you want it?</strong><small>Choose an order type to get started</small></div></div>
      <div class="order-options">
        <button class="order-option active" data-type="Pickup"><span>↗</span><span><b>Pickup</b><small>Ready in 15–20 min</small></span></button>
        <button class="order-option" data-type="Delivery"><span>⌂</span><span><b>Delivery</b><small>Right to your door</small></span></button>
      </div>
      <button class="btn btn-light order-trigger">Find your cafe</button>
    </section>

    <section class="section" id="favorites">
      <div class="section-head">
        <div><p class="eyebrow">Crowd pleasers</p><h2>The regulars'<br>regulars.</h2></div>
        <p class="section-lead">The sandwiches, breakfasts, and sips people come back for. Try one now, thank yourself later.</p>
      </div>
      <div class="favorite-grid">${favorites.map(card => `
        <article class="food-card">
          <div class="food-card-image"><img src="${card.image}" alt="${card.name}" loading="lazy"><span class="tag">${card.tag}</span></div>
          <div class="food-card-copy">
            <div class="food-card-title"><div><h3>${card.name}</h3><strong>${card.price}</strong></div><button class="add-btn" data-item="${card.name}" aria-label="Add ${card.name}">+</button></div>
            <p>${card.description}</p>
          </div>
        </article>`).join("")}
      </div>
    </section>

    <section class="story" id="story">
      <div class="story-image"><img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85" alt="Warm cafe interior" loading="lazy"></div>
      <div class="story-copy">
        <p class="eyebrow">Hello, neighbor</p>
        <h2>A local cafe with a lot on its plate.</h2>
        <p>We started Toasted to make everyday food worth getting excited about. That means real ingredients, kind people, and a space that feels easy to walk into.</p>
        <p>From your first coffee to your late lunch, we're here to make the good part of your day even better.</p>
        <a class="btn btn-outline" href="#locations">Meet us in person</a>
        <div class="stats"><div class="stat"><strong>7am</strong><span>Doors open</span></div><div class="stat"><strong>Daily</strong><span>Bread toasted</span></div><div class="stat"><strong>100%</strong><span>Good energy</span></div></div>
      </div>
    </section>

    <section class="section menu-section" id="menu">
      <div class="section-head">
        <div><p class="eyebrow">The full spread</p><h2>Menu</h2></div>
        <p class="section-lead">Breakfast all morning. Sandwiches all afternoon. Coffee whenever. Dietary notes are marked below.</p>
      </div>
      <div class="category-tabs" role="tablist">
        ${["All", "Breakfast", "Sandwiches", "Salads", "Coffee"].map((c, i) => `<button class="category-tab ${i === 0 ? "active" : ""}" data-category="${c}">${c}</button>`).join("")}
      </div>
      <div class="menu-list">${renderMenu(menu)}</div>
    </section>

    <section class="section catering" id="catering">
      <div class="catering-grid">
        <div>
          <p class="eyebrow">Bring everyone to the table</p>
          <h2>Big meeting? Better sandwiches.</h2>
          <p class="section-lead">From team breakfasts to birthday lunches, our crowd-sized spreads make feeding a group feel remarkably simple.</p>
          <br><button class="btn btn-orange catering-trigger">Plan your spread</button>
        </div>
        <div class="catering-cards">
          <div class="catering-card"><strong>Breakfast boxes</strong><span>Individually packed and ready for early starts.</span></div>
          <div class="catering-card"><strong>Sandwich spreads</strong><span>Our favorites, sliced and ready to share.</span></div>
          <div class="catering-card"><strong>Fresh coffee</strong><span>Hot, plentiful, and equipped with all the fixings.</span></div>
        </div>
      </div>
    </section>

    <section class="section" id="locations">
      <div class="section-head">
        <div><p class="eyebrow">Come say hi</p><h2>Your cafe is close.</h2></div>
        <p class="section-lead">Find a Toasted near you, check today's hours, or start an order for pickup.</p>
      </div>
      <div class="location-grid">
        <article class="location-card">
          <span class="status">● Open now</span><h3>Downtown</h3><p>145 Market Street<br>Portland, OR 97205</p>
          <div class="location-meta"><div><small>Today</small><strong>7am – 4pm</strong></div><div><small>Distance</small><strong>0.8 miles</strong></div></div>
          <div class="location-actions"><button class="btn btn-orange btn-small order-trigger">Order here</button><button class="btn btn-outline btn-small directions-trigger">Directions</button></div>
        </article>
        <div class="map"><img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80" alt="Map-style location background" loading="lazy"><div class="map-pin"><span>T</span></div></div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div><a href="#home" class="logo"><span class="logo-mark"></span><span>toasted cafe</span></a><p>Proper breakfast, seriously good sandwiches, and coffee that keeps up. Made for your every day.</p></div>
    <div class="footer-links"><a href="#menu">Menu</a><a href="#locations">Locations</a><a href="#catering">Catering</a><a href="#story">Our story</a><a href="#">Instagram</a><a href="#">Contact</a></div>
    <div class="footer-bottom">© 2026 Toasted Cafe. Good food, made daily.</div>
  </footer>
  <button class="btn btn-orange mobile-order-bar order-trigger"><span>Order now</span><span>Pickup · 15–20 min</span></button>
  <div class="toast" role="status" aria-live="polite"></div>
`;

function renderMenu(items) {
  return items.map(item => `
    <article class="menu-item">
      <div><h3>${item.name}</h3><p>${item.desc}</p>${item.flags.length ? `<div class="menu-flags">${item.flags.map(f => `<span>${f}</span>`).join("")}</div>` : ""}</div>
      <span class="menu-price">${item.price}</span>
    </article>
  `).join("");
}

const toast = document.querySelector(".toast");
let toastTimer;
function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

const mobileMenu = document.querySelector(".mobile-menu");
document.querySelector(".menu-toggle").addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => mobileMenu.classList.remove("open")));

document.querySelectorAll(".order-option").forEach(option => option.addEventListener("click", () => {
  document.querySelectorAll(".order-option").forEach(item => item.classList.remove("active"));
  option.classList.add("active");
  document.querySelector(".mobile-order-bar span:last-child").textContent = `${option.dataset.type} · ${option.dataset.type === "Pickup" ? "15–20 min" : "30–40 min"}`;
}));

document.querySelectorAll(".category-tab").forEach(tab => tab.addEventListener("click", () => {
  document.querySelectorAll(".category-tab").forEach(item => item.classList.remove("active"));
  tab.classList.add("active");
  const items = tab.dataset.category === "All" ? menu : menu.filter(item => item.category === tab.dataset.category);
  document.querySelector(".menu-list").innerHTML = renderMenu(items);
}));

let bagCount = 0;
document.querySelectorAll(".add-btn").forEach(button => button.addEventListener("click", () => {
  bagCount += 1;
  document.querySelector(".bag-count").textContent = bagCount;
  notify(`${button.dataset.item} added to your bag`);
}));
document.querySelectorAll(".order-trigger").forEach(button => button.addEventListener("click", () => {
  document.querySelector("#locations").scrollIntoView({ behavior: "smooth" });
  notify("Choose your cafe to start an order");
}));
document.querySelector(".catering-trigger").addEventListener("click", () => notify("Catering inquiry started — we'll help plan the spread"));
document.querySelector(".directions-trigger").addEventListener("click", () => notify("Opening directions to Downtown Toasted"));
document.querySelector(".bag").addEventListener("click", () => notify(bagCount ? `${bagCount} item${bagCount > 1 ? "s" : ""} in your bag` : "Your bag is ready for something delicious"));
