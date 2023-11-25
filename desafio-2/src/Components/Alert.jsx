import React from 'react';

const Alert = ({ message, type}) => {
    if (!message) {
        return null;
    }

    return (
        <section className={`alert alert-type-${type}`} role="alert">
            {message}
        </section>
    );
};

export default Alert;