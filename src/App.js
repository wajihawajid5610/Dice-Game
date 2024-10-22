
import { useState } from "react";
import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";


function App() {
  let [IsPlayGame,seIsPlaygame]= useState(false);
  const TogglePlayGame=()=>{
    seIsPlaygame(prev => !prev)
  }
  return (
    <div >
     {IsPlayGame ?  <PlayGame/>: <StartGame toggle={TogglePlayGame}/> }
    </div>
  );
}

export default App;
