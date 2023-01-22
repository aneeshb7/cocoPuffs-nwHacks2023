import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Text, View, Button} from 'react-native';
import styles from '../styles/StyleSheet';
import controller from '../controller.js';
import * as Location from 'expo-location';

export default function ClosestClinics({navigation}) {

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

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={locations}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
      <Button
        title='Chat'
        onPress={() => navigation.navigate('ChatScreen')}
      />
      <Button
        title='Progress Tracker'
        onPress={() => navigation.navigate('ProgressTracker')}
      />
    </View>
  )
};

