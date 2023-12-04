import React from 'react';

const Listado = ({ colaboradores, eliminarColaborador}) => {
    return (
        <section>
            <h2>Listado de Colaboradores</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                    </tr>
                </thead>
                <tbody>
                    {colaboradores.map((colaborador) =>(
                        <tr key={colaborador.id}>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.telefono}</td>
                            <td>{colaborador.cargo}</td>
                            <td>
                                <button onClick={() => eliminarColaborador(colaborador.id)} className="btn btn-danger">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Listado;