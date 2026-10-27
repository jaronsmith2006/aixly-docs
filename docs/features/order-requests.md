---
title: Order requests and returns
sidebar_position: 9
---

## What are order requests?

When a shopper wants to change something about an order, the assistant first verifies it's their order (order number plus email or phone, or automatically for logged-in customers), then records the request for your team:

- Cancel an order
- Change an order (address, items, …)
- Return, refund or exchange

---

## Returns filed in Shopify

With **Settings → Order lookup → File return requests in Shopify** on (the default):

![Settings → Order lookup, with returns filed in Shopify](/img/screens/settings-order-lookup@2x.webp)

1. The assistant lists the items on the order that can still be returned.
2. The shopper chooses the items, quantities and the reason (for example "too small" or "arrived damaged").
3. A **return request** is created in **Shopify → Orders → Returns**, with the reason and the shopper's own words.
4. You approve or decline it in Shopify, and Shopify emails the shopper the next steps (for example a return label).

The request also appears in **Requests** with a **Return … in Shopify** badge.

If an item can't be returned yet (for example the order hasn't shipped), the assistant explains that instead. If Shopify can't create the return for another reason, the request comes to **Requests** as usual, so nothing is lost.

:::note
Filing returns needs Shopify's returns permission. If you installed Aixly before this feature, Shopify asks you to approve it the next time you open the app.
:::

---

## Requests page

In the app, open **Requests**:

![The Requests page](/img/screens/requests@2x.webp)

- Filter by type and status
- Update the status: New, In progress, Resolved or Rejected
- **View chat** opens the conversation the request came from
