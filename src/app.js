import "./styles.css";
import { categories, featuredIds, menuItems, popularIds } from "./menu-data.js";
import { money, renderCartLine, renderFeatured, renderMenu, renderModifierGroup } from "./components.js";

const ORDER_URL = "https://order.chownow.com/order/43600/locations?add_cn_ordering_class=true";
const PHONE_URL = "tel:+12102549159";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=1777+Northeast+Loop+410+G20+San+Antonio+TX+78217";
const CONTACT_URL = "https://toastedcafesa.com/contact";
const page = location.pathname.split("/").filter(Boolean)[0] || "home";
const featured = featuredIds.map(id => menuItems.find(item => item.id === id));
let cart = loadCart();
let activeItem = null;
let quantity = 1;
let menuBrowse = loadMenuBrowse();

const pageContent = {
  home: `
    <section class="hero" id="home">
      <div class="hero-copy"><p class="eyebrow">Sandwiches · burgers · wraps · coffee</p><h1>Your lunch break, <span class="accent">toasted.</span></h1><p>Handcrafted comfort food, built your way and ready for quick pickup from the Northwest Tower basement.</p><div class="hero-actions"><a class="btn btn-orange" href="/menu/">Order lunch</a><a class="btn btn-quiet" href="/location/">Pickup details <span>→</span></a></div><div class="hero-proof"><strong>Open weekdays from 7am</strong><span>Basement level · Northwest Tower</span></div></div>
      <div class="hero-media"><img src="https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=1400&q=90" alt="Fresh stacked lunch sandwich"><div class="hero-badge">Made fresh for your lunch break</div></div>
    </section>
    <section class="quick-order"><div class="quick-title"><span>01</span><div><strong>Lunch without the guesswork.</strong><small>Choose your sandwich, side, drink, and every little detail.</small></div></div><div class="order-options"><div class="order-option active"><span>+</span><span><b>Build it your way</b><small>Customize on the Toasted site</small></span></div><div class="order-option"><span>↗</span><span><b>Secure checkout</b><small>ChowNow handles the final step</small></span></div></div><a class="btn btn-light" href="/menu/">Start your order</a></section>
    <section class="section" id="favorites"><div class="section-head"><div><p class="eyebrow">Most ordered</p><h2>Start with the<br>heavy hitters.</h2></div><div><p class="section-lead">Three Toasted favorites, ready for your choice of side and whatever the afternoon calls for.</p><a class="text-link" href="/menu/">Explore the full menu →</a></div></div><div class="favorite-grid">${renderFeatured(featured)}</div></section>
    <section class="story"><div class="story-image"><img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85" alt="Cafe counter ready for weekday lunch service" loading="lazy"></div><div class="story-copy"><p class="eyebrow">Built for the workday</p><h2>Real lunch, right downstairs.</h2><p>Toasted Cafe is the Northwest Tower's basement-level lunch spot, serving fresh sandwiches, cheesesteaks, burgers, wraps, salads, sides, and coffee made to order.</p><a class="btn btn-outline" href="/location/">See how to find us</a><div class="stats"><div class="stat"><strong>7am</strong><span>Open weekdays</span></div><div class="stat"><strong>G20</strong><span>Basement level</span></div><div class="stat"><strong>Fresh</strong><span>Made to order</span></div></div></div></section>
    <section class="section home-catering"><div class="section-head"><div><p class="eyebrow">Feed the whole floor</p><h2>Office lunch,<br>handled.</h2></div><div><p class="section-lead">Sandwich trays, boxed lunches, breakfast, and coffee for nearby teams and meetings.</p><a class="btn btn-orange" href="/catering/">Explore catering</a></div></div></section>`,
  menu: `
    <section class="page-hero menu-page-hero"><div><p class="eyebrow">Made your way</p><h1>Order lunch.</h1><p>Choose a favorite, pick your side, and add every detail. Your bag stays with you across the Toasted site.</p></div><img src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=1200&q=85" alt="Toasted sandwich ready for lunch"></section>
    <section class="section menu-section page-menu" id="menu"><div class="section-head"><div><p class="eyebrow">The full menu</p><h2>What are you<br>having?</h2></div><div><p class="section-lead">Live availability and final pricing are confirmed at secure checkout.</p><span class="prototype-note"><span>✓</span> Preview menu · final details confirmed at checkout</span></div></div><div class="menu-browser"><label class="menu-search"><span>⌕</span><input type="search" placeholder="Search sandwiches, coffee, sides..." aria-label="Search menu"><button class="clear-search" type="button" aria-label="Clear search">×</button></label><div class="category-tabs" role="tablist">${categories.map(category => `<button class="category-tab ${menuBrowse.category === category ? "active" : ""}" data-category="${category}"><span>${category}</span><small>${categoryCount(category)}</small></button>`).join("")}</div></div><div class="menu-results-head"><strong class="menu-results-title"></strong><span class="menu-results-count"></span></div><div class="menu-list"></div><div class="menu-empty" hidden><h3>Nothing toasted under that name.</h3><p>Try another search or browse a category.</p><button class="btn btn-outline reset-menu">Show popular items</button></div></section>`,
  catering: `
    <section class="page-hero catering-page-hero"><div><p class="eyebrow">Office catering · San Antonio</p><h1>Feed the whole floor.</h1><p>Fresh, crowd-friendly lunches for team meetings, client days, trainings, and the days nobody remembered to pack lunch.</p><div class="hero-actions"><a class="btn btn-orange" href="${PHONE_URL}">Call about catering</a><a class="btn btn-quiet" href="${CONTACT_URL}" target="_blank" rel="noopener">Send an inquiry <span>→</span></a></div></div><img src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85" alt="Catered team lunch"></section>
    <section class="section catering-detail"><div class="section-head"><div><p class="eyebrow">Made for meetings</p><h2>Simple to order.<br>Easy to serve.</h2></div><p class="section-lead">Tell us your headcount, timing, and what the room needs. We'll help shape a practical spread for your workday.</p></div><div class="service-grid"><article><span>01</span><h3>Sandwich trays</h3><p>A shareable mix of Toasted favorites, cut and ready for the conference table.</p></article><article><span>02</span><h3>Boxed lunches</h3><p>Individual lunches that make headcounts, dietary needs, and cleanup straightforward.</p></article><article><span>03</span><h3>Breakfast & coffee</h3><p>A warm start for early meetings, training days, and morning teams.</p></article></div></section>
    <section class="section catering-callout"><div><p class="eyebrow">Nearby and reliable</p><h2>Planning the next team lunch?</h2><p>Call Toasted Cafe at (210) 254-9159 and we'll help get the details moving.</p></div><a class="btn btn-light" href="${PHONE_URL}">Call Toasted</a></section>`,
  location: `
    <section class="page-hero location-page-hero"><div><p class="eyebrow">The Northwest Tower's hidden gem</p><h1>Lunch is one level down.</h1><p>Inside the Northwest Tower, also known as the Jefferson Bank building. Head to the basement and look for Suite G20.</p><div class="hero-actions"><a class="btn btn-orange" href="${DIRECTIONS_URL}" target="_blank" rel="noopener">Get directions</a><a class="btn btn-quiet" href="${PHONE_URL}">Call us <span>→</span></a></div></div><img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85" alt="Warm cafe counter"></section>
    <section class="section location-section"><div class="section-head"><div><p class="eyebrow">Find Toasted Cafe</p><h2>Easy to love.<br>Now easy to find.</h2></div><p class="section-lead">We are tucked inside the Northwest Tower at 1777 Northeast Loop 410 in San Antonio.</p></div><div class="location-grid">${locationCard()}${wayfinding()}</div></section>
    <section class="section arrival-strip"><div><span>Pickup tip</span><strong>Order before leaving your desk, then head straight to Suite G20.</strong></div><a class="btn btn-orange" href="/menu/">Build your order</a></section>`
};

