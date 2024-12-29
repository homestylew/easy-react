import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.querySelector("#root") as any);

console.log(root.render("xxxx "));
