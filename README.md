# SiSquare AI Official Website

The official corporate website for **SiSquare AI Limited**, a Hong Kong-based One Person Company (OPC) specializing in AI-powered cross-border software solutions.

> **One Person, Infinite Scale.** 一人成軍，智勝未來

---

## 🌐 Live Site

[www.sisquare.ai](https://sisquare.ai)

---

## 🚀 Features

- **Multi-language Support** - English, 简体中文，繁體中文 (HK)
- **Modern Tech Stack** - React (Vite) + TailwindCSS + Framer Motion
- **Responsive Design** - Optimized for mobile and desktop
- **Smooth Animations** - Professional entrance animations and hover effects
- **i18n Ready** - Built-in language switching with localStorage persistence

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 (Vite) |
| Styling | TailwindCSS 4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| i18n | react-i18next |
| Deployment | Vercel / Netlify / Any static host |

---

## 📦 Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SiSquare-AI/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
sisquare-website/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Solutions.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── locales/            # Translation files
│   │   ├── en.json
│   │   ├── zh-CN.json
│   │   └── zh-HK.json
│   ├── App.jsx
│   ├── main.jsx
│   ├── i18n.js            # i18n configuration
│   └── index.css
├── .env.example           # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🌍 Multi-language Support

The website supports three languages with instant switching:

| Language | Code | Label |
|----------|------|-------|
| English | `en` | EN |
| 简体中文 | `zh-CN` | 简 |
| 繁體中文 (HK) | `zh-HK` | 繁 |

Language preference is saved in `localStorage` and persists across sessions.

---

## 📄 License

**© 2026 SiSquare AI Limited. All Rights Reserved.**

This codebase is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 📞 Contact

- **Email:** hello@sisquare.ai
- **Location:** Hong Kong (The L. Plaza) | Serving Global Clients
- **Website:** [sisquare.ai](https://sisquare.ai)

---

*Built with AI, designed for the future.* 🚀
