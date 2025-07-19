# 📋 Members Dashboard

A simple React app to view, filter, and add members using dummy JSON data.

---

## 📦 Setup Instructions

### 1. Clone the Repository

git clone https://github.com/jamalashraf5/member_dashboard.git

2. Install Dependencies
npm install
3. Run the Development Server
npm start
The app will run at: http://localhost:3000

🛠️ Tools & Libraries Used
⚛️ React (via Vite or CRA)

🎨 CSS (basic styling or modules)

📁 Dummy JSON for simulating API data

⚙️ React Hooks: useState, useEffect

✨ Features
🔎 Search members by name (case-insensitive)

✅ Toggle to show only active members

➕ Add a new member via modal form

⏳ Simulated loading delay using setTimeout

⚠️ Displays error message if data fails to load

🧪 Running Tests (If Added)
Currently, the app has no unit tests.

📌 Suggested setup using Jest + React Testing Library:

npm install --save-dev jest @testing-library/react
npm test
Sample test:

import { render, screen } from '@testing-library/react';
import MemberCard from './MemberCard';

test('renders member name', () => {
  render(<MemberCard member={{ name: 'Jamal', status: 'Active' }} />);
  expect(screen.getByText(/Alice/i)).toBeInTheDocument();
});
🚀 Deployment
You can deploy this app on:

🔗 Netlify

🔗 Vercel

🔗 GitHub Pages

To deploy on GitHub Pages:

Install:

npm install gh-pages --save-dev
In package.json, add:

"homepage": "https://<your-username>.github.io/member_dashboard",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy:

npm run deploy