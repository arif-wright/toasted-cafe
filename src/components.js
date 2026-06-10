export const money = value => `$${value.toFixed(2)}`;

export function renderFeatured(items) {
  return items.map(item => `
    <article class="food-card">
      <div class="food-card-image"><img src="${item.image}" alt="${item.name}" loading="lazy"><span class="tag">${item.flags[0]}</span></div>
      <div class="food-card-copy">
        <span class="product-category">${item.category}</span>
        <div class="food-card-title"><div><h3>${item.name}</h3><span class="served-with">Choice of side included</span></div><button class="add-btn item-trigger" data-item-id="${item.id}" aria-label="Customize ${item.name}">+</button></div>
        <p>${item.desc}</p><div class="card-bottom"><strong>From ${money(item.price)}</strong><button class="text-button item-trigger" data-item-id="${item.id}">Customize <span>→</span></button></div>
      </div>
    </article>
  `).join("");
}

export function renderMenu(items) {
  return items.map(item => `
    <article class="menu-item">
      <button class="menu-item-main item-trigger" data-item-id="${item.id}">
        <span><span class="product-category">${item.category}</span><h3>${item.name}</h3><p>${item.desc}</p>${item.flags.length ? `<span class="menu-flags">${item.flags.map(flag => `<span>${flag}</span>`).join("")}</span>` : ""}</span>
        ${item.image ? `<img src="${item.image}" alt="" loading="lazy">` : ""}
      </button>
      <div class="menu-item-bottom"><strong>From ${money(item.price)}</strong><button class="menu-add item-trigger" data-item-id="${item.id}">Customize <span>+</span></button></div>
    </article>
  `).join("");
}

export function renderModifierGroup(group, selection) {
  return `
    <fieldset class="modifier-group" data-group-id="${group.id}" ${group.showWhen ? `data-show-group="${group.showWhen.group}" data-show-value="${group.showWhen.value}" hidden` : ""}>
      <legend><span>${group.name}</span><small class="${group.required ? "is-required" : ""}">${group.required ? "Choose 1 · Required" : "Optional"}</small></legend>
      <div class="modifier-options">
        ${group.options.map(option => `
          <label class="modifier-option">
            <input type="radio" name="${group.id}" value="${option.id}" ${selection === option.id ? "checked" : ""}>
            <span>${option.name}</span>${option.price ? `<strong>+${money(option.price)}</strong>` : ""}
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;
}

export function renderCartLine(line) {
  const details = Object.values(line.selections).map(selection => selection.name).filter(name => !name.startsWith("No ")).join(" · ");
  return `
    <article class="cart-line" data-line-id="${line.lineId}">
      <div><span class="product-category">${line.item.category}</span><h3>${line.item.name}</h3><p>${details || "As is"}${line.notes ? `<br><em>${line.notes}</em>` : ""}</p><button class="remove-line" data-line-id="${line.lineId}">Remove</button></div>
      <div class="cart-line-right"><strong>${money(line.total)}</strong><div class="quantity-control"><button data-qty="-1" data-line-id="${line.lineId}">−</button><span>${line.quantity}</span><button data-qty="1" data-line-id="${line.lineId}">+</button></div></div>
    </article>
  `;
}
