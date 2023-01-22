import React, { useEffect, useState } from 'react';
import {FlatList, Text, View, Button} from 'react-native';
import styles from '../styles/StyleSheet';
import controller from '../controller.js';
import * as Location from 'expo-location';

export default function ClosestClinics() {

  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const locations = await controller.getAllLocations();
      setLocations(locations);
    }

    async function getUserLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(JSON.stringify(location));
    }

    fetchData();
    getUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
      <Text style={styles.paragraph}>{location}</Text>
      <Button
        title='Chat'
        onPress={() => navigation.navigate('ChatScreen')}
      />
    </View>
  )
};

