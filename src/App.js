import './App.css';
import Timer from './component/Timer';
import React,{ useEffect, useState }  from 'react';
function App() {
  const [timerMin,setTimerMin]= useState(0);
  const [timerSec,setTimerSec]= useState(0);
var timer;
useEffect(()=>{
 timer = setInterval(() => {
  setTimerSec(timerSec+1);
  if(timerSec===56){
    setTimerMin(timerMin+1);
    setTimerSec(0);
  }
}, 1000);
return ()=>clearInterval(timer);
})

  return (
    <div className="App">
      <Timer 
      timerMin={timerMin} 
      timerSec={timerSec}
      setTimerMin={setTimerMin}
      setTimerSec={setTimerSec}
      timer={timer}
      />
    </div>
  );
}

export default App;
