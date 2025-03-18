# Task Manager React Frontend

## Day 4: React Basics & Setup 11th March (After Day 3 - .Net Backend)  

### Step 1: Set Up the React Project
- Create the React project
npm create vite@latest task-manager-frontend -- --template react
cd task-manager-frontend
npm install

### Step 2: Clean Up the Default App
- Open src/App.jsx and replace
- Update src/App.css
- Delete src/assets/ (optional, removes the logo)

### Step 3: Install Axios for API Calls
- npm install axios
- Verify it’s in package.json under dependencies

### Step 4: Create a TaskList Component
- Create src/components/TaskList.jsx
- Update src/App.jsx to import TaskList

## Day 5: React CRUD Operations

### Step 1: Create a TaskForm Component
- Create TaskFrom .jsx
- Add basic styling to src/App.css

### Step 2: Update TaskList for CRUD
- Update TaskList to handle CRUD operations
- Update basic styling in src/App.css

### Step 3: Integrate TaskForm with TaskList
- Update src/App.jsx
- Update TaskList.jsx to pass handleTaskAdded

## Fixing the React Frontend Port in Vite to avoid cors issue

### Step 1: Create or Update vite.config.js
- In your task-manager-frontend directory, check if vite.config.js exists
ls
- Add the following code to vite.config.js
export default {
  server: {
    port: 5175, // Set your desired port
    strictPort: true, // Fail if port is in use
  },
};

### Step 2: kill port if already used
- Open Terminal.
Find the process using the port
lsof -i :5175
- Identify the PID (Process ID).
Kill the process using the PID
kill -9 <PID>


## Day 6: Integration & Authentication

### Step 3: Integrate Auth in React
- Install jwt-decode (optional, for decoding)
npm install jwt-decode

- Create src/components/Login.jsx
- Update App.jsx with auth state:
- Update TaskList.jsx and TaskForm.jsx to use the token:

// In TaskList.jsx
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
};
await axios.get('https://localhost:7291/api/tasks', config);
await axios.put(`https://localhost:7291/api/tasks/${id}`, updatedTask, config);
await axios.delete(`https://localhost:7291/api/tasks/${id}`, config);

// In TaskForm.jsx
await axios.post('https://localhost:7291/api/tasks', { title, isCompleted }, config);