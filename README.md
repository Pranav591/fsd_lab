# Merged App — exp2 + exp3 + exp4 + exp5 + exp6

One full-stack app that combines all five experiments:

| Experiment | What it was | Where it ended up |
|---|---|---|
| exp2 | Static profile page | `client/src/pages/Profile.jsx` — the Profile tab |
| exp3 | DOM events + live preview + theme toggle | Live preview in `AddTaskForm.jsx`, dark-mode toggle in `Navbar.jsx` / `App.jsx` |
| exp4 | Stateful vanilla-JS to-do app (remaining count, clear completed) | "N of M tasks remaining" + "Clear completed" in `pages/Tasks.jsx` |
| exp5 | React task board (components, props) | `components/TaskCard.jsx`, `Column.jsx`, `AddTaskForm.jsx`, board layout |
| exp6 | Express REST API for tasks | `server/` — untouched except for added CORS support |

Previously exp5's task board only held state in memory (`useState`), and
exp6's API had no UI. Now the React board in `client/` calls the exp6 API
(`client/src/api/tasks.js`) for every add/toggle/delete/clear-completed
action, so tasks persist as long as the server is running. The Profile
page (exp2) links to it, and the Tasks page carries the dark mode toggle
from exp3.

## Structure

```
merged-app/
├── server/        # Express API (from exp6)
│   ├── server.js
│   ├── middleware/
│   └── routes/tasks.js
└── client/        # Vite + React app (exp2 profile + exp3/4/5 task board)
    └── src/
        ├── pages/Profile.jsx
        ├── pages/Tasks.jsx
        ├── components/
        └── api/tasks.js
```

## Running it

Two terminals, both from inside `merged-app/`:

```bash
# Terminal 1 — API (http://localhost:3000)
cd server
npm install
npm start

# Terminal 2 — React app (http://localhost:5173)
cd client
npm install
npm run dev
```

Open the client URL. The Vite dev server proxies any `/api/*` request to
`http://localhost:3000` (see `client/vite.config.js`), so no extra config
is needed. Switch between the **Profile** and **Tasks** tabs in the nav bar,
and use the 🌙/☀ button to toggle dark mode.

## Notes

- The Express API still uses an in-memory array (`server/routes/tasks.js`),
  so restarting the server resets tasks back to the two seed items.
- `cors` was added as a new dependency to `server/package.json` so the
  browser (client on port 5173) is allowed to call the API (port 3000).
