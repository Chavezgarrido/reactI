import React from 'react';

const Buscador = ({ onChange }) => {
    return (
        <section className="mb-2">
            <input type="text" placeholder="ingresa una magnitud" onChange={ onChange } />
        </section>
    )
}

export default Buscador;