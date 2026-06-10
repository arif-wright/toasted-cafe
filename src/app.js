import "./styles.css";
import { categories, featuredIds, menuItems } from "./menu-data.js";
import { money, renderCartLine, renderFeatured, renderMenu, renderModifierGroup } from "./components.js";

const ORDER_URL = "https://order.chownow.com/order/43600/locations?add_cn_ordering_class=true";
const PHONE_URL = "tel:+12102549159";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=1777+Northeast+Loop+410+G20+San+Antonio+TX+78217";
const featured = featuredIds.map(id => menuItems.find(item => item.id === id));
let cart = [];
let activeItem = null;
let quantity = 1;

document.querySelector("#app").innerHTML = `
  <div class="announcement">Weekday lunch made easy <span>·</span> Build your order right here</div>
  <header class="site-header">
    <a href="#home" class="logo" aria-label="Toasted Cafe home"><img class="logo-image" src="/toasted-cafe-logo.png" alt="Toasted Cafe"></a>
    <nav class="desktop-nav"><a href="#menu">Order menu</a><a href="#catering">Office catering</a><a href="#locations">Find us</a><a href="#story">About</a></nav>
    <div class="header-actions">
      <a class="bag phone-header" href="${PHONE_URL}" aria-label="Call Toasted Cafe">Call</a>
      <button class="bag-button" aria-label="Open your bag">Bag <span class="bag-count">0</span></button>
      <button class="btn btn-orange desktop-order browse-menu">Start order</button>
      <button class="menu-toggle" aria-label="Open menu"></button>
    </div>
  </header>
  <nav class="mobile-menu"><a href="#menu">Order menu</a><a href="#catering">Office catering</a><a href="#locations">Find us</a><a href="${PHONE_URL}">Call (210) 254-9159</a></nav>

  <main>
    <section class="hero" id="home">
      <div class="hero-copy">
        <p class="eyebrow">Sandwiches · burgers · wraps · coffee</p>
        <h1>Your lunch break, <span class="accent">toasted.</span></h1>
        <p>Build your order here, customize every side, then pick it up fast from the Northwest Tower basement.</p>
        <div class="hero-actions"><button class="btn btn-orange browse-menu">Build your lunch</button><a class="btn btn-outline" href="#menu">See the menu</a></div>
        <div class="hero-proof"><strong>Open weekdays from 7am</strong><span>Basement level · Northwest Tower</span></div>
      </div>
      <div class="hero-media"><img src="https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=1400&q=90" alt="Fresh stacked lunch sandwich"><div class="hero-badge">Made fresh for your lunch break</div></div>
    </section>

    <section class="quick-order">
      <div class="quick-title"><span>01</span><div><strong>Lunch without the guesswork.</strong><small>Choose your sandwich, side, drink, and every little detail.</small></div></div>
      <div class="order-options"><div class="order-option active"><span>+</span><span><b>Build it your way</b><small>Customize on the Toasted site</small></span></div><div class="order-option"><span>↗</span><span><b>Secure checkout</b><small>ChowNow handles the final step</small></span></div></div>
      <button class="btn btn-light browse-menu">Browse the menu</button>
    </section>

    <section class="section" id="favorites">
      <div class="section-head"><div><p class="eyebrow">The lunch lineup</p><h2>Start with the<br>heavy hitters.</h2></div><p class="section-lead">Tap an item to choose your side, add a drink, and make it yours without leaving Toasted.</p></div>
      <div class="favorite-grid">${renderFeatured(featured)}</div>
    </section>

    <section class="story" id="story">
      <div class="story-image"><img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85" alt="Cafe counter ready for weekday lunch service" loading="lazy"></div>
      <div class="story-copy"><p class="eyebrow">Built for the workday</p><h2>Real lunch, right downstairs.</h2><p>Toasted Cafe is the Northwest Tower's basement-level lunch spot, serving fresh sandwiches, cheesesteaks, burgers, wraps, salads, sides, and coffee made to order.</p><p>Order before you leave the desk, pick it up on your break, and get back to the day with a much better lunch.</p><a class="btn btn-outline" href="#locations">See how to find us</a><div class="stats"><div class="stat"><strong>7am</strong><span>Open weekdays</span></div><div class="stat"><strong>G20</strong><span>Basement level</span></div><div class="stat"><strong>Fresh</strong><span>Made to order</span></div></div></div>
    </section>

    <section class="section menu-section" id="menu">
      <div class="section-head"><div><p class="eyebrow">Build your order</p><h2>What are you<br>having?</h2></div><div><p class="section-lead">Browse and customize here. Prices shown are mockup data; ChowNow confirms the live menu and total at secure checkout.</p><span class="prototype-note">Prototype menu · final availability confirmed at checkout</span></div></div>
      <div class="category-tabs" role="tablist">${categories.map((category, index) => `<button class="category-tab ${index === 0 ? "active" : ""}" data-category="${category}">${category}</button>`).join("")}</div>
      <div class="menu-list">${renderMenu(menuItems)}</div>
    </section>

    <section class="section catering" id="catering">
      <div class="catering-grid"><div><p class="eyebrow">Feed the whole floor</p><h2>Office lunch is handled.</h2><p class="section-lead">Planning a team meeting, client lunch, or early training? Toasted makes it easy to feed nearby San Antonio offices.</p><div class="catering-actions"><a class="btn btn-orange" href="${PHONE_URL}">Call about catering</a><a class="btn btn-light" href="https://toastedcafesa.com/contact" target="_blank" rel="noopener">Send an inquiry</a></div></div><div class="catering-cards"><div class="catering-card"><strong>Sandwich trays</strong><span>A shareable mix of Toasted favorites for working lunches.</span></div><div class="catering-card"><strong>Boxed lunches</strong><span>Individual lunches that make headcounts and cleanup simple.</span></div><div class="catering-card"><strong>Breakfast & coffee</strong><span>Breakfast boxes and coffee service for early meetings.</span></div></div></div>
    </section>

    <section class="section location-section" id="locations">
      <div class="section-head"><div><p class="eyebrow">The Northwest Tower's hidden gem</p><h2>Easy to love.<br>Now easy to find.</h2></div><p class="section-lead">Inside the Northwest Tower, also known as the Jefferson Bank building. Head to the basement level and look for Suite G20.</p></div>
      <div class="location-grid"><article class="location-card"><span class="status">● Open Monday–Friday</span><h3>Toasted Cafe</h3><address>1777 Northeast Loop 410, Suite G20<br>San Antonio, TX 78217</address><div class="location-meta"><div><small>Mon–Thu</small><strong>7:00am – 3:00pm</strong></div><div><small>Friday</small><strong>7:00am – 2:30pm</strong></div></div><p class="location-note"><strong>Finding us:</strong> Enter the Northwest Tower / Jefferson Bank building and take the elevator or stairs down to the basement. Look for Suite G20.</p><div class="location-actions"><a class="btn btn-orange btn-small" href="${DIRECTIONS_URL}" target="_blank" rel="noopener">Get directions</a><a class="btn btn-outline btn-small" href="${PHONE_URL}">Tap to call</a></div></article><div class="wayfinding"><div class="wayfinding-top"><span>Northwest Tower</span><strong>Lunch is one level down.</strong></div><ol><li><span>1</span><div><strong>Arrive at 1777 NE Loop 410</strong><small>Look for the Northwest Tower / Jefferson Bank building.</small></div></li><li><span>2</span><div><strong>Head to the basement</strong><small>Use the building elevator or stairs to go down one level.</small></div></li><li><span>3</span><div><strong>Find Suite G20</strong><small>Your Toasted order will be waiting.</small></div></li></ol><a href="${DIRECTIONS_URL}" target="_blank" rel="noopener">Open in Google Maps ↗</a></div></div>
    </section>
  </main>

  <footer class="footer"><div><a href="#home" class="logo"><img class="logo-image footer-logo" src="/toasted-cafe-logo.png" alt="Toasted Cafe"></a><p>Fresh sandwiches, cheesesteaks, burgers, wraps, salads, sides, and coffee in San Antonio's Northwest Tower.</p></div><div class="footer-contact"><strong>Visit or call</strong><a href="${DIRECTIONS_URL}" target="_blank" rel="noopener">1777 NE Loop 410, Suite G20<br>San Antonio, TX 78217</a><a href="${PHONE_URL}">(210) 254-9159</a></div><div class="footer-links"><a href="#menu">Order menu</a><a href="#catering">Office catering</a><a href="#locations">Directions</a><a href="https://toastedcafesa.com/contact" target="_blank" rel="noopener">Contact</a></div><div class="footer-bottom">© 2026 Toasted Cafe · Monday–Thursday 7am–3pm · Friday 7am–2:30pm</div></footer>

  <button class="btn btn-orange mobile-order-bar browse-menu"><span>Browse menu</span><span>Build your lunch</span></button>
  <div class="overlay modal-overlay" aria-hidden="true"><section class="item-modal" role="dialog" aria-modal="true"><button class="panel-close close-modal" aria-label="Close">×</button><div class="item-modal-content"></div></section></div>
  <div class="overlay cart-overlay" aria-hidden="true"><aside class="cart-drawer" role="dialog" aria-modal="true"><div class="cart-header"><div><span class="panel-kicker">Your pickup order</span><h2>Toasted bag</h2></div><button class="panel-close close-cart" aria-label="Close">×</button></div><div class="cart-lines"></div><div class="cart-footer"></div></aside></div>
  <div class="toast" role="status"></div>
`;

