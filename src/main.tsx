import { createRoot } from "react-dom/client";

import "./application.css";
import { Application } from "./application.js";

createRoot(document.getElementById("app")!).render(<Application />);
