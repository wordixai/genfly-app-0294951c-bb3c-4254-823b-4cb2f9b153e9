import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface MacaronButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'disabled';
  className?: string;
}

const MacaronButton: React.FC<MacaronButtonProps> = ({ 
  children, 
  onClick, 
  disabled = false,
  variant = 'primary',
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (variant === 'disabled' || disabled) {
    return (
      <Button
        disabled
        className={`
          h-14 rounded-full px-10 text-base w-full
          bg-[#dddddb] text-white border-none shadow-none cursor-not-allowed
          pointer-events-none
          ${className}
        `}
      >
        {children}
      </Button>
    );
  }

  return (
    <div className="relative inline-flex items-center justify-center w-full">
      {/* Floating macaron decorations - only show on hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[50]">
        <img 
          src="https://macaron.im/assets/image/macaron-latte.png" 
          alt="" 
          className="absolute w-2.5 h-2.5 transition-all duration-300"
          style={{
            left: '50%',
            top: '50%',
            transformOrigin: 'center',
            transform: isHovered ? 
              'translateX(-20px) translateY(-20px) scale(1) rotate(30deg)' : 
              'translateX(0px) translateY(0px) scale(0.3) rotate(30deg)',
            opacity: isHovered ? 1 : 0
          }}
        />
        <img 
          src="https://macaron.im/assets/image/macaron-coldbrew.png" 
          alt="" 
          className="absolute w-2 h-2 transition-all duration-300"
          style={{
            left: '50%',
            top: '50%',
            transformOrigin: 'center',
            transform: isHovered ? 
              'translateX(20px) translateY(-15px) scale(1) rotate(45deg)' : 
              'translateX(0px) translateY(0px) scale(0.3) rotate(45deg)',
            opacity: isHovered ? 1 : 0
          }}
        />
        <img 
          src="https://macaron.im/assets/image/macaron-espresso.png" 
          alt="" 
          className="absolute w-2 h-2 transition-all duration-300"
          style={{
            left: '50%',
            top: '50%',
            transformOrigin: 'center',
            transform: isHovered ? 
              'translateX(-15px) translateY(20px) scale(1) rotate(150deg)' : 
              'translateX(0px) translateY(0px) scale(0.3) rotate(150deg)',
            opacity: isHovered ? 1 : 0
          }}
        />
        <img 
          src="https://macaron.im/assets/image/macaron-mocha.png" 
          alt="" 
          className="absolute w-2 h-2 transition-all duration-300"
          style={{
            left: '50%',
            top: '50%',
            transformOrigin: 'center',
            transform: isHovered ? 
              'translateX(25px) translateY(25px) scale(1) rotate(0deg)' : 
              'translateX(0px) translateY(0px) scale(0.3) rotate(0deg)',
            opacity: isHovered ? 1 : 0
          }}
        />
      </div>
      
      <Button
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          bg-macaron-gradient noise-background text-white 
          border border-white/70 
          shadow-[inset_0px_0px_17px_0px_rgba(255,255,255,0.25)]
          h-14 rounded-full px-10 text-base 
          relative overflow-visible z-20 w-full
          transition-all duration-300
          hover:shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,0.3)]
          ${className}
        `}
      >
        <span className="relative z-20">{children}</span>
      </Button>
    </div>
  );
};

export default MacaronButton;