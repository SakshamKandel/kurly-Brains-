# Kurly Brains Web

A modern creative agency website built with Next.js 16, React 19, and Framer Motion.

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build

```bash
npm run build
npm run start
```

## 🌐 Deploying to Render

### Option 1: Blueprint (Recommended)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click **New** → **Blueprint**
4. Connect your GitHub repository
5. Render will auto-detect `render.yaml` and configure everything

### Option 2: Manual Setup

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **New** → **Web Service**
3. Connect your GitHub repo: `SakshamKandel/kurly-Brains-`
4. Configure:
   - **Runtime:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`
   - **Plan:** Free

### Environment Variables (if needed)

| Variable | Value |
|----------|-------|
| NODE_ENV | production |
| PORT | 3000 |

## 📦 Tech Stack

- **Framework:** Next.js 16
- **UI:** React 19
- **Animations:** Framer Motion
- **Language:** TypeScript

## 📁 Project Structure

```
src/
├── app/                 # App router pages
│   ├── about/
│   ├── contact/
│   ├── privacy/
│   ├── services/
│   ├── terms/
│   └── work/
├── components/
│   ├── sections/        # Homepage sections
│   ├── Navbar.tsx
│   └── Footer.tsx
└── public/              # Static assets
    ├── clients/         # Client logos
    └── logos/           # Company logos
```

## 🎨 Services

- Web Design & Development
- AI Model Training
- UI/UX Design
- Amazon A+ Content
- Graphic Design
- Brand Identity
- **Sports Graphic Design** ⚽🏀

---

Built with ❤️ by Kurly Brains
