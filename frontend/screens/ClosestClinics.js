import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import controller from '../controller.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

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
    </View>
  );
};
