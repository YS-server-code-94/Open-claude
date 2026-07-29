SHAHEEN-YS — Web Gateway

Run locally:
1) Copy .env.example to .env and fill variables
2) Install deps (frontend):
   npm ci
3) Start dev server:
   npm run dev
   (open http://localhost:5173)

Server (API):
cd server
npm ci
node index.js
# or use docker-compose (recommended)

Docker Compose:
docker compose up --build
This starts: web (nginx serving frontend) on port 80, api on 4000, postgres DB.
