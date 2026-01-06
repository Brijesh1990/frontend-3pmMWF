import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import EmployeeData from "./EmployeeData.jsx";
// import { Employee } from "./EmployeeData";
import App from "./Data.jsx";
// functoinal component
createRoot(document.getElementById("root")).render(
  <StrictMode>
 {/* <EmployeeData /> */}
 {/* <Employee /> */}
  <App />
   </StrictMode>
);
