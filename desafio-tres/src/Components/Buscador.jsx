import React from 'react';
import { useState } from 'react';

const Buscador = ({ filtrarColaboradores }) => {
    const [busqueda, setBusqueda] = useState('');

    const handleChange = (e) =>{
        setBusqueda(e.target.value);
        filtrarColaboradores(e.target.value);
    };

    return(
        <section>
            <h2>Buscar un colaborador</h2>
            <input type="text" placeholder="Buscar" value={busqueda} onChange={handleChange} className="form-control"/>
        </section>
    );
};

export default Buscador;