import React from 'react';

const Alert = ({ mensaje, tipo }) => {
    return (
        <article className={`alert alert-${tipo}`} role="alert">
            {mensaje}
        </article>
    );
};

export default Alert;