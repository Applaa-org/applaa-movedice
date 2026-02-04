import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Info, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About MoveDice</h1>
          <p className="text-lg text-gray-600">Making fitness fun through the power of randomness.</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="text-indigo-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              MoveDice was created to break the monotony of traditional workouts. By introducing an element of chance, we turn exercise into a playful game that keeps you engaged and moving.
            </p>
          </section>

          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <ShieldCheck className="text-indigo-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-gray-800">Privacy First</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We believe your fitness journey is yours alone. MoveDice does not track your movements, store your data, or require any registration. It's just you, the dice, and the movement.
            </p>
          </section>

          <section className="bg-indigo-900 p-8 rounded-3xl shadow-xl text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Info className="text-indigo-300 w-6 h-6" />
              <h2 className="text-2xl font-bold">Disclaimer</h2>
            </div>
            <p className="text-indigo-100 leading-relaxed opacity-90">
              MoveDice is for educational and entertainment purposes only. Please consult with a healthcare professional before starting any new exercise program. Listen to your body and stop if you feel pain.
            </p>
          </section>
        </div>
      </main>
      <MadeWithApplaa />
    </div>
  );
}