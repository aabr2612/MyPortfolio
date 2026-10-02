# Personal Portfolio

A sleek, modern, and highly responsive personal portfolio built with React, Vite, and TypeScript. 

## Features
- **Dynamic Data Rendering:** All content (experience, projects, skills, services) is loaded from modular TypeScript data files (`src/data`), making updates incredibly fast and error-free.
- **Custom Theming:** Supports full Light/Dark mode toggling driven by CSS variables and React state.
- **Scroll Animations:** Implements custom scroll reveal logic (`.animate.scroll`) to gracefully slide elements into view as the user scrolls.
- **Scroll Spy Navigation:** The sticky header automatically highlights the currently active section in the viewport.
- **Mobile First:** Fully responsive design with a custom off-canvas mobile navigation menu.

## Tech Stack
- **Frontend Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Custom CSS + Tailwind CSS (hybrid architecture)
- **Icons:** Boxicons & Devicons

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/aabr2612/MyPortfolio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Customizing Content
To update your portfolio content, you do not need to modify any React components. Simply edit the corresponding files in the `src/data` directory:
- `personalInfo.ts`: Name, about text, and social links
- `experience.ts`: Work history
- `projects.ts`: Project portfolio and GitHub links
- `skills.ts`: Tech stack and specialized tools

---
*Designed & Developed by Abdul Rehman*
