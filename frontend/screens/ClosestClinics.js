import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

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
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'clinic #1'},
          {key: 'clinic #2'},
          {key: 'clinic #3'},
          {key: 'clinic #4'},
          {key: 'clinic #5'},
          {key: 'clinic #6'},
          {key: 'clinic #7'},
          {key: 'clinic #8'},
          {key: 'clinic #9'},
          {key: 'clinic #10'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};
