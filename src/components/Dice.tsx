import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface DiceProps {
  value: number;
  isRolling: boolean;
  onRollComplete?: () => void;
}

export default function Dice({ value, isRolling, onRollComplete }: DiceProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRolling) {
      interval = setInterval(() => {
        setDisplayValue(Math.floor(Math.random() * 6) + 1);
      }, 100);
    } else {
      setDisplayValue(value);
      if (onRollComplete) onRollComplete();
    }
    return () => clearInterval(interval);
  }, [isRolling, value, onRollComplete]);

  const renderDots = (num: number) => {
    const dotPositions = {
      1: [4],
      2: [0, 8],
      3: [0, 4, 8],
      4: [0, 2, 6, 8],
      5: [0, 2, 4, 6, 8],
      6: [0, 2, 3, 5, 6, 8],
    };

    return Array.from({ length: 9 }).map((_, i) => (
      <div key={i} className="flex items-center justify-center w-full h-full">
        {dotPositions[num as keyof typeof dotPositions].includes(i) && (
          <div className="w-3 h-3 md:w-4 md:h-4 bg-indigo-900 rounded-full shadow-inner" />
        )}
      </div>
    ));
  };

  return (
    <div 
      className={cn(
        "w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-2xl border-4 border-indigo-100 grid grid-cols-3 p-3 md:p-4 transition-all duration-300",
        isRolling ? "animate-bounce rotate-12 scale-110" : "hover:scale-105"
      )}
    >
      {renderDots(displayValue)}
    </div>
  );
}