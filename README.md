# FOSSEE Workshop Booking Portal (Elite 2026 Modernization)

A high-performance, mobile-first React application designed to modernize the FOSSEE workshop registration experience. This portal features a SaaS-inspired "Elite" design, a private student dashboard, and intelligent workshop discovery.

![Project Preview](https://github.com/shriyash1234-coder/Fosse-repo/raw/main/preview.png) *(Note: Placeholder for actual preview image)*

## ✨ Key Features

- **Elite UI/UX**: A premium design system built with Mesh Gradients, Glassmorphism, and 3D hover transforms.
- **Detailed Workshop Discovery**: Drill-down modals featuring Syllabus, Overview, and Instructor details.
- **Private Student Dashboard**: A bento-style workspace where students can track progress, manage enrollments, and view AI-suggested learning paths.
- **Responsive Registration**: Seamless, mobile-first registration flow with integrated validation.
- **Dark Mode Support**: Native high-contrast dark theme for long-form reading and accessibility.
- **Persistent State**: Leverages `localStorage` for cross-session booking persistence and theme preferences.

## 🚀 Technical Stack

- **Frontend**: React 18, Vite
- **Styling**: Vanilla CSS (Modern Design Tokens, BEM-inspired)
- **Icons**: Lucide-React
- **Environment**: Cross-compatible with standard Node.js/npm environments and No-Node Python-based previews.

## 📂 Project Structure

```bash
├── workshop_booking/frontend/  # Primary React/Vite Project
│   ├── src/
│   │   ├── components/        # Reusable UI (Navbar, Card, Modal, Form)
│   │   ├── hooks/             # Custom Logic (useWorkshops)
│   │   ├── context/           # Global State (WorkshopContext)
│   │   └── pages/             # Layouts (Listing, Dashboard)
│   └── index.html             # Entry Point
├── preview.html               # Standalone, runnable demo (CDN-based React)
└── README.md                  # Project Documentation
```

## 🛠️ Setup & Running

### Option A: Standard Development (Recommended)

Requires [Node.js](https://nodejs.org/) and `npm`.

1. Navigate to the frontend directory:
   ```bash
   cd workshop_booking/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```

### Option B: Quick Preview (No-Node)

If Node.js is not available, you can run the standalone synchronization:

1. Start a local server (e.g., Python):
   ```bash
   python -m http.server 8000
   ```
2. Open your browser and navigate to:
   `http://localhost:8000/preview.html`

## 🎨 Design Rationale

The "Elite" theme was developed to elevate the educational experience from a simple registration form to a comprehensive learning hub. Key decisions include:
- **Mesh Gradients**: Used to create a sense of depth and modern SaaS branding.
- **Bento Grid Layout**: Utilized in the Dashboard to provide a structured yet flexible workspace for data-heavy views.
- **Vibrant Accents**: `Blue #2563eb` was chosen as the primary anchor for its association with professional engineering and tech excellence.

---

> [!NOTE]
> This project is currently in the **Frontend Modernization phase**. Future updates will include real-time backend synchronization and OAuth-based authentication.

Developed as part of the FOSSEE Engineering Modernization initiative.
