// TODO, this is temp for testing
export type Stage = {
  type: 'warmup' | 'run' | 'walk' | 'cooldown';
  duration: number; // Duration in seconds
};

export type Workout = {
  id: string;
  week: number;
  workout: number;
  type: 'run' | 'strength'; // You mentioned run and strength workouts
  stages: Stage[];
};

export const workouts: Record<string, Workout> = {
  '1-1': {
    id: '1-1',
    week: 1,
    workout: 1,
    type: 'run',
    stages: [
      { type: 'warmup', duration: 300 },
      { type: 'run', duration: 60 },
      { type: 'walk', duration: 90 },
      { type: 'run', duration: 60 },
      { type: 'cooldown', duration: 300 },
    ],
  },
  // ... Add other workouts
};
