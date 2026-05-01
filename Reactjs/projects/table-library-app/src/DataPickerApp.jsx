import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "jquery-ui-dist/jquery-ui.css";

function App() {
  useEffect(() => {
     window.$ = window.jQuery = $;
     $("#datepicker").datepicker();
  }, []);

  

  return (
    <div>
      <h2>Datepicker Example</h2>
      <input id="datepicker" placeholder="Select date" />
    </div>
  );
}

export default App;