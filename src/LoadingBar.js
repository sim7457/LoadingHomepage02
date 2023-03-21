import React, { useState, useEffect } from 'react';
import './LoadingBar.css';

const LoadingBar = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadingDuration = 3000;
        const progressInterval = loadingDuration / 100;

        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    setIsLoading(false);
                    clearInterval(timer);
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
