import React from "react";
// Correct import for React 18+ (from 'react-dom/client')
import ReactDOM from "react-dom/client";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

// Create a root for the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Use the root to render the App component
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
