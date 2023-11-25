import React from 'react';
import { useState } from 'react';
import SocialButton from './SocialButton';
import Alert from './Alert';
import Formulario from './Formulario';

    function Registro() {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const emailExpresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const handleFormSubmit = (e, nombre, email, password, confirmPassword) => {
        e.preventDefault();

        if (!nombre || !email || !password || !confirmPassword) {
            setAlertMessage('Todos los campos son obligatorios');
            setAlertType('danger');
        }
        if(!emailExpresion.test(email)&&email!==""){
            setAlertMessage("Formato de correo incorrecto");
        }
        else if (password !== confirmPassword) {
            setAlertMessage('No coinciden las contraseñas');
            setAlertType('warning');
        }
        else {
            setAlertMessage('Registro realizado con exito');
            setAlertType('success');
        }
    };

    return (
        <section className="container">
            <h1 className="text-center">Crea tu cuenta</h1>
            <article className="text-center mb-3">
                <SocialButton icon="fa-facebook" />
                <SocialButton icon="fa-github" />
                <SocialButton icon="fa-linkedin" />
            </article>
            <p className="text-center"> Regístrate con tu email</p>
            <Formulario onSubmit={handleFormSubmit} />
            <Alert message={alertMessage} type={alertType} />
        </section>
    );

}

export default Registro;

