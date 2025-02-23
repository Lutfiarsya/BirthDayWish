import { useState, useEffect } from "react";

const Countdown = ({days, hours, minutes, second}) => {


  return (
    <h1 className="text-white font-semibold md:text-[90px] text-[50px] tracking-widest">
      {days}:{hours}:{minutes}:{second}
    </h1>
  );
};

export default Countdown;