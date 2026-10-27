---
title: Helpdesk (Zendesk, Freshdesk, Gorgias, Help Scout, webhook)
sidebar_position: 2
---

Already use a helpdesk? Aixly can create a ticket there when your team needs to follow up. Each ticket has the AI summary, the shopper's request, their contact details, the chat transcript and a link to the conversation in Aixly.

---

## Connect

Open **Settings → Helpdesk**, pick your helpdesk and fill in:

![Settings → Helpdesk](/img/screens/settings-helpdesk@2x.webp)

| Helpdesk | You need | Where to find it |
|---|---|---|
| Zendesk | Subdomain, agent email, API token | Admin Center → Apps and integrations → Zendesk API |
| Freshdesk | Subdomain, API key | Profile picture → Profile settings → View API key |
| Gorgias | Subdomain, account email, API key | Settings → REST API |
| Help Scout | App ID, App secret, Mailbox ID | Your profile → My Apps → Create app; the mailbox ID is in the mailbox URL |
| Webhook | An https URL (optional signing secret) | Zapier, Make or your own system |

Click **Connect**, then **Send a test ticket** to check it works. The test ticket opens in a new tab.

---

## When tickets are created

Choose any of:

- A shopper leaves their contact details because your team is offline
- A shopper asks to cancel, change or return an order
- A shopper waits 3 minutes in a live chat without a reply

If your helpdesk is briefly unavailable, Aixly retries automatically (over about 16 hours). **Recent tickets** shows each one with a link, and **Retry** for any that failed.

---

## Webhook format

Each ticket is sent as JSON (`event`: `aixly.ticket.contact`, `aixly.ticket.order` or `aixly.ticket.unanswered`) with the subject, text, contact details, summary, transcript and conversation link.

If you set a signing secret, verify requests with the `X-Aixly-Timestamp` and `X-Aixly-Signature` headers: the signature is `sha256=` followed by the HMAC-SHA256 of `timestamp.body`, using your secret.

---

## Privacy

Credentials are stored encrypted and are only visible to the store (never to team-inbox members). Disconnecting stops new tickets.
