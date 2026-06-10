import { categories, featuredIds, menuItems, popularIds } from "../menu-data.js";

// Replace this mock source with normalized SkyTab/Shift4 menu data when access is available.
export async function getMenuCatalog() {
  return { categories, featuredIds, items: menuItems, popularIds };
}

// Defines the normalized shape the frontend expects from a future POS menu sync.
export function normalizePosItem(posItem) {
  return {
    id: String(posItem.id),
    category: posItem.category,
    name: posItem.name,
    price: Number(posItem.price),
    desc: posItem.description || "",
    flags: posItem.tags || [],
    image: posItem.imageUrl || "",
    modifiers: posItem.modifierGroups || []
  };
}
