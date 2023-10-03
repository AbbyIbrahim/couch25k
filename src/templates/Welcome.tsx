import { Link } from 'expo-router';
import type React from 'react';
import { Button, Text, View } from 'react-native';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  return (
    <View className="h-full items-center justify-center bg-gray-100">
      <Text className="mb-4 text-2xl font-bold">Welcome to Couch to 5K!</Text>
      <Text className="mb-8 text-center">
        This app will guide you on your journey from the couch to running 5
        kilometers.
      </Text>
      <Link href="/Workouts/WorkoutsScreen" asChild>
        <Button title="Get Started" />
      </Link>
    </View>
  );
};

export default WelcomeScreen;
