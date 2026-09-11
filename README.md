

## Application Workflow

The application starts with a simple navigation bar that allows the user to move between the **Profile** and **Tasks** sections. The Profile section displays the user's profile information, while the Tasks section provides the main task management features.

In the Tasks section, the user can add a new task using the input form. A live preview is displayed while entering the task details. Once the task is added, it appears on the task board. Users can mark tasks as completed, delete individual tasks, or clear all completed tasks. The application also keeps track of how many tasks are still remaining.

The task operations are connected to a backend REST API. Whenever a task is added, updated, deleted, or cleared, the frontend sends the appropriate request to the Express server. The server processes the request and sends the updated task information back to the application.

The application also includes a **dark/light mode toggle**, allowing the user to change the appearance of the interface.

The backend currently stores the tasks in memory, so the tasks remain available while the server is running. If the server is restarted, the task list is reset to the initial data.

To run the application, the backend server is started first, followed by the React development server. Once both are running, the application can be opened in the browser and all the features can be used.

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
