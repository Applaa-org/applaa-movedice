import { Link } from "@tanstack/react-router";
import { Activity, Menu, User, Settings, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            FlexFlow
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Dashboard</Link>
          <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</Link>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Workouts</Link>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Community</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-slate-500">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-500">
            <Settings className="w-5 h-5" />
          </Button>
          <div className="h-8 w-[1px] bg-slate-200 mx-1" />
          <Button variant="ghost" size="icon" className="rounded-full bg-slate-100">
            <User className="w-5 h-5 text-slate-600" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}