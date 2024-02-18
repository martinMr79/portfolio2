import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollHandler = ({ routeOrder }) => {
  const navigate = useNavigate();
  const [wheelAccumulation, setWheelAccumulation] = useState(0);
  const [lastNavigationTime, setLastNavigationTime] = useState(0);
  const wheelThreshold = 200; // Threshold for triggering navigation
  const debounceTime = 500; // Time to reset the accumulation
  const navigationCooldown = 1000; // Time before another navigation can occur

  const handleWheel = useCallback((event) => {
    const now = Date.now();
    if (now - lastNavigationTime < navigationCooldown) {
      // Prevent navigation if we're within the cooldown period
      return;
    }

    const isPageTallerThanViewport = document.body.offsetHeight > window.innerHeight;
    const isAtTop = window.pageYOffset === 0;
    const isAtBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

    // For shorter pages, always accumulate
    if (!isPageTallerThanViewport) {
      setWheelAccumulation(current => current + event.deltaY);
      return;
    }

    // For taller pages, check position
    if ((event.deltaY < 0 && isAtTop) || (event.deltaY > 0 && isAtBottom)) {
      // Don't accumulate if at the extreme ends of the page
      return;
    }

    setWheelAccumulation(current => current + event.deltaY);
  }, [lastNavigationTime]);

  const navigateOnThreshold = useCallback(() => {
    const currentIndex = routeOrder.indexOf(window.location.pathname);
    if (Math.abs(wheelAccumulation) > wheelThreshold) {
      if (wheelAccumulation > 0 && currentIndex < routeOrder.length - 1) {
        navigate(routeOrder[currentIndex + 1]);
      } else if (wheelAccumulation < 0 && currentIndex > 0) {
        navigate(routeOrder[currentIndex - 1]);
      }
      setLastNavigationTime(Date.now());
    }
    setWheelAccumulation(0); 
  }, [wheelAccumulation, navigate, routeOrder]);

  useEffect(() => {
    const debounceTimeout = setTimeout(navigateOnThreshold, debounceTime);
    return () => clearTimeout(debounceTimeout);
  }, [navigateOnThreshold]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  return null;
};

export default ScrollHandler;










