export interface Movement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'Cardio' | 'Strength' | 'Flexibility' | 'Balance';
  color: string;
}

export const movements: Movement[] = [
  {
    id: '1',
    name: 'Jumping Jacks',
    description: 'Jump with legs wide and hands touching overhead, then return.',
    icon: '🏃‍♂️',
    category: 'Cardio',
    color: 'bg-blue-500',
  },
  {
    id: '2',
    name: 'Squat Pulses',
    description: 'Lower into a squat and pulse up and down slightly.',
    icon: '🏋️‍♀️',
    category: 'Strength',
    color: 'bg-orange-500',
  },
  {
    id: '3',
    name: 'High Knees',
    description: 'Run in place, bringing your knees as high as possible.',
    icon: '⚡',
    category: 'Cardio',
    color: 'bg-red-500',
  },
  {
    id: '4',
    name: 'Plank Hold',
    description: 'Hold a push-up position with a straight back and tight core.',
    icon: '🧘‍♂️',
    category: 'Strength',
    color: 'bg-purple-500',
  },
  {
    id: '5',
    name: 'Mountain Climbers',
    description: 'In a plank position, alternate bringing knees to chest.',
    icon: '🏔️',
    category: 'Cardio',
    color: 'bg-emerald-500',
  },
  {
    id: '6',
    name: 'Lunges',
    description: 'Step forward and lower your hips until both knees are bent at a 90-degree angle.',
    icon: '🚶‍♂️',
    category: 'Strength',
    color: 'bg-amber-500',
  },
  {
    id: '7',
    name: 'Arm Circles',
    description: 'Extend arms to the sides and make small circular motions.',
    icon: '🔄',
    category: 'Flexibility',
    color: 'bg-cyan-500',
  },
  {
    id: '8',
    name: 'Tree Pose',
    description: 'Stand on one leg with the other foot resting on your inner thigh.',
    icon: '🌳',
    category: 'Balance',
    color: 'bg-green-500',
  },
];