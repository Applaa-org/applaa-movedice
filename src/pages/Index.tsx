import React, { useState } from 'react';
import Header from '@/components/Header';
import Dice from '@/components/Dice';
import MovementDisplay from '@/components/MovementDisplay';
import { movements, Movement } from '@/data/movements';
import { Button } from '@/components/ui/button';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Sparkles, RefreshCw } from 'lucide-react';

const Index = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [currentMovement, setCurrentMovement] = useState<Movement | null>(null);
  const [showResult, setShowResult] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setShowResult(false);
    
    // Simulate rolling time
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      const randomMovement = movements[Math.floor(Math.random() * movements.length)];
      
      setDiceValue(newValue);
      setCurrentMovement(randomMovement);
      setIsRolling(false);
      setShowResult(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="text-center mb-12 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Ready to move?</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Roll the Dice, <br />
            <span className="text-indigo-600">Start the Move.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Let randomness guide your fitness. Roll the dice to discover your next movement and intensity.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-12 w-full">
          <div className="relative">
            <Dice 
              value={diceValue} 
              isRolling={isRolling} 
            />
            {!isRolling && !showResult && (
              <div className="absolute -top-4 -right-4 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
                ROLL ME!
              </div>
            )}
          </div>

          <Button 
            onClick={rollDice} 
            disabled={isRolling}
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-8 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50"
          >
            {isRolling ? (
              <span className="flex items-center space-x-2">
                <RefreshCw className="w-6 h-6 animate-spin" />
                <span>Rolling...</span>
              </span>
            ) : (
              "Roll Dice"
            )}
          </Button>

          <MovementDisplay 
            movement={currentMovement} 
            diceValue={diceValue} 
            isVisible={showResult} 
          />
        </div>

        <div className="mt-24 text-center max-w-md mx-auto">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">
            Educational Purpose Only
          </p>
          <p className="text-[10px] text-gray-400 leading-relaxed">
            MoveDice is designed to make movement playful. Always listen to your body and consult a professional before starting new physical activities.
          </p>
        </div>
      </main>

      <MadeWithApplaa />
    </div>
  );
};

export default Index;