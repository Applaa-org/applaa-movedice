import { TrendingUp, Clock, Flame, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const Stat = ({ label, value, icon, color }: StatProps) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
    <div className={cn("p-3 rounded-xl text-white shadow-md", color)}>
      {icon}
    </div>
    <div>
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</p>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </div>
  </div>
);

import { cn } from "@/lib/utils";

export default function MovementDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      <Stat 
        label="Daily Steps" 
        value="8,432" 
        icon={<TrendingUp className="w-5 h-5" />} 
        color="bg-blue-500"
      />
      <Stat 
        label="Active Time" 
        value="45m" 
        icon={<Clock className="w-5 h-5" />} 
        color="bg-emerald-500"
      />
      <Stat 
        label="Calories" 
        value="320 kcal" 
        icon={<Flame className="w-5 h-5" />} 
        color="bg-orange-500"
      />
      <Stat 
        label="Goal Progress" 
        value="84%" 
        icon={<Target className="w-5 h-5" />} 
        color="bg-purple-500"
      />
    </div>
  );
}