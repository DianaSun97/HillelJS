import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';

const MessageList = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((message, index) => (
                <Message key={index} text={message} />
            ))}
        </div>
    );
};

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MessageList;