import "./styles.css";

const ORDER_URL = "https://order.chownow.com/order/43600/locations?add_cn_ordering_class=true";
const PHONE_URL = "tel:+12102549159";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=1777+Northeast+Loop+410+G20+San+Antonio+TX+78217";

const favorites = [
  {
    name: "Classic Cheesesteak",
    description: "A hot, made-to-order Toasted favorite built for a proper lunch break.",
    tag: "Customer favorite",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Banh Mi Chicken",
    description: "A fresh, flavor-packed chicken sandwich with crisp vegetables and herbs.",
    tag: "Big flavor",
    image: "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Fried Chicken Sandwich",
    description: "Crispy chicken and craveable toppings, served with your choice of side.",
    tag: "Lunch essential",
    image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=900&q=85"
  }
];

const menu = [
  { category: "Hot Sandwiches", name: "Classic Cheesesteak", desc: "A customer favorite, served hot and made to order", flags: ["customer favorite"] },
  { category: "Hot Sandwiches", name: "Banh Mi Chicken Sandwich", desc: "Chicken with crisp vegetables, herbs, and bold banh mi flavor", flags: ["customer favorite"] },
  { category: "Hot Sandwiches", name: "Fried Chicken Sandwich", desc: "Crispy fried chicken sandwich served with your choice of side", flags: ["customer favorite"] },
  { category: "Hot Sandwiches", name: "Avocado Chicken", desc: "Grilled chicken, mayo, grilled onions, peppers, lettuce, tomato, cilantro, and fresh avocado", flags: [] },
  { category: "Burgers & Wraps", name: "American Burger", desc: "A Toasted take on the classic American burger", flags: ["customer favorite"] },
  { category: "Burgers & Wraps", name: "El Camino Chicken", desc: "A satisfying chicken favorite made fresh for lunch", flags: [] },
  { category: "Burgers & Wraps", name: "Pork Belly Sandwich", desc: "Rich pork belly served Toasted-style", flags: [] },
  { category: "Burgers & Wraps", name: "Chicken Tenders", desc: "Crispy chicken tenders with your choice of side", flags: [] },
  { category: "Salads & Sides", name: "Fresh Salads", desc: "A crisp, lighter lunch option made fresh", flags: ["lunch"] },
  { category: "Salads & Sides", name: "Fries, Tots, Side Salad or Chips", desc: "Choose a side with any sandwich", flags: ["included with sandwiches"] },
  { category: "Coffee & Drinks", name: "Mediterranean Coffee", desc: "A distinctive Toasted Cafe coffee favorite", flags: [] },
  { category: "Coffee & Drinks", name: "Latte, Cappuccino & Americano", desc: "Classic espresso drinks for the workday", flags: [] },
  { category: "Coffee & Drinks", name: "Iced Tea & Fountain Drinks", desc: "Cold drinks ready to round out your lunch", flags: [] },
  { category: "Breakfast", name: "Breakfast Tacos", desc: "San Antonio mornings, available during breakfast hours", flags: ["morning"] },
  { category: "Breakfast", name: "Breakfast Croissant", desc: "A quick, warm start to the workday", flags: ["morning"] }
];

const orderLink = (label, classes = "btn btn-orange") =>
  `<a class="${classes}" href="${ORDER_URL}" target="_blank" rel="noopener">${label}</a>`;

