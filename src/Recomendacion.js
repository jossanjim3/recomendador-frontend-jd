import React from 'react';

function Recomendacion(props){
    const urlPoster = "http://image.tmdb.org/t/p/w185//" + props.recomendacion.backdrop_path;
    return(
        <div id="recomendacion" style={{float:"left", marginLeft:"1em"}}>
            <img src={urlPoster} alt="texto JD"/>
            <span>{props.recomendacion.id}</span>
            <span>{props.recomendacion.name}</span>
            <span>{props.recomendacion.vote_average}</span>
        </div>
    );
}

export default Recomendacion;