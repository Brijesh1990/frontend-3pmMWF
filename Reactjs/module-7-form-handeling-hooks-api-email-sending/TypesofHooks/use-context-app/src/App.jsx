import React,{useContext} from "react";
const themeContext=React.createContext('light');
function App()
{
  const theme=useContext(themeContext)
  return(
    <>
     <button type="button" className="theme">i am {theme} using useContext</button>
    </>
  )
}

export default App