# 1Night Signal — Gospel Radio

A premium, dark-luxury 24/7 Gospel Radio dashboard built with React + Vite.

## Stack
- React 18 + Vite
- React Router DOM (multi-page navigation)
- Framer Motion (fade-up / hover motion)
- React Icons

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── components/     # Navbar, Hero, RadioTuner, ChannelCard, Channels,
│                    NowPlaying, BibleVerse, AppDownload, GospelTV,
│                    SocialConnect, Footer
├── context/         # PlayerContext — global play/pause, channel, volume, progress state
├── data/            # channels.js — channel, TV, social & verse data
├── pages/           # Home, About, Channels, Live, BibleVerse, TV, App, Contact
├── App.jsx
├── main.jsx
└── index.css        # design tokens + base styles
```

## Notes
- All playback is simulated client-side (no real audio stream wired in) — the
  play/pause button, progress bar, volume, and next/prev channel controls are
  all fully interactive against shared React state via `PlayerContext`.
- Colors, type, and spacing follow the exact palette and layout brief:
  near-black background (`#05070B`), gold accents (`#F5B942` / `#FFB000`),
  and per-channel purple/blue/teal accents.
