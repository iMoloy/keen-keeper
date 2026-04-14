# 👥 Keen Keeper — Keep Your Friendships Alive

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.22-CA4245?style=flat&logo=react-router&logoColor=white)

---

## 🌐 Links

- **Live Site**: [keen-keeper-moloy.vercel.app](https://keen-keeper-moloy.vercel.app)
- **GitHub Repository**: [github.com/iMoloy/keen-keeper](https://github.com/iMoloy/keen-keeper)

---

## 📖 Description

Keen Keeper is a friendship management web app that helps you stay intentionally connected with the people who matter most. Life gets busy — Keen Keeper makes sure no important relationship quietly fades away.

Set contact goals for each friend, track how long it's been since you last connected, log calls, texts, and video check-ins, and see your relationship habits visualized through analytics.

---

## ✨ Features

### Core Features

- **Friend Dashboard** — View all friends in a responsive 4-column grid with profile pictures, tags, days since contact, and color-coded status badges (On-Track / Almost Due / Overdue)
- **Summary Stats** — At-a-glance cards showing total friends, on-track count, friends needing attention, and interactions this month
- **Friend Detail Page** — Two-column layout with full friend info, relationship goal, stats cards, and action buttons (Snooze, Archive, Delete)
- **Quick Check-In** — Log a Call, Text, or Video interaction from any friend's page with a single click; entry instantly appears on the Timeline
- **Toast Notifications** — Instant feedback every time a check-in is logged
- **Timeline Page** — Full interaction history sorted newest-first, with filter support by interaction type (Call / Text / Video)
- **Friendship Analytics** — Recharts donut chart showing breakdown of interactions by type — starts empty and builds as you log check-ins
- **Loading Animation** — Spinner shown while friends data is being fetched on first load
- **404 Not Found Page** — Custom page for any unknown or invalid route
- **Persistent Timeline** — Interaction history saved to `localStorage` so data survives page refreshes

### Responsive Design

- Fully responsive across mobile, tablet, and desktop screen sizes
- Mobile-first layout with adaptive grids

---

## 🛠️ Technologies Used

| Technology           | Version | Purpose                                |
| -------------------- | ------- | -------------------------------------- |
| **React.js**         | 18.2    | UI component framework                 |
| **React Router DOM** | 6.22    | Client-side routing & navigation       |
| **Tailwind CSS**     | 3.4     | Utility-first styling & responsiveness |
| **Recharts**         | 2.12    | Donut chart for analytics page         |
| **Vite**             | 5.1     | Build tool & lightning-fast dev server |
| **Font Awesome**     | 6.5     | Icons throughout the UI                |
| **Geist Font**       | —       | Typography (via Google Fonts)          |

---

## 📁 Project Structure

```
keen-keeper/
├── public/
│   └── _redirects              # Netlify SPA routing fix
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation with active link highlighting
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── FriendCard.jsx      # Individual friend card component
│   │   ├── LoadingSpinner.jsx  # Loading animation
│   │   └── Toast.jsx           # Toast notification container
│   ├── context/
│   │   └── AppContext.jsx      # Global state: friends, timeline, toasts
│   ├── data/
│   │   └── friends.json        # Friend profiles
│   ├── pages/
│   │   ├── Home.jsx            # Banner, summary cards, friends grid
│   │   ├── FriendDetail.jsx    # Friend info, quick check-in, interactions
│   │   ├── Timeline.jsx        # Interaction history with filter
│   │   ├── Stats.jsx           # Friendship analytics with Recharts
│   │   └── NotFound.jsx        # 404 error page
│   ├── App.jsx                 # Router setup & layout wrapper
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind directives & global styles
├── index.html
├── vercel.json                 # Vercel SPA routing fix
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/iMoloy/keen-keeper.git

# 2. Navigate into the project
cd keen-keeper

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## 🌐 Deployment

### Deployed on Vercel

Live at: [keen-keeper-moloy.vercel.app](https://keen-keeper-moloy.vercel.app)

A `vercel.json` is included to handle SPA client-side routing so page reloads never cause a 404.

### Deploy to Netlify

1. Run `npm run build`
2. Drag and drop the `dist/` folder into Netlify's dashboard

A `public/_redirects` file is included for SPA routing support.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

_Built with ❤️ to help you maintain the relationships that matter most._
