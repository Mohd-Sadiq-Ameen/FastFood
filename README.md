# Thalatha Cafe 🟢

> Fresh. Fast. Flavourful. — A premium fast food ordering website for Delhi.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, featured items, trust signals, CTA |
| Menu | `/menu` | Sidebar + grid, filterable by category |
| Item Detail | `/menu/[slug]` | Full detail, ingredients, nutrition, related |
| About | `/about` | Brand story, values, trust signals |

## 🛒 WhatsApp Ordering

All "Order Now" buttons open WhatsApp at `+91 87006 29458` with a pre-filled message:

```
🍽️ New Order from Thalatha Cafe

📦 Ordered: [Item Name]
💰 Amount to Pay: ₹[Price]

Please confirm my order! I'll share my delivery address.
```

## 🎨 Brand Colors

| Name | Hex |
|------|-----|
| Green (primary) | `#1DB954` |
| Red (accents) | `#E8001C` |
| Yellow (badges) | `#FFC300` |
| Black | `#111111` |
| Gray (bg) | `#F5F5F5` |

## ➕ Adding New Items

Edit `data/menuData.js` and add a new object to `menuItems`. The site will automatically include it everywhere — menu grid, sitemap, and static paths.

## 🌐 Deployment (Vercel)

```bash
npx vercel
```

Update `metadataBase` in `app/layout.js` with your real domain before deploying.
