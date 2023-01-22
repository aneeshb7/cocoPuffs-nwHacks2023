import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ProgressTracker() {
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
        <View>
            <Text>Days sober: {daysSober}</Text>
            <Button
                title="Increment days sober"
                onPress={incrementDaysSober}
            />
            <Text>Milestones:</Text>
            {milestones.map((milestone) => (
                <Text key={milestone}>- {milestone}</Text>
            ))}
            <TextInput
                value={newMilestone}
                onChangeText={(text) => setNewMilestone(text)}
                placeholder="Enter new milestone"
            />
            <Button
                title="Add milestone"
                onPress={addMilestone}
            />
            <Button
                title='Chat'
                onPress={() => navigation.navigate('ChatScreen')}
            />
            <Button
                title='Closest Clinics'
                onPress={() => navigation.navigate('ClosestClinics')}
            />
        </View>
    );
}