import { useState, useEffect } from 'react';

export default function useCountUp(endVal = 20, duration = 2000, delay = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let timerId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const t = Math.min(progress / duration, 1);
      
      // easeOutCubic: 1 - (1 - t)^3
      const easeOutCubic = 1 - Math.pow(1 - t, 3);
      const currentVal = Math.floor(easeOutCubic * endVal);
      
      setCount(currentVal);

      if (t < 1) {
        timerId = requestAnimationFrame(step);
      }
    };

    const delayTimeout = setTimeout(() => {
      timerId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      if (timerId) cancelAnimationFrame(timerId);
    };
  }, [endVal, duration, delay]);

  return count;
}
