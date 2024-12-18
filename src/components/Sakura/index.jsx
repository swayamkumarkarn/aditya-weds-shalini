import React, { useEffect } from "react";
import "./style.css";

const SakuraFalling = () => {
  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement("div");
      petal.classList.add("sakura-petal");

      // Randomize position, speed, and delay
      petal.style.setProperty("--left-position", Math.random());
      petal.style.setProperty("--fall-speed", `${Math.random() * 3}s`);
      petal.style.setProperty("--delay", `${Math.random() * 5}s`);

      document.body.appendChild(petal);

      // Remove the petal after animation ends
      petal.addEventListener("animationend", () => {
        petal.remove();
      });
    };

    // Generate petals at regular intervals
    const interval = setInterval(createPetal, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return null; // This component does not render any JSX
};

export default SakuraFalling;
