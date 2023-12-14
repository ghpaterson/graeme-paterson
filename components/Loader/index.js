"use client";

import { useState, useEffect } from "react";

export default function Loader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      } else {
        // Clear the interval when the count reaches 100
        clearInterval(intervalId);
      }
    }, 20); // Increment every 50 milliseconds (5 seconds for 100 steps)

    return () => {
      // Cleanup the interval on component unmount
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-9xl font-neutron">{count}%</div>
    </div>
  );
}
