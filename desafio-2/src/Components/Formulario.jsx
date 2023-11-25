import React from 'react';
import { useState } from 'react';

const Formulario = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return(
        <form onSubmit={(e) => onSubmit(e, nombre, email, password, confirmPassword)}>
            <article className="mb-3">
                <label className="form-label"></label>
                <input  placeholder="Nombre"  type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </article>

            <article className="mb-3">
                <label className="form-label"></label>
                <input placeholder="tuemail@ejemplo.com" type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </article>

            <article className="mb-3">
                <label className="form-label"></label>
                <input  placeholder="Contraseña" type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </article>

            <article className="mb-3">
                <label className="form-label"></label>
                <input placeholder="Confirma tu contraseña" type="text" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </article>

            <button type="submit" className="btn btn-success">Registrarse</button>

        </form> 
    );
};

export default Formulario;