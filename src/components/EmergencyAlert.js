import React, { useState, useEffect } from 'react';
import '../style/EmergencyAlert.css';

const EmergencyAlert = ({ message, onHide }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onHide();
            setShow(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [onHide]);

    return (
        <div className={`emergency-alert ${show ? 'show' : 'hide'}`}>
            <div className="emergency-alert-message">{message}</div>
        </div>
    );
};

export default EmergencyAlert;