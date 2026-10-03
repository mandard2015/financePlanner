# Vercel environment setup for the contact API

The serverless contact endpoint is implemented in `api/contact.js` and uses the following environment variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `EMAIL_TO`
- `EMAIL_FROM`

## Local development

1. Copy `.env.example` to `.env.local`.
2. Fill in the real SMTP values for your provider.
3. Never commit `.env.local`.

Example:

```bash
cp .env.example .env.local
```

## Vercel deployment

In the Vercel Dashboard:

1. Open the project.
2. Go to Settings → Environment Variables.
3. Add each variable individually.
4. Set them for at least Production.
5. Optionally set Preview and Development as needed.

| Variable | Purpose | Public? |
| --- | --- | --- |
| `SMTP_HOST` | SMTP server hostname | No |
| `SMTP_PORT` | SMTP port, typically 587 or 465 | No |
| `SMTP_USER` | SMTP username | No |
| `SMTP_PASS` | SMTP password or provider app password | No |
| `EMAIL_TO` | Destination mailbox for enquiries | No |
| `EMAIL_FROM` | Sender address used in outbound mail | No |

## Deployment checklist

After adding or updating environment variables:

- redeploy the Vercel project
- test the contact form submission
- confirm the success/failure response is generic and safe
- check the destination mailbox and any spam or junk folder
- verify that no SMTP secrets are exposed in frontend code or analytics

## Security notes

- Never commit `.env.local`.
- Never put SMTP credentials in React/browser code.
- Never use `REACT_APP_SMTP_*` variables for server-only email config.
- Never log `SMTP_PASS` or other credentials.
- Do not send submitted enquiry details to analytics.
- Do not log PII unnecessarily.

The endpoint uses Nodemailer for outbound mail delivery. The actual email sending is performed server-side in the Vercel function, not in the browser.
