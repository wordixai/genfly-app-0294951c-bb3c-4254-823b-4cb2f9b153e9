import React from 'react';

interface PlaybookCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const PlaybookCard: React.FC<PlaybookCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  href 
}) => {
  return (
    <div>
      <a className="block" href={href}>
        <div className="playbook-card group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] h-[356px]">
          <div className="w-full flex-1 relative overflow-hidden flex flex-col">
            <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                  {title}
                </h3>
              </div>
              <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                {description}
              </p>
            </div>
            <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
              <div 
                className="playbook-screenshot top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 bg-origin-border bg-cover bg-center"
                style={{ backgroundImage: `url("${imageUrl}")` }}
                role="img"
                aria-label={`${title} screenshot 1`}
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PlaybookCard;