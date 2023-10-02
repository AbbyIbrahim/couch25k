import type React from 'react';
import type { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { Button, Text, View } from 'react-native';

interface WelcomeScreenProps {
  navigation?: {
    navigate: (screen: string) => void;
  };
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View className="h-full items-center justify-center bg-gray-100">
      <Text className="mb-4 text-2xl font-bold">Welcome to Couch to 5K!</Text>
      <Text className="mb-8 text-center">
        This app will guide you on your journey from the couch to running 5
        kilometers.
      </Text>
      <Button
        title="Get Started"
        onPress={(ev: NativeSyntheticEvent<NativeTouchEvent>) =>
          navigation?.navigate('Dashboard')
        }
      />
    </View>
  );
};

export default WelcomeScreen;
