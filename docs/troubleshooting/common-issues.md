---
title: Common issues
sidebar_position: 1
---

## Widget not showing on the storefront

1. **Check the embed is on**: Shopify admin → **Online Store → Themes → Customize** → **App embeds** → enable **Aixly AI Chatbot** → **Save**. Make sure you're editing your *published* theme.
2. **Check the Setup Guide**: app → **Dashboard** → **Refresh status**.
3. **Check Appearance**: app → **Appearance → Button** → **Show launcher** is on.
4. **Check where it appears**: app → **Settings → Where the chat appears**. It may be hidden on the cart page or on paths you listed.
5. **Wait and refresh**: changes can take up to 2 minutes to reach your storefront.

---

## Widget disappeared after working earlier

Most often your **Starter plan** monthly conversation limit was reached. Open **Plans** to upgrade, or wait until the period resets.

---

## The app keeps asking me to approve permissions, or a feature says it needs permission

Shopify asks for new permissions when you open the app after an update. Approve them on Shopify's screen. If you dismissed it, reload the app from **Shopify Admin → Apps → Aixly**. Features that need a missing permission (for example filing returns in Shopify) simply stay off until then.

---

## Shoppers can't reach my team / live chat isn't offered

- **Settings → Live chat & handoff**: **Let shoppers chat with your team** must be on.
- If **Only offer live chat during business hours** is on, check the hours and **Time zone**.
- Someone needs to have the app open in Shopify admin (any page) for the team to count as available. Otherwise shoppers leave their contact details instead, and you'll find the request in **Chats**.

---

## I'm not getting alert emails

- Check **Settings → Notification settings**: the notification email is correct.
- Look in your spam folder, and add the sender to your contacts.
- For instant alerts while you work, keep the app open; turn on **Sound alerts** on the Chats page.

---

## A shopper didn't get my reply by email

Missed-reply emails are only sent when the shopper left before your reply **and** shared their email in the chat, and **Email shoppers the replies they missed** is on. They're sent about 2 minutes after your reply.

---

## Knowledge base source failed

- **URLs**: use pages on your own store domain with readable text (not mostly images).
- **Documents**: PDF, DOC, DOCX or TXT, up to 5 MB.

---

## Answers feel inaccurate

- Open **Chats → Teach the assistant** and save answers for the questions listed there.
- Use **Correct this answer** on wrong replies in **Chats**: the fix applies from the next message.
- Add your FAQ, shipping and sizing pages in **Settings → Knowledge base training**.
- Check **Settings → Personality** instructions don't contradict your policies.

---

## A return wasn't created in Shopify

- **Settings → Order lookup → File return requests in Shopify** must be on, and the returns permission approved.
- Only items that have been fulfilled and not already returned can be returned. Otherwise the assistant explains this, or the request goes to **Requests**.
