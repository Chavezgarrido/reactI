import Tags from "./Tags"

function Cards({urlImg, nombre, descripcion, colorBadge, textBadge}){
return <>
    <article className="card">
        <img src={urlImg} alt="" />
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <Tags color = {colorBadge} texto= {textBadge}/>
    </article>
    </>
}

export default Cards