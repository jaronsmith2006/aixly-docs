---
title: Adding the chat to your store
sidebar_position: 1.5
---

You can use any of these at the same time; they all share the same conversation. The **Dashboard → Where shoppers find the chat** card shows what's live, and has the links and code below ready to copy.

---

## Floating chat button (theme app embed)

The main way to add Aixly: a chat button in the corner of every page, with optional popups and the cart reminder.

- **Online Store → Themes → Customize → App embeds → Aixly AI Chatbot → Save**, or click **Turn on** on the Dashboard.
- Design it in **Appearance**; hide it on specific pages in **Settings → Where the chat appears**.

---

## Embedded chat window (theme app block)

Put the chat, always open, inside a page: product pages, a support or FAQ page, a landing page.

1. Click **Place on product page** on the Dashboard, or in the theme editor choose **Add block → Apps → Aixly chat window** in any section.
2. Set the **Height** and **Maximum width** in the block settings.
3. Save.

On pages with a chat window the floating button is hidden, so shoppers see one chat. The window shows even on pages where you've hidden the floating button.

---

## Links that open the chat

Use these in buttons, menus, emails or social posts (replace the domain with yours):

| Link | What it does |
|---|---|
| `https://your-store.com/?aixly_open=1` | Opens the chat |
| `https://your-store.com/?aixly=Where%20is%20my%20order%3F` | Opens the chat and asks the question |

Message text must be URL-encoded (spaces as `%20`, `?` as `%3F`). The parameter is removed from the address bar after the chat opens.

---

## Your own buttons (no code)

Add `data-aixly-open` to any link or button, for example in a **Custom Liquid** section:

```html
<button type="button" data-aixly-open>Chat with us</button>
<a href="#" data-aixly-open="Do you ship to Canada?">Ask about shipping</a>
```

With a value, the chat opens and asks that question.

---

## JavaScript events

For developers: open, close or toggle the chat from your own scripts.

```js
window.dispatchEvent(new Event('aixly:open'));
window.dispatchEvent(new CustomEvent('aixly:open', { detail: { message: 'Where is my order?' } }));
window.dispatchEvent(new Event('aixly:close'));
window.dispatchEvent(new Event('aixly:toggle'));
```

These need the floating chat button or a chat window on the page.
