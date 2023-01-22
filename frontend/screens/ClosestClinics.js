import React from 'react';
import {FlatList, StyleSheet, Text, View, List, Button} from 'react-native';
import styles from '../styles/StyleSheet';


export default function ClosestClinics({ navigation }) {
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

    <Button
        title='Chat'
        onPress={() => navigation.navigate('ChatScreen')}
    />
    </View>
  )
};

