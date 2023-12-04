import React from 'react';
import { useState } from 'react';

const Formulario = ({ agregarColaborador, mostrarAlerta }) => {
    const [nuevoColaborador, setNuevoColaborador] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        edad: '',
        cargo: ''
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setNuevoColaborador((prevState) => ({
            ...prevState, [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(nuevoColaborador).every((value) => value !== '')){
            agregarColaborador(nuevoColaborador);
            mostrarAlerta('success', 'Agregado exitosamente');
            setNuevoColaborador({
                nombre: '',
                correo: '',
                telefono: '',
                edad: '',
                cargo: ''
            });
        } else{
            mostrarAlerta('danger', 'Completa todos los campos');
        }
    };

    return (
        <section>
            <h2>Agregar un colaborador</h2>
            <form onSubmit={handleSubmit}>
            <article className="mb-3">
                <input type="text" name="nombre" placeholder="Nombre del colaborador" value={nuevoColaborador.nombre} onChange={handleChange} className="form-control" />
            </article>
            <article className="mb-3">
                <input type="email" name="correo" placeholder="Correo electronico del colaborador" value={nuevoColaborador.correo} onChange={handleChange} className="form-control"/>
            </article>
            <article className="mb-3">
                <input type="text" name="edad" placeholder="Edad del colaborador" value={nuevoColaborador.edad} onChange={handleChange} className="form-control"/>
            </article>
            <article className="mb-3">
                <input type="text" name="cargo" placeholder="Cargo del colaborador" value={nuevoColaborador.cargo} onChange={handleChange} className="form-control"/>
            </article>
            <article className="mb-3">
                <input type="text" name="telefono" placeholder="Telefono del colaborador" value={nuevoColaborador.telefono} onChange={handleChange} className="form-control"/>
            </article>
            <button type="submit" className="btn btn-primary">
                Agregar Colaborador
            </button>
            </form>
            {mostrarAlerta && (
                <section className={`alert alert-${mostrarAlerta.tipo} mt-3`} role="alert"></section>
            )}
        </section>
    );
};

export default Formulario;