import React from 'react';
import { Button, View, Text, TextInput, Alert } from 'react-native';
import styles from '../styles/StyleSheet';
import '../Styles/Chat.css';

export default function Chatscreen({ navigation }) {
    return (
        <View>
            <Button
                title="Closest Clinics"
                onPress={() => navigation.navigate('ClosestClinics')}
            />
            <Messages />
            <TextBox />
        </View>
    );
}

let messages = [
    { id: 1, username: 'bot', text: 'Hello, how may I help me?' },
    { id: 2, username: 'user', text: 'I need help!' },
];

let isBot = true;
let user = isBot ? 'bot' : 'user';

function Messages() {
    let allMessages = messages.map((message) => {
        let currentUserClass =
            message.username === 'bot' ? `message` : `message my-message`;

        return (
            <div key={message.id} className={currentUserClass}>
                <span className="message-user">{message.username}: </span>
                <span className="message-text">{message.text}</span>
            </div>
        );
    });

    return <>{allMessages}</>;
}

function TextBox() {
    return (
        <div className="page-control">
            <input type="text"></input>
            <button>Send</button>
        </div>
    );
}
