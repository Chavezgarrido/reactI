import { useEffect, useState } from 'react';
import Buscador from './Buscador';
import './MiApi.css'

function MiApi(){
    const [sismos, setSismos] = useState( []);
    const [sorted, setSorted] = useState(false);

    const getSismos = async () => {
        const res = await fetch("https://api.gael.cloud/general/public/sismos")
        const data = await res.json()
        setSismos(data);
    };

    useEffect(() => {
        getSismos();
    }, []);

    const BuscarSismo = (e) => {
        if (e.target.value !== ""){
            const arrayFilter = sismos.filter((sismo) => {
                return sismo.Magnitud.toLowerCase().includes(e.target.value.toLowerCase());
            });

            setSismos(arrayFilter);
        } else {
            setSismos
        }
    };

    const sortByMagnitud = () => {
        const sortedArray = [...sismos].sort((a, b) => sorted ? (b.Magnitud - a.Magnitud): (a.Magnitud - b.Magnitud));
        setSorted(!sorted)
        setSismos(sortedArray);
    };

    const sortByProfundidad = () => {
        const sortedArray = [...sismos].sort((a, b) => sorted ? (b.Profundidad - a.Profundidad): (a.Profundidad - b.Profundidad));
        setSorted(!sorted)
        setSismos(sortedArray);
    }

    return <>
    <header className="header d-flex justify-content-center text-center" >
        <h1>Últimos sismos registrados en Chile</h1>
    </header>
    <nav>Filtrar búsqueda:
        <Buscador onChange={BuscarSismo}/>
        <button className="mb-3" onClick={sortByMagnitud}>Ordenar por Magnitud</button>
        <button className="mb-3" onClick={sortByProfundidad}>Ordenar por Profundidad</button>
    </nav>
    <body>
        <section className="mb-3" id="sectionTabla">
            <table className="table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Profundidad</th>
                        <th>Magnitud</th>
                        <th>Referencia Geográfica</th>
                    </tr>
                </thead>
                <tbody>
                {sismos.map((sismo) => (
                    <tr>
                        <td> {sismo.Fecha} </td>
                        <td> {sismo.Profundidad} km </td>
                        <td> {sismo.Magnitud} </td>
                        <td>  {sismo.RefGeografica} </td>
                    </tr>
                    
    ))}  
                </tbody>
            </table>
        </section>
    </body>


    <footer className="bg-success">
        <p>Powered by : ChavezGarrido - Api Sismos Chile </p>
    </footer>


    </>;

};

export default MiApi