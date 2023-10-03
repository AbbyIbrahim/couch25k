import { useLocalSearchParams, useRouter } from 'expo-router';
import type React from 'react';
import { useState } from 'react';
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { workouts } from '../../src/workoutData/workoutData';

const RunWorkoutScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const id: string = params.id as string;

  // TODO add a sanity check, if an ID does not exist, then go back to the workouts screen page
  const workout = workouts[id];
  if (!workout) {
    router.replace('/Workouts/WorkoutsScreen');
  }
  const [active, setActive] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleStart = () => {
    setActive(true);
    // Start the timer logic...
  };

  const handlePause = () => {
    setActive(false);
    // Pause the timer logic...
  };

  const handleStop = () => {
    setActive(false);
    setCurrentStage(0);
    // Stop the timer and reset logic...
  };

  // Dummy function to handle timer swipe
  const handleTimerSwipe = (direction: 'left' | 'right') => {
    // Logic to switch between overall and stage timer
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="mb-6 text-3xl font-bold">
        Week {workout.week} - Workout {workout.workout}
      </Text>

      {showStats ? (
        <View className="flex-1 items-center justify-center">
          {/* This is where the stats (like map, speed, etc.) will go. */}
          <Text className="mb-4 text-xl">Stats coming soon!</Text>
          <Button
            title="Go back to Timer"
            onPress={() => setShowStats(false)}
          />
        </View>
      ) : (
        <View className="flex-1">
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            {/* This is the button to show stages */}
            <Text className="text-lg">☰ Show Stages</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent
            visible={isModalVisible}
            onRequestClose={() => {
              setModalVisible(!isModalVisible);
            }}
          >
            <View className="flex-1 items-center justify-center">
              <View className="w-2/3 rounded bg-white p-4 shadow-lg">
                {workout.stages.map((stage, index) => (
                  <Text key={index} className="mb-2">
                    {stage.type.toUpperCase()}: {stage.duration} seconds
                  </Text>
                ))}
                <Button title="Close" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </Modal>

          <PanGestureHandler
            onGestureEvent={(event) => {
              if (event.nativeEvent.velocityX > 0) {
                handleTimerSwipe('right');
              } else {
                handleTimerSwipe('left');
              }
            }}
          >
            <View className="h-16 w-32 flex-row items-center justify-center rounded bg-gray-200">
              <Text className="text-2xl">00:00</Text>
            </View>
          </PanGestureHandler>

          <View className="mt-6 flex-row justify-center">
            {!active ? (
              <Button title="Start" onPress={handleStart} />
            ) : (
              <>
                <Button title="Pause" onPress={handlePause} />
                <Button title="Stop" onPress={handleStop} />
              </>
            )}
          </View>

          <TouchableOpacity
            className="mt-6 rounded-lg bg-gray-200 p-4"
            onPress={() => setShowStats(true)}
          >
            <Text className="text-center text-xl">Show Stats</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default RunWorkoutScreen;
