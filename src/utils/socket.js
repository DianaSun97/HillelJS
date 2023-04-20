import io from 'socket.io-client';

const initializeSocket = () => {
    const socket = io('http://localhost:3001');
    return socket;
};

export default initializeSocket;

