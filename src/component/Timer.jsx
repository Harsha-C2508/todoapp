import React, { Fragment } from 'react'
import styles from "../component/Timer.css"

const Timer = ({timer,timerMin,timerSec,setTimerMin,setTimerSec}) => {
    const restart =()=>{
        setTimerMin(0);
        setTimerSec(0);
      }
    const stop =()=>{
        clearInterval(timer);
    }  
  return (
    <Fragment >
        <h1>Timer</h1>
                <div className="clock">
                    <section>
                        <p>{timerMin<10?"0"+timerMin:timerMin}</p>
                        <small>Min</small>
                    </section>{" "}
                    <span>:</span>
                    <section>
                        <p>{timerSec<10?"0"+timerSec:timerSec}</p>
                        <small>Sec</small>
                    </section>
                </div>
               <div className='buttons'>
                <button className='btn' onClick={restart}>Restart</button>
                <button className='btn' onClick={stop}>Stop</button>
               </div>
    </Fragment>
  )
}
Timer.defaultProps = {
    timerMin:10,
    timerSec:10,
}
export default Timer