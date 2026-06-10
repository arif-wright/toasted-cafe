import { orderingConfig } from "../config/business.js";
import { createHostedCheckout } from "./providers/skytab-shift4-provider.js";

export function serializeCart(cart) {
  return {
    provider: orderingConfig.provider,
    locationId: orderingConfig.locationId,
    fulfillment: "pickup",
    lines: cart.map(line => ({
      clientLineId: line.lineId,
      itemId: line.item.id,
      quantity: line.quantity,
      notes: line.notes,
      modifiers: Object.entries(line.selections).map(([groupId, option]) => ({
        groupId,
        optionId: option.id,
        name: option.name,
        price: option.price
      }))
    }))
  };
}

// A backend should create the real SkyTab/Shift4 order and return its hosted checkout URL.
export async function beginCheckout(cart) {
  const payload = serializeCart(cart);
  return createHostedCheckout(payload);
}
