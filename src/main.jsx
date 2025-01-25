import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Greeting, Person } from "./Greeting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <Person />
  </StrictMode>
);
