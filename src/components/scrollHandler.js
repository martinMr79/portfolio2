import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollHandler = ({ routeOrder }) => {
  const navigate = useNavigate();
  const [wheelAccumulation, setWheelAccumulation] = useState(0);
  const wheelThreshold = 20; // Adjust this threshold based on testing
  const debounceTime = 500; // Time after which the accumulated value resets

  const handleWheel = useCallback((event) => {
    setWheelAccumulation(current => current + event.deltaY);
  }, []);

  const navigateOnThreshold = useCallback(() => {
    if (Math.abs(wheelAccumulation) > wheelThreshold) {
      const currentIndex = routeOrder.indexOf(window.location.pathname);
      if (wheelAccumulation > 0 && currentIndex < routeOrder.length - 1) {
        navigate(routeOrder[currentIndex + 1]);
      } else if (wheelAccumulation < 0 && currentIndex > 0) {
        navigate(routeOrder[currentIndex - 1]);
      }
    }
    setWheelAccumulation(0); // Reset accumulation
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







