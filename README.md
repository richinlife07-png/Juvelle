# Juvelle — Frontend (MVP)

A React + Vite implementation of the Juvelle landing page, structured so a
real backend, database, and auth layer can be dropped in later without
rewriting the UI.

## Run it

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` if you want to point at a real backend later.

## Why it's structured this way

```
src/
  components/
    layout/      Navbar, Footer — page chrome
    sections/     Hero, HowItWorks, WhatWeHelpWith — page content
    ui/           Button, IconCircle — small reusable primitives
    modals/       ConsultationModal — the one flow that will talk to a backend
  data/
    content.js    All copy, shaped like a future API response.
                   Replace this with a hook that calls GET /api/site-content
                   and nothing above it needs to change.
  hooks/
    useConsultationForm.js   Form state + submit logic, decoupled from the
                              modal's JSX so it's independently testable.
  services/
    api.js                    One fetch wrapper: base URL, JSON handling,
                               error shape. Every other service goes through it.
    consultationService.js    The one real "API call" in the MVP — documents
                               the expected backend contract in a comment.
  config/
    env.js         Reads VITE_API_BASE_URL. The only file that needs to
                    change when the API moves from mock to real.
```

## Wiring up a real backend

1. Stand up an endpoint: `POST /api/consultations` accepting
   `{ name, email, phone?, message? }` and returning the created record.
2. Set `VITE_API_BASE_URL` (or rely on the Vite dev proxy in
   `vite.config.js`, which forwards `/api/*` to `VITE_API_PROXY_TARGET`).
3. Nothing in `components/` changes — `useConsultationForm` already calls
   `consultationService.createConsultationRequest`, which calls `api.post`.

The same pattern (`services/<feature>Service.js` + optional
`hooks/use<Feature>.js`) is how any future feature — accounts, pricing
plans pulled from a database, a contact form, etc. — should be added.

## Notes

- Icons: `lucide-react`.
- Fonts: Cormorant Garamond (display) + Jost (body), loaded via Google Fonts
  in `index.html`.
- The hero visual is a self-contained inline SVG (`DeskIllustration` in
  `Hero.jsx`) — no external image hosting/licensing to manage for the MVP.
- No CSS framework; design tokens live as CSS custom properties in
  `src/index.css`.
