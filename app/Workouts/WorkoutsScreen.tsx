import { Link, Stack } from 'expo-router';
import type React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

// TODO, this is temporary to work on the UI, however the workout data & list should be from an external file!
const workoutsData = [
  { week: 1, workout: 1, done: false, id: '1-1' },
  { week: 1, workout: 2, done: true, id: 'Bad ID' },
];

const WorkoutsScreen: React.FC = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Select workout!',
        }}
      />
      <View className="flex-1 bg-white p-4">
        <Text className="mb-6 text-3xl font-bold">Workout List</Text>
        <FlatList
          data={workoutsData}
          keyExtractor={(item) => `week-${item.week}-workout-${item.workout}`}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: '/Workouts/RunWorkoutScreen',
                params: { id: item.id },
              }}
              asChild
            >
              <TouchableOpacity className="mb-4 flex-row items-center justify-between rounded-lg bg-gray-200 p-4">
                <Text className="text-2xl">
                  Week {item.week} - Workout {item.workout}
                </Text>
                <View
                  className={
                    item.done
                      ? 'h-8 w-8 rounded-full bg-green-500'
                      : 'h-8 w-8 rounded-full bg-red-500'
                  }
                />
              </TouchableOpacity>
            </Link>
          )}
        />
      </View>
    </>
  );
};

export default WorkoutsScreen;

// TODOs:
// design a better done/undone workout
// progress bar?