document.querySelector("#app").innerHTML = `${header()}<main>${pageContent[page] || pageContent.home}</main>${footer()}${orderingPanels()}`;

function header() {
  return `<div class="announcement">Weekday lunch made easy <span>·</span> Build your order right here</div><header class="site-header"><a href="/" class="logo" aria-label="Toasted Cafe home"><img class="logo-image" src="/toasted-cafe-logo.png" alt="Toasted Cafe"></a><nav class="desktop-nav">${navLinks()}</nav><div class="header-actions"><a class="bag phone-header" href="${PHONE_URL}">Call</a><button class="bag-button">Bag <span class="bag-count">0</span></button><a class="btn btn-orange desktop-order" href="/menu/">Order lunch</a><button class="menu-toggle" aria-label="Open menu"></button></div></header><nav class="mobile-menu">${navLinks()}<a href="${PHONE_URL}">Call (210) 254-9159</a></nav>`;
}
function navLinks() {
  return [["home", "/", "Home"], ["menu", "/menu/", "Order menu"], ["catering", "/catering/", "Catering"], ["location", "/location/", "Find us"]].map(([key, href, label]) => `<a class="${page === key ? "active" : ""}" href="${href}">${label}</a>`).join("");
}
function footer() {
  return `<footer class="footer"><div><a href="/" class="logo"><img class="logo-image footer-logo" src="/toasted-cafe-logo.png" alt="Toasted Cafe"></a><p>Fresh sandwiches, burgers, salads, sides, and coffee in San Antonio's Northwest Tower.</p></div><div class="footer-contact"><strong>Visit or call</strong><a href="${DIRECTIONS_URL}" target="_blank" rel="noopener">1777 NE Loop 410, Suite G20<br>San Antonio, TX 78217</a><a href="${PHONE_URL}">(210) 254-9159</a></div><div class="footer-links"><a href="/menu/">Order menu</a><a href="/catering/">Office catering</a><a href="/location/">Directions</a><a href="${CONTACT_URL}" target="_blank" rel="noopener">Contact</a></div><div class="footer-bottom">© 2026 Toasted Cafe · Monday–Thursday 7am–3pm · Friday 7am–2:30pm</div></footer>`;
}
function locationCard() {
  return `<article class="location-card"><span class="status">● Open Monday–Friday</span><h3>Toasted Cafe</h3><address>1777 Northeast Loop 410, Suite G20<br>San Antonio, TX 78217</address><div class="location-meta"><div><small>Mon–Thu</small><strong>7:00am – 3:00pm</strong></div><div><small>Friday</small><strong>7:00am – 2:30pm</strong></div></div><p class="location-note"><strong>Finding us:</strong> Enter the Northwest Tower / Jefferson Bank building and take the elevator or stairs down to the basement. Look for Suite G20.</p><div class="location-actions"><a class="btn btn-orange btn-small" href="${DIRECTIONS_URL}" target="_blank" rel="noopener">Get directions</a><a class="btn btn-outline btn-small" href="${PHONE_URL}">Tap to call</a></div></article>`;
}
function wayfinding() {
  return `<div class="wayfinding"><div class="wayfinding-top"><span>Northwest Tower</span><strong>Lunch is one level down.</strong></div><ol><li><span>1</span><div><strong>Arrive at 1777 NE Loop 410</strong><small>Look for the Northwest Tower / Jefferson Bank building.</small></div></li><li><span>2</span><div><strong>Head to the basement</strong><small>Use the building elevator or stairs to go down one level.</small></div></li><li><span>3</span><div><strong>Find Suite G20</strong><small>Your Toasted order will be waiting.</small></div></li></ol><a href="${DIRECTIONS_URL}" target="_blank" rel="noopener">Open in Google Maps ↗</a></div>`;
}
function orderingPanels() {
  return `<button class="btn btn-orange mobile-order-bar"><span>${page === "menu" ? "Browse menu" : "Order lunch"}</span><span>${page === "menu" ? "Choose a favorite →" : "View menu →"}</span></button><div class="overlay modal-overlay"><section class="item-modal"><button class="panel-close close-modal">×</button><div class="item-modal-content"></div></section></div><div class="overlay cart-overlay"><aside class="cart-drawer"><div class="cart-header"><div><span class="panel-kicker">Your pickup order</span><h2>Toasted bag</h2></div><button class="panel-close close-cart">×</button></div><div class="cart-lines"></div><div class="cart-footer"></div></aside></div><div class="toast" role="status"></div>`;
}

