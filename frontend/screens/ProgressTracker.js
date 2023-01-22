import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/StyleSheet';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProgressTracker() {
    const [daysSober, setDaysSober] = useState(0);
    const [milestones, setMilestones] = useState([]);
    const [newMilestone, setNewMilestone] = useState('');

    const incrementDaysSober = () => {
        setDaysSober(daysSober + 1);
    }

    const resetDaysSober = () => {
        setDaysSober(0);
    }

    const addMilestone = () => {
        setMilestones([...milestones, newMilestone]);
        setNewMilestone('');
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Days sober: {daysSober}</Text>
            <View style={{ flexDirection: "row" }}>
                <Icon.Button
                    name="plus-circle"
                    color="black"
                    backgroundColor="white"
                    onPress={incrementDaysSober}
                />
                <Icon.Button
                    name="remove"
                    color="black"
                    backgroundColor="white"
                    onPress={resetDaysSober}
                />
            </View>
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
        </View>
    );
}