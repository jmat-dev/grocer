# ShopList 🛒

A smart, mobile-first shopping list PWA with reminders and shop mode.

## Features

- **Add items** with quantity, unit, category, and notes
- **Check off items** → they move to a "Taken" tab
- **Category filters** — filter by aisle/category
- **Reminders** — set date/time reminders with browser notifications
- **Shop mode** — bigger checkboxes for easy tapping in store
- **Progress bar** — see how far along you are
- **Offline support** — works without internet (PWA)
- **Install on home screen** — works like a native app
- **Share/export** list as text

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `shoplist`)
2. Upload all files: `index.html`, `manifest.json`, `icon.svg`, `sw.js`
3. Go to **Settings → Pages**
4. Set source to **main branch / root**
5. Your app will be live at: `https://yourusername.github.io/shoplist`

## File structure

```
shoplist/
├── index.html      # Main app
├── manifest.json   # PWA manifest
├── icon.svg        # App icon
├── sw.js           # Service worker (offline)
└── README.md
```

## Usage

- Tap **+** to add items with full details
- Type in the quick-add bar and press Enter for fast adds
- Tap the checkbox to mark an item as taken — it moves to the Taken tab
- Use **Reminders** tab to set shopping alerts
- **Settings** → Shop Mode for bigger tap targets in-store
