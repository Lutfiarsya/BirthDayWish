import { useState } from "react";
import MainComp from "./Component/MainComp";
import Timer from "./Component/Timer";


function App() {
const [isToday, setIsToday] = useState(false)
  return (
    <div className="App w-full h-screen bg-[--fourth-color]">
      {isToday ? <MainComp/> : <Timer setToday={setIsToday}/>}
        
    </div>
  );
}

export default App;
