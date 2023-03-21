import React, { useState, useEffect } from "react";
import "./loadingbar.css"; // 로딩바 CSS 파일 import

const LoadingBar = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadingDuration = 3000; // 로딩 시간 설정 (현재 3000ms로 설정되어 있음)
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
        <div className={`loading${isLoading ? "" : " loaded"}`}>
            <div className="loading-container">
                <div
                    className={`counter${isLoading ? "" : " loaded"}`}
                    style={{ transform: `translate(0, ${isLoading ? "0%" : "10%"})` }}
                >
                    {progress}%
                </div>
                <div
                    className={`line${isLoading ? "" : " loaded"}`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default LoadingBar;