function bindItemTriggers() {
  document.querySelectorAll(".item-trigger").forEach(button => button.addEventListener("click", () => openItem(button.dataset.itemId)));
}
function openItem(itemId) {
  activeItem = menuItems.find(item => item.id === itemId);
  quantity = 1;
  const content = document.querySelector(".item-modal-content");
  content.innerHTML = `<div class="modal-image"><img src="${activeItem.image}" alt="${activeItem.name}"><span>${activeItem.category}</span></div><div class="modal-copy"><span class="panel-kicker">${activeItem.category}</span><div class="modal-title-row"><h2>${activeItem.name}</h2><strong>From ${money(activeItem.price)}</strong></div><p>${activeItem.desc}</p><form class="item-form">${activeItem.modifiers.map(group => renderModifierGroup(group, group.required ? null : group.options[0]?.id)).join("")}<label class="special-label">Special instructions <span>Optional</span><textarea name="notes" placeholder="Sauce on the side, no onions..."></textarea></label><div class="modal-action"><div class="quantity-control"><button type="button" class="item-qty" data-delta="-1">−</button><span class="item-qty-value">1</span><button type="button" class="item-qty" data-delta="1">+</button></div><button class="btn btn-orange add-to-bag" type="submit"><span>Add to bag</span><strong>${money(activeItem.price)}</strong></button></div></form></div>`;
  document.querySelector(".modal-overlay").classList.add("open");
  document.body.classList.add("panel-open");
  const form = document.querySelector(".item-form");
  form.addEventListener("change", () => { updateConditionalGroups(); updateItemTotal(); });
  form.addEventListener("submit", addActiveItem);
  document.querySelectorAll(".item-qty").forEach(button => button.addEventListener("click", () => { quantity = Math.max(1, quantity + Number(button.dataset.delta)); document.querySelector(".item-qty-value").textContent = quantity; updateItemTotal(); }));
  updateConditionalGroups();
  updateItemTotal();
}
function getSelections() {
  const selections = {};
  activeItem.modifiers.forEach(group => {
    const fieldset = document.querySelector(`[data-group-id="${group.id}"]`);
    if (fieldset?.hidden) return;
    const input = document.querySelector(`input[name="${group.id}"]:checked`);
    if (input) selections[group.id] = group.options.find(entry => entry.id === input.value);
  });
  return selections;
}
function updateConditionalGroups() {
  const selections = getSelections();
  document.querySelectorAll("[data-show-group]").forEach(group => { group.hidden = selections[group.dataset.showGroup]?.id !== group.dataset.showValue; });
}
function updateItemTotal() {
  document.querySelector(".add-to-bag strong").textContent = money((activeItem.price + Object.values(getSelections()).reduce((sum, option) => sum + option.price, 0)) * quantity);
}
function addActiveItem(event) {
  event.preventDefault();
  const selections = getSelections();
  const required = activeItem.modifiers.filter(group => group.required && !document.querySelector(`[data-group-id="${group.id}"]`)?.hidden);
  if (required.some(group => !selections[group.id])) return notify("Please complete the required choices");
  const unitTotal = activeItem.price + Object.values(selections).reduce((sum, option) => sum + option.price, 0);
  cart.push({ lineId: crypto.randomUUID(), item: activeItem, selections, notes: event.currentTarget.notes.value, quantity, unitTotal, total: unitTotal * quantity });
  saveCart();
  closePanels();
  updateCart();
  notify(`${activeItem.name} added to your bag`);
}
function updateCart() {
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = cart.reduce((sum, line) => sum + line.total, 0);
  document.querySelector(".bag-count").textContent = count;
  document.querySelector(".cart-lines").innerHTML = cart.length ? cart.map(renderCartLine).join("") : `<div class="empty-cart"><img src="/toasted-cafe-logo.png" alt=""><h3>Your bag is hungry.</h3><p>Build a lunch from the Toasted menu.</p><a class="btn btn-orange" href="/menu/">Browse menu</a></div>`;
  document.querySelector(".cart-footer").innerHTML = cart.length ? `<div class="pickup-summary"><span>Pickup from</span><strong>Northwest Tower · Suite G20</strong></div><div class="cart-totals"><span>Estimated subtotal</span><strong>${money(subtotal)}</strong></div><p class="handoff-note"><strong>Secure checkout with ChowNow</strong>Live availability, final pricing, pickup time, and payment are confirmed next.</p><a class="btn btn-orange checkout-button" href="${ORDER_URL}" target="_blank" rel="noopener"><span>Continue to secure checkout</span><span>↗</span></a>` : "";
  const bar = document.querySelector(".mobile-order-bar");
  bar.classList.toggle("has-items", count > 0);
  if (count) bar.innerHTML = `<span>View bag · ${count} item${count === 1 ? "" : "s"}</span><strong>${money(subtotal)}</strong>`;
  bindCartEvents();
}
function bindCartEvents() {
  document.querySelectorAll("[data-qty]").forEach(button => button.addEventListener("click", () => { const line = cart.find(entry => entry.lineId === button.dataset.lineId); line.quantity += Number(button.dataset.qty); if (line.quantity <= 0) cart = cart.filter(entry => entry.lineId !== line.lineId); else line.total = line.unitTotal * line.quantity; saveCart(); updateCart(); }));
  document.querySelectorAll(".remove-line").forEach(button => button.addEventListener("click", () => { cart = cart.filter(line => line.lineId !== button.dataset.lineId); saveCart(); updateCart(); }));
}
function loadCart() {
  try { return JSON.parse(localStorage.getItem("toasted-cart")) || []; } catch { return []; }
}
function saveCart() { localStorage.setItem("toasted-cart", JSON.stringify(cart)); }
function categoryCount(category) {
  return category === "Popular" ? popularIds.length : menuItems.filter(item => item.category === category).length;
}
function loadMenuBrowse() {
  try {
    const saved = JSON.parse(sessionStorage.getItem("toasted-menu-browse"));
    return { category: categories.includes(saved?.category) ? saved.category : "Popular", search: saved?.search || "" };
  } catch {
    return { category: "Popular", search: "" };
  }
}
function saveMenuBrowse() { sessionStorage.setItem("toasted-menu-browse", JSON.stringify(menuBrowse)); }
function getVisibleMenuItems() {
  const query = menuBrowse.search.trim().toLowerCase();
  if (query) return menuItems.filter(item => `${item.name} ${item.category} ${item.desc} ${item.flags.join(" ")}`.toLowerCase().includes(query));
  return menuBrowse.category === "Popular" ? popularIds.map(id => menuItems.find(item => item.id === id)).filter(Boolean) : menuItems.filter(item => item.category === menuBrowse.category);
}
function renderMenuBrowse() {
  if (page !== "menu") return;
  const items = getVisibleMenuItems();
  document.querySelector(".menu-list").innerHTML = renderMenu(items);
  document.querySelector(".menu-list").hidden = !items.length;
  document.querySelector(".menu-empty").hidden = Boolean(items.length);
  document.querySelector(".menu-results-title").textContent = menuBrowse.search ? `Results for “${menuBrowse.search}”` : menuBrowse.category;
  document.querySelector(".menu-results-count").textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
  document.querySelector(".menu-search input").value = menuBrowse.search;
  document.querySelector(".clear-search").classList.toggle("visible", Boolean(menuBrowse.search));
  document.querySelectorAll(".category-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.category === menuBrowse.category && !menuBrowse.search));
  bindItemTriggers();
}
function closePanels() { document.querySelectorAll(".overlay").forEach(overlay => overlay.classList.remove("open")); document.body.classList.remove("panel-open"); }
function notify(message) { const toast = document.querySelector(".toast"); toast.textContent = message; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2200); }

