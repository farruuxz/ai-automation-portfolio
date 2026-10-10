# NEXT Academy — AI Administrator

Premium one-page portfolio case study website for the AI automation project.

## Quick Start

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Screenshots

Place your real Telegram screenshots in:

```
public/images/consultation.png      — AI consultation dialog
public/images/admin-notification.png — Admin notification message
public/images/crm.png               — Google Sheets CRM view
```

The images are served from `/images/` in the browser.

## Configuration

Telegram username and contact info are configured in a single file:

```
src/config.js
```

```js
export const CONFIG = {
  telegram: '@farruuxz',
  telegramUrl: 'https://t.me/farruuxz',
  authorName: 'Farrux',
  projectName: 'NEXT Academy — AI Administrator',
}
```

Change any value there and it updates across the entire site.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion

## Structure

```
src/
├── App.jsx            — Main layout
├── config.js          — Contact & project config
├── index.css          — Global styles
├── main.jsx           — Entry point
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Problem.jsx
    ├── Solution.jsx
    ├── Flow.jsx
    ├── Screenshots.jsx — Demo section with lightbox
    ├── Lightbox.jsx
    ├── BusinessValue.jsx
    ├── TechStack.jsx
    ├── Result.jsx
    ├── FinalCTA.jsx
    └── Footer.jsx
```
