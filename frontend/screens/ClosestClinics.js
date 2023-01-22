import React from 'react';
import {ActivityIndicator, Button, FlatList, View, Text} from 'react-native';
import { List } from 'react-native-paper';
import styles from '../styles/StyleSheet';

export default function ClosestClinics(props) {

  return props.isLoading && props.locations.length == 0 ? (
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
          data={props.locations}          
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
