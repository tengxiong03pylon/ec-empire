# EC Empire

**EC Empire** is a free, educational entrepreneurship card game developed for the Fresno State Entrepreneurship Club. Players receive a random career pathway, make 10 financial and strategic decisions, navigate uncertain business events, and compete for the highest final net worth.

## Features
- Eight entrepreneurial career pathways
- Five randomly dealt decision cards per round
- Business assets, cash, debt, ownership dilution, skills and risk
- A short educational lesson after every move
- Recession, competitors, demand shocks and other random events
- 10-round career simulations, achievements by final wealth tier
- Local browser leaderboard, with **optional** cloud scoreboard integration
- Responsive design for phone and desktop

## Run locally

```bash
npm install
npm run dev
npm run build
npm test
```

## Deployment

Push `main` to a Vercel project configured with framework **Vite**, build command `npm run build`, output directory `dist`. No backend is required for solo play.

## Leaderboard storage

By default scores are stored in browser localStorage and are **not shared among users**. To enable a shared scoreboard:

1. Provision a **new Supabase project specifically for EC Empire**. Do not reuse Pylon's production or staging database.
2. Apply `supabase/schema.sql` in that new project.
3. Configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel, then redeploy.

**Security notice:** The included basic shared-scoreboard schema is designed for low-stakes educational play; it allows anonymous submissions and should not be used for competitive prizes. For prize competitions, implement authenticated accounts and server-verified gameplay / scores before enabling a public leaderboard. Never place a Supabase service-role key in `VITE_` variables.

## Game scoring

`net worth = cash + business asset value × ownership − debt`

Business asset value is modeled as value **before** the financing debt shown, to avoid deducting debt twice. Figures, probabilities, and financial returns are fictional, simplified for teaching and are not investment advice. Debt costs 5% per round. Ownership sold reduces the player's business equity share.

## Ownership

This repository is distinct from the Pylon application and requires no access to its code, database, users, or credentials.
