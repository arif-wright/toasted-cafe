# SkyTab / Shift4 Ordering Integration

The frontend uses normalized menu and cart models so Toasted Cafe can connect its
SkyTab / Shift4 ordering stack without rebuilding the customer experience.

## Integration Points

- `src/services/menu-service.js`
  - Currently returns the local mock catalog.
  - Replace `getMenuCatalog()` with backend-fetched, normalized POS menu data.
  - `normalizePosItem()` documents the item shape expected by the UI.

- `src/services/ordering-service.js`
  - `serializeCart()` maps the Toasted bag to a provider-ready payload.
  - `beginCheckout()` is the boundary for creating an order and receiving a
    hosted secure checkout URL.

- `src/services/providers/skytab-shift4-provider.js`
  - Explicit SkyTab / Shift4 adapter.
  - This is where the frontend calls a future secure Toasted backend endpoint.
  - It must never contain private Shift4 credentials or call privileged APIs
    directly from the browser.

- `src/config/business.js`
  - Holds the provider name, location ID, and checkout configuration.
  - Provider credentials must never be placed in this frontend file.

## Required For Live Ordering

1. Approved SkyTab / Shift4 API access and documentation.
2. A secure backend endpoint that authenticates with Shift4.
3. POS item and modifier IDs mapped to the normalized frontend catalog.
4. Server-side price, availability, tax, and fulfillment validation.
5. Order creation that returns a hosted checkout URL or supported payment flow.

Until those pieces are configured, the frontend keeps the full branded ordering
experience and honestly reports that secure online checkout is being connected.
