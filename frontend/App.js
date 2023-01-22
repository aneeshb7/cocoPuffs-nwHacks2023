import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import ClosestClinics from './screens/ClosestClinics.js';
import ChatScreen from './screens/ChatScreen.js';
import ProgressTracker from './screens/ProgressTracker.js';
import Navigator from './stack/Navigator.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const ClosestClinicsRoute = () => <ClosestClinics/>;
  const ProgressTrackerRoute = () => <ChatScreen/>;
  const ChatScreenRout = () => <ProgressTracker/>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'clincs', title: 'Clincs', focusedIcon: 'medical-bag'},
    { key: 'milestones', title: 'Milestones', focusedIcon: 'progress-check' },
    { key: 'chat', title: 'Chat Bot', focusedIcon: 'robot-happy-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    clincs: ClosestClinicsRoute,
    milestones: ProgressTrackerRoute,
    chat: ChatScreenRout,
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
