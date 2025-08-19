import React, { useEffect, useState, useRef } from 'react';

interface StatsCounterProps {
  value: string;
  label: string;
  className?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, className = '' }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric part and suffix
    const numericMatch = value.match(/^(\d+)/);
    const suffix = value.replace(/^\d+/, '');
    
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(numericMatch[1]);
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let currentNumber = 0;
    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(currentNumber) + suffix);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div 
      ref={elementRef}
      className={`flex flex-col items-center justify-start gap-2.5 w-[370px] md:gap-0 ${className}`}
      style={{ opacity: 1, transform: 'none' }}
    >
      <div className="text-center">
        <div className="block md:hidden">
          <span 
            className="inline-block tabular-nums transition-all duration-300 cursor-pointer"
            style={{
              fontSize: '40px',
              fontWeight: 300,
              color: 'rgb(0, 0, 0)',
              fontFamily: 'Inter, sans-serif',
              opacity: 1,
              transform: 'none'
            }}
          >
            {displayValue}
          </span>
        </div>
        <div className="hidden md:block lg:hidden">
          <span 
            className="inline-block tabular-nums transition-all duration-300 cursor-pointer"
            style={{
              fontSize: '58px',
              fontWeight: 300,
              color: 'rgb(0, 0, 0)',
              fontFamily: 'Inter, sans-serif',
              opacity: 1,
              transform: 'none'
            }}
          >
            {displayValue}
          </span>
        </div>
        <div className="hidden lg:block">
          <span 
            className="inline-block tabular-nums transition-all duration-300 cursor-pointer"
            style={{
              fontSize: '72px',
              fontWeight: 300,
              color: 'rgb(0, 0, 0)',
              fontFamily: 'Inter, sans-serif',
              opacity: 1,
              transform: 'none'
            }}
          >
            {displayValue}
          </span>
        </div>
      </div>
      <p 
        className="text-center text-black/50 leading-relaxed text-sm md:text-lg"
        style={{ opacity: 1 }}
      >
        {label}
      </p>
    </div>
  );
};

export default StatsCounter;