@echo off
echo Starting AI Interview Coach...

:: Open the browser (give the server a moment to initialize or just open it)
start http://localhost:5173

:: Start the Vite development server
npm run dev
