import { Link } from '@tanstack/react-router';
import { Dumbbell, Dice5 } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Dice5 className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            MoveDice
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
            About
          </Link>
          <Link to="/movements" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
            Movements
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 px-3 py-1.5 bg-indigo-50 rounded-full border border-indigo-100">
            <Dumbbell className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Fitness Play</span>
          </div>
        </div>
      </div>
    </header>
  );
}