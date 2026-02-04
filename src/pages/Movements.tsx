import Header from '@/components/Header';
import { movements } from '@/data/movements';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Movements() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Movement Library</h1>
          <p className="text-lg text-gray-600">Explore all the exercises you might roll.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {movements.map((movement) => (
            <Card key={movement.id} className="overflow-hidden hover:shadow-lg transition-shadow border-none bg-white/80 backdrop-blur-sm">
              <div className={`h-2 ${movement.color}`} />
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{movement.icon}</div>
                <Badge variant="outline" className="mb-2 text-[10px] uppercase font-bold">
                  {movement.category}
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{movement.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {movement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <MadeWithApplaa />
    </div>
  );
}