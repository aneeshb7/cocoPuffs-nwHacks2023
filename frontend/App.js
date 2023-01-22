import React, { useEffect, useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import ClosestClinics from './screens/ClosestClinics.js';
import ChatScreen from './screens/ChatScreen.js';
import ProgressTracker from './screens/ProgressTracker.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import controller from './controller.js';
import * as Location from 'expo-location';

export default function App() {

  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData(coordinates) {
      const locations = await controller.getLocationWithDistance(coordinates);
      setLocations(locations);
    }

    async function getUserLocation() {
      if(!location) setIsLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(JSON.stringify(userLocation));
      fetchData({latitude: userLocation.coords.latitude, longitude: userLocation.coords.longitude});
      setIsLoading(false);
    }

    getUserLocation();
  }, []);

  const ClosestClinicsRoute = () => <ClosestClinics locations={locations} isLoading={isLoading} />;
  const ChatScreenRoute = () => <ChatScreen />;
  const ProgressTrackerRoute = () => <ProgressTracker />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'clinics', title: 'Clinics', focusedIcon: 'medical-bag'},
    { key: 'milestones', title: 'Progress Tracker', focusedIcon: 'progress-check' },
    { key: 'chat', title: 'Chat Bot', focusedIcon: 'robot-happy-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    clinics: ClosestClinicsRoute,
    milestones: ProgressTrackerRoute,
    chat: ChatScreenRoute,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};
