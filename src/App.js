import React, { useState, useEffect } from 'react';
import LoadingBar from './LoadingBar';
import MainPage from './MainPage.js';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 예를 들어 5초 후에 로딩이 완료되었다고 가정
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div>
            {isLoading ? <LoadingBar /> : <MainPage />}
            {/* Other components and content */}
        </div>
    );
};

export default App;
