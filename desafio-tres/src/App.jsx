import React from 'react';
import { useState } from 'react';
import Listado from './Components/Listado';
import Buscador from './Components/Buscador';
import Alert from './Components/Alert';
import Formulario from './Components/Formulario';
import { BaseDeColaboradores } from './Components/BaseDeColaboradores';


const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseDeColaboradores);
  const [alerta, setAlerta] =useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores,{ id:(colaboradores.length +1).toString(), ...nuevoColaborador }]);
  };

  const eliminarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  };

  const buscarColaborador = (busqueda) => {
    const resultadoDeBusqueda = BaseDeColaboradores.filter(colaborador =>{
      return (
        colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.telefono.toLowerCase().includes(busqueda.toLowerCase())  ||
        colaborador.edad.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase())
      );
    });
    setColaboradores(resultadoDeBusqueda);
  };

  const mostrarAlerta = (tipo, mensaje) => {
    setAlerta({tipo, mensaje});
    setTimeOut(() => {
      setAlerta(null);
      }, 3000);
    };

    return (
      <section className="container mt-5">
        {alerta && <Alert tipo={alerta.tipo} mensaje={alerta.mensaje} />}
        <Buscador buscarColaborador={buscarColaborador} />
        <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
        <Formulario agregarColaborador={agregarColaborador} mostrarAlerta={mostrarAlerta} />
      </section>
    );
  };

  export default App;
