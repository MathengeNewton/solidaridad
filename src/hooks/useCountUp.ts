import { useEffect, useState } from 'react';

const useCountUp = (end: string, duration: number = 2000): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endCount = parseInt(end, 10);
    if (start === endCount) return;

    const totalTicks = Math.ceil(duration / 1000 * 60); // 60 frames per second
    let tick = 0;

    const timer = setInterval(() => {
      tick++;
      const progress = tick / totalTicks;
      const currentCount = Math.round(endCount * progress);

      if (tick < totalTicks) {
        setCount(currentCount);
      } else {
        setCount(endCount);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default useCountUp;
