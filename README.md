# Filyarn Industries

A standard, production-ready React.js boilerplate folder structure powered by **Vite** and configured with path aliases (`@/`).

## Project Folder Structure

This template provides a modular architecture pattern designed to scale. Below is the file tree of the project structure:

```text
Filyarn Industries/
├── .gitignore               # Standard ignore patterns for build & node_modules
├── index.html               # Main HTML entry point
├── jsconfig.json            # IDE configuration for path alias autocompletion (@/*)
├── package.json             # NPM dependencies and run scripts
├── vite.config.js           # Vite server, plugin, and alias configs
├── public/                  # Static assets served directly (like favicon, robots.txt)
│   └── favicon.ico          # Application favicon (SVG format)
└── src/                     # Main source code directory
    ├── App.jsx              # Root component
    ├── index.css            # Global stylesheets
    ├── main.jsx             # Entry script that mounts the App component
    ├── assets/              # Raw assets (images, fonts, custom graphics)
    ├── components/          # Reusable UI components
    │   ├── common/          # Atomic components (Buttons, Inputs, Badges, etc.)
    │   └── layout/          # Layout wrappers (Header, Footer, Sidebar, etc.)
    ├── context/             # Global contexts (Auth, Theme, State management)
    ├── hooks/               # Custom React hooks (useAuth, useLocalStorage, etc.)
    ├── pages/               # Views mapped to specific routes
    ├── routes/              # Router configs and declarations (React Router)
    ├── services/            # API call modules, client configurations (Axios/Fetch)
    ├── styles/              # SCSS/CSS variables, themes, utilities
    └── utils/               # Pure helper/formatter utility functions
```

## Features

- ⚡ **Vite-Powered**: Ultra-fast hot module replacement (HMR) and production builds.
- 📦 **Alias Resolving**: Import files cleanly from anywhere in your project using path aliases:
  ```javascript
  import Button from '@/components/common/Button';
  import useAuth from '@/hooks/useAuth';
  ```
- 📐 **Modular Architecture**: Isolated directories keep styles, components, services, and business logic logically separated.

## Getting Started

To get started, follow these instructions:

### 1. Install Dependencies
Run the following command in the project root folder to install packages:
```bash
npm install
```

### 2. Start Dev Server
Start the Vite development server locally:
```bash
npm run dev
```

### 3. Build for Production
Build optimization and static bundle creation:
```bash
npm run build
```