const mobileMenu = document.querySelector(".mobile-menu");
document.querySelector(".menu-toggle").addEventListener("click", () => mobileMenu.classList.toggle("open"));
document.querySelector(".bag-button").addEventListener("click", () => { document.querySelector(".cart-overlay").classList.add("open"); document.body.classList.add("panel-open"); });
document.querySelector(".mobile-order-bar").addEventListener("click", () => cart.length ? document.querySelector(".bag-button").click() : location.assign("/menu/"));
document.querySelectorAll(".close-modal, .close-cart").forEach(button => button.addEventListener("click", closePanels));
document.querySelectorAll(".overlay").forEach(overlay => overlay.addEventListener("click", event => { if (event.target === overlay) closePanels(); }));
document.addEventListener("keydown", event => { if (event.key === "Escape") closePanels(); });
document.querySelectorAll(".category-tab").forEach(tab => tab.addEventListener("click", () => {
  menuBrowse = { category: tab.dataset.category, search: "" };
  saveMenuBrowse();
  renderMenuBrowse();
}));
document.querySelector(".menu-search input")?.addEventListener("input", event => {
  menuBrowse.search = event.target.value;
  saveMenuBrowse();
  renderMenuBrowse();
});
document.querySelector(".clear-search")?.addEventListener("click", () => {
  menuBrowse.search = "";
  saveMenuBrowse();
  renderMenuBrowse();
  document.querySelector(".menu-search input").focus();
});
document.querySelector(".reset-menu")?.addEventListener("click", () => {
  menuBrowse = { category: "Popular", search: "" };
  saveMenuBrowse();
  renderMenuBrowse();
});
bindItemTriggers();
renderMenuBrowse();
updateCart();
