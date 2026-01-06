import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import HelloApp from "./HelloApp";
// import Display from "./JsxApp";
import App from "./FragmentsApp";
createRoot(document.getElementById("demo")).render(
    <StrictMode>
    {/* <HelloApp /> */}
    {/* <Display /> */}
    <App />
    </StrictMode>
)
