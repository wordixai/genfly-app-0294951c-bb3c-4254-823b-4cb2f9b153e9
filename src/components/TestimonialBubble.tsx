import React from 'react';

interface TestimonialBubbleProps {
  text: string;
  avatarSrc?: string;
  bgColor: string;
  textColor: string;
  position: 'left' | 'right';
  className?: string;
}

const TestimonialBubble: React.FC<TestimonialBubbleProps> = ({
  text,
  avatarSrc,
  bgColor,
  textColor,
  position,
  className = ''
}) => {
  const isLeft = position === 'left';
  
  return (
    <div 
      className={`
        relative max-w-[329px] md:max-w-[500px] lg:max-w-[621px] mb-8
        ${isLeft ? 'mr-auto ml-2' : 'ml-auto mr-2'}
        ${className}
      `}
      style={{ opacity: 1, transform: 'none' }}
    >
      <div 
        className={`
          px-5 py-4 rounded-2xl relative shadow-sm
          ${isLeft ? 'ml-14' : 'mr-14'}
        `}
        style={{ backgroundColor: bgColor }}
      >
        <p 
          className="text-base leading-relaxed font-normal"
          style={{ color: textColor }}
        >
          {text}
        </p>
        <div 
          className={`
            absolute -bottom-4 w-2 h-2 rounded-full
            ${isLeft ? 'left-0' : 'right-0'}
          `}
          style={{ backgroundColor: bgColor }}
        />
        <div 
          className={`
            absolute -bottom-1 w-3 h-3 rounded-full
            ${isLeft ? 'left-2' : 'right-2'}
          `}
          style={{ backgroundColor: bgColor }}
        />
      </div>
      {avatarSrc && (
        <div 
          className={`
            absolute -bottom-4 w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 
            rounded-full shadow-md border-2 border-white
            ${isLeft ? 'left-0' : 'right-0'}
          `}
        >
          <img 
            src={avatarSrc} 
            alt="" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default TestimonialBubble;