import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/StyleSheet';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProgressTracker({ daysSober, setDaysSober, milestones, setMilestones }) {
    const [inputText, setInputText] = useState('');

    const incrementDaysSober = () => {
        setDaysSober(daysSober + 1);
    }

    const resetDaysSober = () => {
        setDaysSober(0);
    }

    const addMilestone = () => {
        setMilestones([...milestones, inputText]);
        setInputText('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.milestonesTracker}>
                <Text style={{ fontSize: 30 }}>Milestones:</Text>
                {milestones.map((milestone) => (
                    <Text key={milestone}>{milestone}</Text>
                ))}
                <TextInput
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    placeholder="Enter a milestone here!"
                    style={[{ fontSize: 20 }, { fontSize: 20 }]}
                />
                <Icon.Button
                    name="plus-circle"
                    color="black"
                    backgroundColor="white"
                    onPress={addMilestone}
                    size={50}
                />
            </View>
            <View style={styles.soberDaysTracker}>
                <Text style={{ fontSize: 30 }}>Days sober: {daysSober}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Icon.Button
                        name="plus-circle"
                        color="black"
                        backgroundColor="white"
                        onPress={incrementDaysSober}
                        size={50}
                    />
                    <Icon.Button
                        name="remove"
                        color="black"
                        backgroundColor="white"
                        onPress={resetDaysSober}
                        size={50}
                    />
                </View>
            </View>
        </View>
    );
}