document.querySelector("#app").innerHTML = `
  <div class="announcement">Weekday lunch made easy <span aria-hidden="true">·</span> Order direct for pickup</div>
  <header class="site-header">
    <a href="#home" class="logo" aria-label="Toasted Cafe home"><img class="logo-image" src="/toasted-cafe-logo.png" alt="Toasted Cafe"></a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#menu">Menu</a><a href="#catering">Office catering</a><a href="#locations">Find us</a><a href="#story">About</a>
    </nav>
    <div class="header-actions">
      <a class="bag phone-header" href="${PHONE_URL}" aria-label="Call Toasted Cafe">Call</a>
      ${orderLink("Order pickup", "btn btn-orange desktop-order")}
      <button class="menu-toggle" aria-label="Open menu"></button>
    </div>
  </header>
  <nav class="mobile-menu" aria-label="Mobile navigation">
    <a href="#menu">Menu</a><a href="#catering">Office catering</a><a href="#locations">Find us</a><a href="${PHONE_URL}">Call (210) 254-9159</a>
  </nav>

  <main>
    <section class="hero" id="home">
      <div class="hero-copy">
        <p class="eyebrow">Sandwiches · burgers · wraps · coffee</p>
        <h1>Your lunch break, <span class="accent">toasted.</span></h1>
        <p>Made-to-order cheesesteaks, chicken sandwiches, burgers, wraps, and salads in San Antonio. Order ahead and pick up fast during the workweek.</p>
        <div class="hero-actions">
          ${orderLink("Order lunch now")}
          <a class="btn btn-outline" href="#menu">See the menu</a>
        </div>
        <div class="hero-proof"><strong>Open weekdays from 7am</strong><span>Basement level · Northwest Tower</span></div>
      </div>
      <div class="hero-media">
        <img src="https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=1400&q=90" alt="Fresh stacked lunch sandwich" />
        <div class="hero-badge">Made fresh for your lunch break</div>
      </div>
    </section>

    <section class="quick-order" aria-label="Quick order">
      <div class="quick-title"><span>01</span><div><strong>Lunch without the wait.</strong><small>Order direct, then head downstairs for pickup.</small></div></div>
      <div class="order-options">
        <div class="order-option active"><span>↗</span><span><b>Fast pickup</b><small>Perfect for a work break</small></span></div>
        <div class="order-option"><span>▦</span><span><b>Team orders</b><small>Lunch for the whole office</small></span></div>
      </div>
      ${orderLink("Start pickup", "btn btn-light")}
    </section>

    <section class="section" id="favorites">
      <div class="section-head">
        <div><p class="eyebrow">The lunch lineup</p><h2>Start with the<br>heavy hitters.</h2></div>
        <p class="section-lead">Hot sandwiches and made-to-order favorites that turn a regular weekday lunch into something worth leaving the desk for.</p>
      </div>
      <div class="favorite-grid">${favorites.map(card => `
        <article class="food-card">
          <div class="food-card-image"><img src="${card.image}" alt="${card.name}" loading="lazy"><span class="tag">${card.tag}</span></div>
          <div class="food-card-copy">
            <div class="food-card-title"><div><h3>${card.name}</h3><span class="served-with">Served with your choice of side</span></div><a class="add-btn" href="${ORDER_URL}" target="_blank" rel="noopener" aria-label="Order ${card.name}">↗</a></div>
            <p>${card.description}</p>
          </div>
        </article>`).join("")}
      </div>
    </section>

    <section class="story" id="story">
      <div class="story-image"><img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85" alt="Cafe counter ready for weekday lunch service" loading="lazy"></div>
      <div class="story-copy">
        <p class="eyebrow">Built for the workday</p>
        <h2>Real lunch, right downstairs.</h2>
        <p>Toasted Cafe is the Northwest Tower's basement-level lunch spot, serving fresh sandwiches, cheesesteaks, burgers, wraps, salads, sides, and coffee made to order.</p>
        <p>Working nearby? Order direct before you leave the desk, pick it up on your break, and get back to the day with a much better lunch.</p>
        <a class="btn btn-outline" href="#locations">See how to find us</a>
        <div class="stats"><div class="stat"><strong>7am</strong><span>Open weekdays</span></div><div class="stat"><strong>G20</strong><span>Basement level</span></div><div class="stat"><strong>Direct</strong><span>Online ordering</span></div></div>
      </div>
    </section>

    <section class="section menu-section" id="menu">
      <div class="section-head">
        <div><p class="eyebrow">Made to order</p><h2>What are you<br>having?</h2></div>
        <div><p class="section-lead">Hot sandwiches, burgers, wraps, salads, sides, and coffee. Sandwiches include your choice of fries, tots, side salad, or chips.</p><a class="text-link" href="${ORDER_URL}" target="_blank" rel="noopener">View current pricing & order online ↗</a></div>
      </div>
      <div class="category-tabs" role="tablist">
        ${["All", "Hot Sandwiches", "Burgers & Wraps", "Salads & Sides", "Coffee & Drinks", "Breakfast"].map((c, i) => `<button class="category-tab ${i === 0 ? "active" : ""}" data-category="${c}">${c}</button>`).join("")}
      </div>
      <div class="menu-list">${renderMenu(menu)}</div>
    </section>

    <section class="section catering" id="catering">
      <div class="catering-grid">
        <div>
          <p class="eyebrow">Feed the whole floor</p>
          <h2>Office lunch is handled.</h2>
          <p class="section-lead">Planning a team meeting, client lunch, or early training? Toasted makes it easy to feed nearby San Antonio offices with fresh, crowd-friendly favorites.</p>
          <div class="catering-actions"><a class="btn btn-orange" href="${PHONE_URL}">Call about catering</a><a class="btn btn-light" href="https://toastedcafesa.com/contact" target="_blank" rel="noopener">Send an inquiry</a></div>
        </div>
        <div class="catering-cards">
          <div class="catering-card"><strong>Sandwich trays</strong><span>A shareable mix of Toasted favorites for working lunches and team meetings.</span></div>
          <div class="catering-card"><strong>Boxed lunches</strong><span>Individual lunches that make headcounts, dietary needs, and cleanup simple.</span></div>
          <div class="catering-card"><strong>Breakfast & coffee</strong><span>Breakfast boxes and coffee service for early meetings and training days.</span></div>
        </div>
      </div>
    </section>

    <section class="section location-section" id="locations">
      <div class="section-head">
        <div><p class="eyebrow">The Northwest Tower's hidden gem</p><h2>Easy to love.<br>Now easy to find.</h2></div>
        <p class="section-lead">Toasted Cafe is inside the Northwest Tower, also known as the Jefferson Bank building. Head to the basement level and look for Suite G20.</p>
      </div>
      <div class="location-grid">
        <article class="location-card">
          <span class="status">● Open Monday–Friday</span><h3>Toasted Cafe</h3><address>1777 Northeast Loop 410, Suite G20<br>San Antonio, TX 78217</address>
          <div class="location-meta"><div><small>Mon–Thu</small><strong>7:00am – 3:00pm</strong></div><div><small>Friday</small><strong>7:00am – 2:30pm</strong></div></div>
          <p class="location-note"><strong>Finding us:</strong> Enter the Northwest Tower / Jefferson Bank building and take the elevator or stairs down to the basement level. Look for Suite G20.</p>
          <div class="location-actions"><a class="btn btn-orange btn-small" href="${DIRECTIONS_URL}" target="_blank" rel="noopener">Get directions</a><a class="btn btn-outline btn-small" href="${PHONE_URL}">Tap to call</a></div>
        </article>
        <div class="wayfinding">
          <div class="wayfinding-top"><span>Northwest Tower</span><strong>Lunch is one level down.</strong></div>
          <ol>
            <li><span>1</span><div><strong>Arrive at 1777 NE Loop 410</strong><small>Look for the Northwest Tower / Jefferson Bank building.</small></div></li>
            <li><span>2</span><div><strong>Head to the basement</strong><small>Use the building elevator or stairs to go down one level.</small></div></li>
            <li><span>3</span><div><strong>Find Suite G20</strong><small>Your Toasted order will be waiting.</small></div></li>
          </ol>
          <a href="${DIRECTIONS_URL}" target="_blank" rel="noopener">Open in Google Maps ↗</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div><a href="#home" class="logo"><img class="logo-image footer-logo" src="/toasted-cafe-logo.png" alt="Toasted Cafe"></a><p>Fresh sandwiches, cheesesteaks, burgers, wraps, salads, sides, and coffee in San Antonio's Northwest Tower.</p></div>
    <div class="footer-contact"><strong>Visit or call</strong><a href="${DIRECTIONS_URL}" target="_blank" rel="noopener">1777 NE Loop 410, Suite G20<br>San Antonio, TX 78217</a><a href="${PHONE_URL}">(210) 254-9159</a></div>
    <div class="footer-links"><a href="#menu">Menu</a><a href="${ORDER_URL}" target="_blank" rel="noopener">Order online ↗</a><a href="#catering">Office catering</a><a href="#locations">Directions</a><a href="https://toastedcafesa.com/contact" target="_blank" rel="noopener">Contact</a><a href="https://toastedcafesa.com/" target="_blank" rel="noopener">Current website ↗</a></div>
    <div class="footer-bottom">© 2026 Toasted Cafe · Monday–Thursday 7am–3pm · Friday 7am–2:30pm · Closed weekends</div>
  </footer>
  <a class="btn btn-orange mobile-order-bar" href="${ORDER_URL}" target="_blank" rel="noopener"><span>Order pickup</span><span>Northwest Tower · G20</span></a>
`;

function renderMenu(items) {
  return items.map(item => `
    <article class="menu-item">
      <div><h3>${item.name}</h3><p>${item.desc}</p>${item.flags.length ? `<div class="menu-flags">${item.flags.map(f => `<span>${f}</span>`).join("")}</div>` : ""}</div>
      <a class="menu-price" href="${ORDER_URL}" target="_blank" rel="noopener" aria-label="Order ${item.name}">Order ↗</a>
    </article>
  `).join("");
}

const mobileMenu = document.querySelector(".mobile-menu");
document.querySelector(".menu-toggle").addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => mobileMenu.classList.remove("open")));

document.querySelectorAll(".category-tab").forEach(tab => tab.addEventListener("click", () => {
  document.querySelectorAll(".category-tab").forEach(item => item.classList.remove("active"));
  tab.classList.add("active");
  const items = tab.dataset.category === "All" ? menu : menu.filter(item => item.category === tab.dataset.category);
  document.querySelector(".menu-list").innerHTML = renderMenu(items);
}));
