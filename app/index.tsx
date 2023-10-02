import { Stack } from 'expo-router';

import WelcomeScreen from '@/templates/Welcome';

const Home = () => (
  <>
    <Stack.Screen
      options={{
        title: 'Couch 2 5K!',
      }}
    />
    <WelcomeScreen />
  </>
);

export default Home;
