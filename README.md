# Cinar Merchant Services Website

A production-oriented Next.js App Router website for `cinarmerchant.com`.

## Pages
- `/` — primary one-page merchant acquisition / company legitimacy landing page
- `/merchant-services` — solution overview
- `/about` — company overview
- `/contact` — merchant, bank, provider, and partner inquiries
- `/privacy` — starter Privacy Policy
- `/terms` — starter Terms of Use
- `/robots.txt` and `/sitemap.xml` — search indexing support

## Local development
```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Production build
```bash
pnpm build
pnpm start
```

## Contact email
The default contact address is `hello@cinarmerchant.com`.
Override it at build time if needed:
```bash
NEXT_PUBLIC_CONTACT_EMAIL=your-email@cinarmerchant.com pnpm build
```

## Deployment
This project can run anywhere that supports a current Node.js/Next.js deployment. It is intentionally dependency-light and does not require Tailwind or a component framework.

## Docker images

GitHub publishes a container image to GHCR on every push to `main` and on `v*` tags.

### Pull the image

```bash
IMAGE=ghcr.io/cinar-merchant/cinarmerchant.com
docker pull "${IMAGE}:sha-$(curl -sI https://github.com/${GITHUB_REPO}/packages/container/${IMAGE//\//-}/versions | grep -i ^content-location | sed 's/.*version-tag\/latest//' || echo latest)"
# or simply the moving tag:
docker pull "${IMAGE}:main"
```

### Run locally

```bash
docker run --rm -p 3000:3000 "${IMAGE}:main"
```

Override the contact email at runtime if needed:

```bash
docker run --rm -e NEXT_PUBLIC_CONTACT_EMAIL=you@example.com -p 3000:3000 "${IMAGE}:main"
```

## Before launch
1. Confirm `hello@cinarmerchant.com` is provisioned, or set `NEXT_PUBLIC_CONTACT_EMAIL`.
2. Have counsel review `/privacy` and `/terms`.
3. Add analytics only after deciding on consent/privacy requirements.
4. If a payment provider requires branding/disclosure language, add it exactly as required by the executed agreement.
5. Connect the Contact page to your CRM/form backend when you are ready to collect leads.
