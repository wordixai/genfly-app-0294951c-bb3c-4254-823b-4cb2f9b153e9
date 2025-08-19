import React from 'react';

interface MacaronDecorationProps {
  src: string;
  alt: string;
  position: 'left' | 'right';
  className?: string;
}

const MacaronDecoration: React.FC<MacaronDecorationProps> = ({ 
  src, 
  alt, 
  position, 
  className = '' 
}) => {
  const positionClasses = position === 'left' 
    ? 'left-[-80px] top-[70px] md:left-[-168px] md:top-[60px] xl:left-[-200px] xl:top-[80px]'
    : 'right-[-60px] top-[200px] md:right-[-79px] md:top-[251px] xl:right-[-120px] xl:top-[300px]';

  const hoverEffect = position === 'left'
    ? 'hover:rotate-[10deg] hover:-translate-x-[10px]'
    : 'hover:rotate-[15deg] hover:-translate-y-[20px]';

  return (
    <div 
      className={`
        absolute z-[1] group cursor-pointer
        w-[200px] h-[200px] md:w-[330px] md:h-[330px] xl:w-[380px] xl:h-[380px]
        ${positionClasses}
        ${className}
      `}
      style={{ opacity: 1, transform: 'none' }}
    >
      <img 
        src={src}
        alt={alt}
        className={`
          w-full h-full object-contain pointer-events-auto
          transition-transform duration-300 ease-in-out
          ${hoverEffect}
        `}
      />
    </div>
  );
};

export default MacaronDecoration;