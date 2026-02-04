import Header from "@/components/Header";
import MovementDisplay from "@/components/MovementDisplay";
import { MadeWithApplaa } from "@/components/made-with-applaa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back, Alex!</h1>
            <p className="text-slate-500">Here's what's happening with your fitness today.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              Schedule
            </Button>
            <Button className="gap-2 shadow-lg shadow-blue-200">
              <Plus className="w-4 h-4" />
              New Workout
            </Button>
          </div>
        </div>

        <MovementDisplay />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <Card className="lg:col-span-2 rounded-3xl border-slate-100 shadow-sm overflow-hidden">
            <CardHeader className="border-b border-slate-50 bg-white/50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">Weekly Activity</CardTitle>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  View Report
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px] w-full bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">Activity Chart Visualization</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-slate-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Recent Workouts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Morning Yoga", time: "Today, 7:00 AM", duration: "30m", color: "bg-purple-100 text-purple-700" },
                { name: "HIIT Session", time: "Yesterday, 5:30 PM", duration: "45m", color: "bg-orange-100 text-orange-700" },
                { name: "Evening Run", time: "Oct 24, 6:15 PM", duration: "25m", color: "bg-blue-100 text-blue-700" },
              ].map((workout, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center font-bold", workout.color)}>
                      {workout.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{workout.name}</p>
                      <p className="text-xs text-slate-500">{workout.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-600">{workout.duration}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-900 transition-colors" />
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 rounded-xl">View All History</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <MadeWithApplaa />
    </div>
  );
};

export default Index;