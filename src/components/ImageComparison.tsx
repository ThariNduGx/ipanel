import { useState, useRef, MouseEvent, TouchEvent } from 'react';

export function ImageComparison({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX;
    const position = ((x - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[600px] overflow-hidden cursor-ew-resize select-none bg-brand-light group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      
      {/* Modern Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-brand-blue cursor-ew-resize shadow-[0_0_15px_rgba(0,71,255,0.3)]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white text-[10px] font-mono font-bold tracking-[0.2em] px-4 py-2 flex items-center gap-3 shadow-xl transition-transform duration-300 group-hover:scale-110">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M15 18l-6-6 6-6"/></svg>
          DRAG
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
    </div>
  );
}
