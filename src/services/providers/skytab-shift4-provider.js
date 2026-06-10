import { orderingConfig } from "../../config/business.js";

// This provider must call a secure Toasted backend, never Shift4 directly from the browser.
export async function createHostedCheckout(cartPayload) {
  if (!orderingConfig.checkoutUrl || !orderingConfig.locationId) {
    return { status: "configuration_required", payload: cartPayload };
  }

  // Future implementation:
  // const response = await fetch("/api/ordering/checkout", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(cartPayload)
  // });
  // return response.json();

  return {
    status: "ready",
    checkoutUrl: orderingConfig.checkoutUrl,
    payload: cartPayload
  };
}
