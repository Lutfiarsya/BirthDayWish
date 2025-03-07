import CountDown from "../Utilities/Countdown";
import { useState, useEffect } from "react";


const Timer = ({setToday,}) => {
    let targetDate = '2025-03-08T00:00:00Z'
    const calculateTimeLeft = () => {
        const now = new Date();
        const target = new Date(targetDate);
        const diff = target - now;
    
        if (diff <= 0) return { days: String(0).padStart(2, '0'), hours: String(0).padStart(2, '0'), minutes: String(0).padStart(2, '0'), seconds: String(0).padStart(2, '0') };
    
        return {
            days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
            minutes: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
            seconds: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0"),
          };
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () =>{clearInterval(timer);};
}, [targetDate]);
    return(
        <div className=" w-full h-screen font-['jersey_15'] text-white items-center flex flex-col justify-center">
            <div className=" w-full h-[40%] items-center text-center flex flex-col justify-around">
            {timeLeft.days > 0 && timeLeft.hours > 0 && timeLeft.minutes > 0 && timeLeft.seconds > 0 && (
                <h1 className="md:text-[90px] text-[40px] ">Wait Until Ur BirthDay!!</h1>
            )}
            <CountDown days={timeLeft.days} hours={timeLeft.hours} minutes={timeLeft.minutes} second={timeLeft.seconds}/>
            {timeLeft.days == 0 && timeLeft.hours == 0 && timeLeft.minutes == 0 && timeLeft.seconds == 0 && (
                <button className="mt-10 text-[30px] w-36 text-[--secondary-color]  absolute bottom-[50px] bg-white shadow-[5px_6px_0px_3px_var(--secondary-color)] border border-[--secondary-color] transition-all duration-200 active:translate-y-2 active:shadow-[4px_5px_1px_1px_rgba(255,150,150,0.6)] rounded-md" onClick={() => setToday(true)}>Click Me!</button>
            )}
            </div>
        </div>
    )
}

export default Timer;