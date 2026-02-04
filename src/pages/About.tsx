import Header from "@/components/Header";
import { MadeWithApplaa } from "@/components/made-with-applaa";
import { Info, Shield, Zap, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Empowering Your Fitness Journey
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              FlexFlow is designed to help you track, analyze, and improve your physical performance with cutting-edge technology and intuitive design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Real-time Tracking</h3>
              <p className="text-slate-600">Monitor your movements and vitals with millisecond precision using our advanced sensor integration.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <Shield className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Privacy First</h3>
              <p className="text-slate-600">Your data is yours. We use end-to-end encryption to ensure your personal health information stays private.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <Users className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-slate-600">Join thousands of athletes sharing tips, routines, and motivation to reach their peak performance.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <Info className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Insights</h3>
              <p className="text-slate-600">Get personalized recommendations based on your unique movement patterns and fitness goals.</p>
            </div>
          </div>
        </div>
      </main>
      <MadeWithApplaa />
    </div>
  );
}