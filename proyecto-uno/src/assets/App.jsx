import './App.css'
import Footer from './Footer'
import Header from './Header'
import Card from './Cards'

function App() {
    return <>
        <Header titulo="Adopta un perrito"/>
        <section className='contenedorCards'>
            <Card urlImg="https://www.petdarling.com/wp-content/uploads/2014/08/raza-chihuahua.jpg" nombre='Taco' descripcion='. Taco es ideal para quien viva en un departamento pequeño y desee una mascota que alegre su hogar.' colorBadge='success' textBadge='Chihuahua'/>
            <Card urlImg='https://cdn.royalcanin-weshare-online.io/5_rnHWsBIYfdNSoCABpW/v1/bd124h-hub-american-akita-adult-black-and-white' nombre='Yoru' descripcion='Los Akita son el fiel acompañante para quien posea un gran terreno para que este gaste su energía. Valientes y hábiles' colorBadge='danger' textBadge='Akita'/>
            <Card urlImg="https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0095_pomeranian.jpg" nombre='Waku' descripcion='De caracter sociable y muy activo, los Pomeranian serán la mejor compañía para alguien con hijos' colorBadge='warning' textBadge='Pomeranian'/>
            <Card urlImg='https://purina.cl/sites/default/files/2023-07/CHOW%20CHOW%20480X684.png' nombre='Bubbles' descripcion='De tamaño mediano, independiente y cariñoso. Que el azul de su lengua no te asuste, son unicos en su especie.' colorBadge='primary' textBadge='Chow Chow'/>
        </section>

      

        <Footer descripcionFooter="Explora nuestra galería de adopción de perros para encontrar a tu compañero ideal. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imágen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad."></Footer>
        </>
}

export default App
