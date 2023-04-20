import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text }) => {
    return (
        <div className="message">
            <p>{text}</p>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Message;