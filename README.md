Fullstack Polling App

A fullstack polling application built with Next.js 13 (App Router), TypeScript, Supabase, and TailwindCSS.
It allows users to register, log in, create polls, and vote — with real-time updates powered by Supabase.

🚀 Features

🔐 Authentication with Supabase (login/register)

🗳️ Create polls with multiple options

✅ Vote on polls (one vote per user)

📊 Real-time updates using Supabase’s subscriptions

🎨 Styled with TailwindCSS

⚡ Built with Next.js 13 App Router

🛠️ Tech Stack

Next.js 13
 (React framework)

Supabase
 (Auth + Database + Realtime)

TailwindCSS
 (Styling)

TypeScript

📦 Installation

Clone the repository:

git clone https://github.com/<your-username>/fullstack_polling.git
cd fullstack_polling/polling-app


Install dependencies:

npm install

⚙️ Setup Environment

Create a .env.local file in the root of polling-app/:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


You can find these values in your Supabase project settings
.

▶️ Running the App

Start the development server:

npm run dev


Open http://localhost:3000
 in your browser.

🧑‍💻 Project Structure
polling-app/
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # Reusable UI components
│   ├── lib/            # Supabase clients & utilities
│   └── styles/         # Global styles
├── middleware.ts       # Middleware for auth
├── next.config.ts      # Next.js config
└── package.json

📌 TODO / Improvements

Add pagination for polls

Add results analytics (e.g., % of votes)

Deploy to Vercel with Supabase backend

📜 License

This project is licensed under the MIT License.