function bindItemTriggers() {
  document.querySelectorAll(".item-trigger").forEach(button => button.addEventListener("click", () => openItem(button.dataset.itemId)));
}

function openItem(itemId) {
  activeItem = menuItems.find(item => item.id === itemId);
  quantity = 1;
  const content = document.querySelector(".item-modal-content");
  content.innerHTML = `
    ${activeItem.image ? `<div class="modal-image"><img src="${activeItem.image}" alt="${activeItem.name}"><span>${activeItem.category}</span></div>` : ""}
    <div class="modal-copy"><span class="panel-kicker">${activeItem.category}</span><h2>${activeItem.name}</h2><p>${activeItem.desc}</p>
      <form class="item-form">${activeItem.modifiers.map(group => renderModifierGroup(group, group.options[0]?.id)).join("")}
        <label class="special-label">Special instructions <span>Optional</span><textarea name="notes" placeholder="Sauce on the side, no onions..."></textarea></label>
        <div class="modal-action"><div class="quantity-control"><button type="button" class="item-qty" data-delta="-1">−</button><span class="item-qty-value">1</span><button type="button" class="item-qty" data-delta="1">+</button></div><button class="btn btn-orange add-to-bag" type="submit"><span>Add to bag</span><strong>${money(activeItem.price)}</strong></button></div>
      </form>
    </div>`;
  document.querySelector(".modal-overlay").classList.add("open");
  document.body.classList.add("panel-open");
  bindModalEvents();
  updateConditionalGroups();
  updateItemTotal();
}

