---
title: Shopify
sidebar_position: 1
---

## How Aixly works with Shopify

### Installation and permissions

Aixly uses Shopify's standard installation: you approve permissions on Shopify's own screen, and when an update needs a new permission, Shopify asks you the next time you open the app. Aixly asks for:

| Permission | Used for |
|---|---|
| Products | Live product answers, product cards, add to cart |
| Orders | Order status for verified shoppers, order requests, sales attribution |
| Customers | Recognizing logged-in customers and their orders |
| Returns | Filing return requests from the chat (**Shopify → Orders → Returns**) |
| Legal policies, online store pages | Answering questions about your policies and store pages |
| Themes | Checking that the chat widget is turned on in your theme |

### Theme app embed (storefront)

The widget is added with a theme app embed, so your theme code isn't changed: **Online Store → Themes → Customize → App embeds → Aixly AI Chatbot**. Turning the embed off removes the widget.

### Logged-in customers

Through a secure Shopify app proxy, the widget knows when a customer is logged in, so they can see their own recent orders without typing an order number or email.

### Orders, returns and discounts

- **Orders**: new orders are matched to recent chats for **Aixly impact**. No customer contact details are stored for this.
- **Returns**: return requests are created in Shopify for you to approve or decline. See **Order requests and returns**.
- **Discounts**: the cart reminder applies an existing discount code from **Shopify → Discounts**. Aixly never creates or changes discounts.

### Billing

Plans are charged through Shopify billing. Usage charges (if your plan has them) appear in **Shopify Admin → Settings → Billing**.

### Customer privacy

Shopify's customer data requests and deletion requests (GDPR) are handled automatically, and uninstalling the app removes your store's data after Shopify's required waiting period.
