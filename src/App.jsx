import { useState } from "react";
import "./App.css";

function App() {
  const [Name, setName] = useState("");
  const [newValue, setNewValue] = useState("")
  return (
    <div>
      <input
      
        onChange={(event) => {
          let newValue = event.target.value;
          setNewValue(newValue)
        }}
        placeholder="enter the display name"
      />
      <button onClick={()=>{setName(newValue);}}>
        enter
      </button>
      <br></br>
      {Name}
    </div>
  );
}

export default App;