function bindModalEvents() {
  const form = document.querySelector(".item-form");
  form.addEventListener("change", () => { updateConditionalGroups(); updateItemTotal(); });
  form.addEventListener("submit", addActiveItem);
  document.querySelectorAll(".item-qty").forEach(button => button.addEventListener("click", () => {
    quantity = Math.max(1, quantity + Number(button.dataset.delta));
    document.querySelector(".item-qty-value").textContent = quantity;
    updateItemTotal();
  }));
}

function getSelections() {
  const selections = {};
  activeItem.modifiers.forEach(group => {
    const fieldset = document.querySelector(`[data-group-id="${group.id}"]`);
    if (fieldset?.hidden) return;
    const input = document.querySelector(`input[name="${group.id}"]:checked`);
    if (!input) return;
    const option = group.options.find(entry => entry.id === input.value);
    selections[group.id] = option;
  });
  return selections;
}

function updateConditionalGroups() {
  const selections = getSelections();
  document.querySelectorAll("[data-show-group]").forEach(group => {
    group.hidden = selections[group.dataset.showGroup]?.id !== group.dataset.showValue;
  });
}

function calculateUnitTotal(selections) {
  return activeItem.price + Object.values(selections).reduce((sum, option) => sum + option.price, 0);
}

function updateItemTotal() {
  document.querySelector(".add-to-bag strong").textContent = money(calculateUnitTotal(getSelections()) * quantity);
}

