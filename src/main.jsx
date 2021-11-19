import React from "react";
import ReactDOM from "react-dom";

// Styles
import "tailwindcss/tailwind.css";

// Routing
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from "react-router-dom";

// Pages
import Home from "./pages/index";
import Utilities from "./pages/utilities/index";

// PWA Content Update
import ReloadPrompt from "./components/ReloadPrompt";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/utilities/*" element={<Utilities />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    
    <ReloadPrompt />
  </React.StrictMode>,
  document.getElementById("root")
);
