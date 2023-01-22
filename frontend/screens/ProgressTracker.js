import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/StyleSheet';

export default function ProgressTracker({ navigation }) {
    const [daysSober, setDaysSober] = useState(0);
    const [milestones, setMilestones] = useState([]);
    const [newMilestone, setNewMilestone] = useState('');

    const incrementDaysSober = () => {
        setDaysSober(daysSober + 1);
    }

    const addMilestone = () => {
        setMilestones([...milestones, newMilestone]);
        setNewMilestone('');
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Days sober: {daysSober}</Text>
            <Button
                title="Increase number of days sober!"
                onPress={incrementDaysSober}
            />
            <Text style={{ fontSize: 30 }}>Milestones:</Text>
            {milestones.map((milestone) => (
                <Text key={milestone}>{milestone}</Text>
            ))}
            <TextInput
                value={newMilestone}
                onChangeText={(text) => setNewMilestone(text)}
                placeholder="Type here to add a milestone"
                style={[{ fontSize: 20 }, { fontSize: 20 }]}
            />
            <Button
                title="Add milestone"
                onPress={addMilestone}

            />
            <View>
                <Button
                    title='Chat'
                    onPress={() => navigation.navigate('ChatScreen')}
                    height={100}
                />
                <Button
                    title='Closest Clinics'
                    onPress={() => navigation.navigate('ClosestClinics')}
                    height={110}
                />
            </View>
        </View>
    );
}