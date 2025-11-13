# Task Manager App

A simple full-stack to-do list application for managing tasks with create, read, update, and delete (CRUD) operations. Built to demonstrate end-to-end web development skills, including frontend interactivity, backend API, and database persistence. Perfect for a resume portfolio showcasing practical coding.

## Features
- Add new tasks with a simple form.
- View a list of tasks with real-time updates.
- Toggle task completion (strikethrough for done tasks).
- Edit task titles inline.
- Delete tasks.
- Persistent storage—tasks survive page reloads.
- Error handling for empty inputs and API failures.

## Tech Stack
| Component | Technologies |
|-----------|--------------|
| Frontend | React (hooks: useState, useEffect), Axios (API calls), CSS (styling) |
| Backend | Node.js, Express (API routes), CORS (cross-origin), dotenv (env vars) |
| Database | SQLite (file-based, lightweight persistence) |

## Setup and Installation
1. **Clone the Repository:**

   git clone https://github.com/LukasCS/task-manager-node-app.git
   cd task-manager-node-app


2. **Backend Setup:**
- Navigate to backend:
  ```
  cd backend
  npm install
  ```
- Run the server:
  ```
  node server.js
  ```
- Backend runs on http://localhost:5000. Test: Open http://localhost:5000/tasks in browser (should show empty array `[]`).

3. **Frontend Setup:**
- Navigate to frontend:
  ```
  cd ../frontend
  npm install
  ```
- Run the app:
  ```
  npm start
  ```
- Frontend opens at http://localhost:3000. Add tasks—the backend handles storage!

## Screenshots
- Empty state: ![Empty State](screenshots/empty-state.png)
- Adding and listing tasks: ![Active Tasks](screenshots/active-tasks.png)
- Editing and toggling: ![Edit Mode](screenshots/edit-mode.png)

## Contributing
This project is for personal portfolio use, but feedback is welcome! Fork and submit pull requests.

## License
MIT License—feel free to use and modify.

Built by LukasCS for resume/portfolio. See my full portfolio at https://lukascs.github.io/csresume/.
