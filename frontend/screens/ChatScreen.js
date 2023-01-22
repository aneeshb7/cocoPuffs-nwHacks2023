import React from 'react';
import { Button, View, Text, TextInput, Alert } from 'react-native';
import styles from '../styles/StyleSheet';


export default function Chatscreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Chat Screen</Text>
            <Button
                title='Closest Clinics'
                onPress={() => navigation.navigate('ClosestClinics')}
            />
        </View>
    )
}


