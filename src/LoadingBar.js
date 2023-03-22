import React, { useState, useEffect } from "react";
import "./LoadingBar.css";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingDuration = 5000;
    const progressInterval = loadingDuration / 200;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
          }, 800);
          return 100;
        }
        return prevProgress + 1;
      });
    }, progressInterval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    isLoading && (
      <div className="loading">
        <div className="lineContainer">
          <div className="counter">{progress}%</div>
          <div className="progressBar">
            <div className="line" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    )
  );
};

export default LoadingBar;