function addActiveItem(event) {
  event.preventDefault();
  const selections = getSelections();
  const visibleRequired = activeItem.modifiers.filter(group => group.required && !document.querySelector(`[data-group-id="${group.id}"]`)?.hidden);
  if (visibleRequired.some(group => !selections[group.id])) return notify("Please complete the required choices");
  const unitTotal = calculateUnitTotal(selections);
  cart.push({ lineId: crypto.randomUUID(), item: activeItem, selections, notes: event.currentTarget.notes.value, quantity, unitTotal, total: unitTotal * quantity });
  closePanels();
  updateCart();
  notify(`${activeItem.name} added to your bag`);
}

function updateCart() {
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = cart.reduce((sum, line) => sum + line.total, 0);
  document.querySelector(".bag-count").textContent = count;
  document.querySelector(".cart-lines").innerHTML = cart.length ? cart.map(renderCartLine).join("") : `<div class="empty-cart"><img src="/toasted-cafe-logo.png" alt=""><h3>Your bag is hungry.</h3><p>Build a lunch from the Toasted menu.</p><button class="btn btn-orange close-cart browse-menu">Browse menu</button></div>`;
  document.querySelector(".cart-footer").innerHTML = cart.length ? `
    <div class="cart-totals"><span>Prototype subtotal</span><strong>${money(subtotal)}</strong></div>
    <p class="handoff-note"><strong>One last secure step.</strong> This prototype opens ChowNow to confirm your items, live pricing, pickup time, and payment. A live integration would pass this bag automatically.</p>
    <a class="btn btn-orange checkout-button" href="${ORDER_URL}" target="_blank" rel="noopener"><span>Proceed to secure checkout</span><span>↗</span></a>` : "";
  const mobileBar = document.querySelector(".mobile-order-bar");
  mobileBar.classList.toggle("has-items", count > 0);
  mobileBar.innerHTML = count ? `<span>View bag · ${count} item${count === 1 ? "" : "s"}</span><strong>${money(subtotal)}</strong>` : `<span>Browse menu</span><span>Build your lunch</span>`;
  bindCartEvents();
}

function bindCartEvents() {
  document.querySelectorAll("[data-qty]").forEach(button => button.addEventListener("click", () => {
    const line = cart.find(entry => entry.lineId === button.dataset.lineId);
    line.quantity += Number(button.dataset.qty);
    if (line.quantity <= 0) cart = cart.filter(entry => entry.lineId !== line.lineId);
    else line.total = line.unitTotal * line.quantity;
    updateCart();
  }));
  document.querySelectorAll(".remove-line").forEach(button => button.addEventListener("click", () => {
    cart = cart.filter(line => line.lineId !== button.dataset.lineId);
    updateCart();
  }));
  document.querySelectorAll(".cart-lines .browse-menu").forEach(button => button.addEventListener("click", browseMenu));
}

function openCart() {
  document.querySelector(".cart-overlay").classList.add("open");
  document.body.classList.add("panel-open");
}
function closePanels() {
  document.querySelectorAll(".overlay").forEach(overlay => overlay.classList.remove("open"));
  document.body.classList.remove("panel-open");
}
function browseMenu() {
  closePanels();
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
}

let toastTimer;
function notify(message) {
  const toast = document.querySelector(".toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

const mobileMenu = document.querySelector(".mobile-menu");
document.querySelector(".menu-toggle").addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => mobileMenu.classList.remove("open")));
document.querySelectorAll(".browse-menu:not(.mobile-order-bar)").forEach(button => button.addEventListener("click", browseMenu));
document.querySelector(".bag-button").addEventListener("click", openCart);
document.querySelector(".mobile-order-bar").addEventListener("click", () => cart.length ? openCart() : browseMenu());
document.querySelectorAll(".close-modal, .close-cart").forEach(button => button.addEventListener("click", closePanels));
document.querySelectorAll(".overlay").forEach(overlay => overlay.addEventListener("click", event => { if (event.target === overlay) closePanels(); }));
document.addEventListener("keydown", event => { if (event.key === "Escape") closePanels(); });
document.querySelectorAll(".category-tab").forEach(tab => tab.addEventListener("click", () => {
  document.querySelectorAll(".category-tab").forEach(item => item.classList.remove("active"));
  tab.classList.add("active");
  document.querySelector(".menu-list").innerHTML = renderMenu(tab.dataset.category === "All" ? menuItems : menuItems.filter(item => item.category === tab.dataset.category));
  bindItemTriggers();
}));

bindItemTriggers();
updateCart();
