"use client";

import { useEffect } from "react";

export default function LoaderExperiment() {
  useEffect(() => {
    function startLoader() {
      // Check if document is defined (client-side rendering)
      if (typeof document !== "undefined") {
        let counterElement = document.querySelector(".counter");
        let currentValue = 0;

        function updateCounter() {
          if (currentValue === 100) {
            return;
          }

          currentValue += Math.floor(Math.random() * 10) + 1;

          if (currentValue > 100) {
            currentValue = 100;
          }

          counterElement.textContent = currentValue;

          let delay = Math.floor(Math.random() * 200) + 50;
          setTimeout(updateCounter, delay);
        }

        updateCounter();
      }
    }

    startLoader();
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return (
    <>
      <h1 id="counter" className="counter">
        0
      </h1>
      <div className="overlay"></div>
    </>
  );
}
