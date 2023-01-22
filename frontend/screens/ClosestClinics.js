import React, { useEffect, useState } from 'react';
import {FlatList, Text, View, Button} from 'react-native';
import styles from '../styles/StyleSheet';
import controller from '../controller.js';
import Geolocation from 'react-native-location';

const getGPSLocation = async () => {
  Geolocation.configure({
         distanceFilter: 5.0,
         desiredAccuracy: {
                ios: 'best',
                android: 'balancedPowerAccuracy',
         },
  });
  //trycatch block to catch any async errors
  try {
    //check for permissions
    const checkPerm = await Geolocation.checkPermission({
        ios: 'whenInUse', 
        android: {
              detail: 'fine', 
        },
    });
    //If not permission, ask for one
    if (!checkPerm) {
      const permGranted = await Geolocation.requestPermission({
            ios: 'whenInUse',
            android: {
                detail: 'fine',
                rationale: {
                    title: 'We need to access your location',
                    message: 'We use your location to show where you are on the map',
                    buttonPositive: 'OK',
                    buttonNegative: 'Cancel',
                },
              },
          });
      if (!permGranted) {
          console.log('Permission not granted');
          throw Error('Permission not granted﻿');
      }
    }
    //Get the location information only with required permissions
    const position = await Geolocation.getLatestLocation({timeout: 70000});
    alert(JSON.stringify(position));
  } catch (error) {
    console.log('ERROR', error);
  }
};


export default function ClosestClinics() {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const locations = await controller.getAllLocations();
      setLocations(locations);
    }
    fetchData();
    getGPSLocation();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
      <Button
        title='Chat'
        onPress={() => navigation.navigate('ChatScreen')}
      />
    </View>
  )
};

