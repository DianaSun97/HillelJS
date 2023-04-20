import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import MessageList from './messageList';
import EmergencyAlert from './EmergencyAlert';

const socket = io('http://localhost:3001');

function App() {
    const [messages, setMessages] = useState([]);
    const [emergencyMessage, setEmergencyMessage] = useState(null);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
        socket.on('ping', () => {
            console.log('Принят пинг');
        });
        socket.on('emergency', (message) => {
            setEmergencyMessage(message);
        });
    }, []);

    return (
        <div className="App">
            <h1>Сообщения:</h1>
            <MessageList messages={messages} />
            {emergencyMessage && <EmergencyAlert message={emergencyMessage} />}
        </div>
    );
}

export default App;