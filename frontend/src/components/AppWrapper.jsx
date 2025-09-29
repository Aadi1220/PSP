// components/AppWrapper.jsx
import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';

const AppWrapper = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const SPLASH_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds

  useEffect(() => {
    checkSplashScreenStatus();
  }, []);

  const checkSplashScreenStatus = () => {
    const lastSplashTime = localStorage.getItem('lastSplashTime');
    const currentTime = new Date().getTime();

    if (lastSplashTime) {
      const timeDifference = currentTime - parseInt(lastSplashTime);
      
      if (timeDifference < SPLASH_TIMEOUT) {
        // Less than 30 minutes, skip splash screen
        setShowSplash(false);
        setIsInitialLoad(false);
      } else {
        // More than 30 minutes, show splash screen
        setShowSplash(true);
        setIsInitialLoad(true);
      }
    } else {
      // First time visit, show splash screen
      setShowSplash(true);
      setIsInitialLoad(true);
    }
  };

  const handleSplashComplete = () => {
    // Store current time in localStorage
    const currentTime = new Date().getTime();
    localStorage.setItem('lastSplashTime', currentTime.toString());
    
    setShowSplash(false);
    setIsInitialLoad(false);
  };

  const resetSplashTimer = () => {
    // Call this function if you want to manually reset the timer
    localStorage.removeItem('lastSplashTime');
    setShowSplash(true);
    setIsInitialLoad(true);
  };

  if (showSplash && isInitialLoad) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return children;
};

export default AppWrapper;
