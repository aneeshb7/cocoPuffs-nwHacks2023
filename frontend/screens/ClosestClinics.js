import React, { useEffect, useState } from 'react';
import {FlatList, Text, View, Button} from 'react-native';
import styles from '../styles/StyleSheet';
import controller from '../controller.js';


export default function ClosestClinics() {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const locations = await controller.getAllLocations();
      setLocations(locations);
    }
    fetchData();
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

