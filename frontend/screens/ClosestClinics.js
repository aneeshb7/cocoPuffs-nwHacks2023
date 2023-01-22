import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Button, FlatList, View, Text} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { List } from 'react-native-paper';
import styles from '../styles/StyleSheet';
import controller from '../controller.js';
import * as Location from 'expo-location';

export default function ClosestClinics() {

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
    <View style={{ borderTopWidth: 0, borderBottomWidth: 0, flex: 1 }}>
      <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 60}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={styles.title}> Clinics Near Me </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      <View style={{flex: 1}}>
        <FlatList     
          data={locations}          
          renderItem={function({ item }) { 
            return ( 
              <List.Item              
                title={item.name}  
                description={item.address}
                right={() => (<Text style={styles.distance}>{`${Math.round(item.distance)} km`}</Text>)}
              />          
          )}}                        
        />
      </View>
    </View>
  )
};
