import React, { useRef, useState } from 'react';

const RenderTime = ({ remainingTime }) => {
  let currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [oneLastRerender, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to trigger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;
  console.log(remainingTime);
  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}>
        {remainingTime}
      </div>
    </div>
  );
};
export default RenderTime;