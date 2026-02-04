import { Movement } from '@/data/movements';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Timer, Repeat } from 'lucide-react';

interface MovementDisplayProps {
  movement: Movement | null;
  diceValue: number;
  isVisible: boolean;
}

export default function MovementDisplay({ movement, diceValue, isVisible }: MovementDisplayProps) {
  if (!movement) return null;

  const reps = diceValue * 5;
  const seconds = diceValue * 10;

  return (
    <div className={cn(
      "w-full max-w-md transition-all duration-500 transform",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
    )}>
      <Card className="overflow-hidden border-none shadow-2xl bg-white/90 backdrop-blur-md">
        <div className={cn("h-3", movement.color)} />
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-6 animate-pulse">{movement.icon}</div>
          <Badge variant="secondary" className="mb-4 uppercase tracking-widest text-[10px] font-bold">
            {movement.category}
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{movement.name}</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {movement.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
              <div className="flex items-center justify-center space-x-2 text-indigo-600 mb-1">
                <Repeat className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Reps</span>
              </div>
              <div className="text-2xl font-black text-indigo-900">{reps}</div>
            </div>
            <div className="bg-violet-50 p-4 rounded-2xl border border-violet-100">
              <div className="flex items-center justify-center space-x-2 text-violet-600 mb-1">
                <Timer className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Seconds</span>
              </div>
              <div className="text-2xl font-black text-violet-900">{seconds}s</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { cn } from '@/lib/utils';