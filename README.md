## 🚀 Step 1: Create React App

**Option 1 (Recommended – Fast)**

npm create vite@latest infinite-scroll-app

cd infinite-scroll-app

npm install
👉 Choose:

• React

• JavaScript

## 📁 Step 2: Clean Default Files

Inside src/, delete:

App.css

assets/

**Keep:**

main.jsx

App.jsx

## 📁 Step 3: Create Folder Structure

Inside src/, create:

mkdir components hooks services styles

## 📄 Step 4: Create Files

touch components/PostCard.jsx

touch hooks/useInfiniteScroll.js

touch services/api.js

touch styles/styles.css


## 🧩 Step 5: Add Code

👉 Copy-paste code from previous message into respective files:

• App.jsx

• PostCard.jsx

• useInfiniteScroll.js

• api.js

• styles.css


## 🔗 Step 6: Connect CSS

In App.jsx:

import "./styles/styles.css";

## ⚙️ Step 7: Update main.jsx

Make sure it looks like:

import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
  
    <App />
    
  </React.StrictMode>
  
);

## ▶️ Step 8: Run the App

RUN: npm run dev
👉 Open browser:
http://localhost:5173

## ✅ Step 9: Verify Output

You should see:

• List of cards

• Scroll down → new data loads automatically

• “Loading…” appears

• “No more data” at end


🛠️ Common Issues (Quick Fix)

❌ Nothing loading

👉 Check API URL:

https://jsonplaceholder.typicode.com/photos


❌ Infinite scroll not triggering

👉 Check:

• ref is applied to last element

• hasMore is true


❌ CSS not working
👉 Ensure:
import "./styles/styles.css";
