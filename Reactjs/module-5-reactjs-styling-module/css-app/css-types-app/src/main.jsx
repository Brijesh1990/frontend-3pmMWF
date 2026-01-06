import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import InlineApp from "./components/InlineCssApp";
// import InternalApp from "./components/InternalcCssApp";
import ExternalApp from "./components/ExternalCssApp";
import './style.css'
createRoot(document.getElementById("demo")).render(
<StrictMode>
{/* <InlineApp /> */}
{/* <InternalApp /> */}
<ExternalApp />
</StrictMode>
)