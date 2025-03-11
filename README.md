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