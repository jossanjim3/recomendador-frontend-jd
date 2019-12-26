import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Recomendacion extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            errorInfo : null,
            recomendacion: this.props.recomendacion,
        };
    }

    render(){

        const urlPoster = "http://image.tmdb.org/t/p/w185//" + this.state.recomendacion.backdrop_path;

        return (
            <div id="recomendacion_card" style={{margin:"0.5em"}}>
                <Flippy
                    flipOnHover={false} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                    style={{ width: '250px', height: '100%' }} /// these are optional style, it is not necessary
                >
                    <FrontSide
                        style={{backgroundColor: '#fff',}}>

                        <img className="poster" src={urlPoster} alt="texto" title={this.state.recomendacion.title}/>
                        {/* <span>{this.state.recomendacion.id}</span> */}

                        <p className="tituloRecomendacion">
                            {this.state.recomendacion.title}
                        </p>

                        <hr></hr>
                        <table>
                            <tr>
                                <td>Puntuación:</td>
                                <td className="datos_recomendacion_celda"><strong>{this.state.recomendacion.vote_average}</strong></td>
                            </tr>
                            <tr>
                                <td>Votos:</td>
                                <td className="datos_recomendacion_celda">{this.state.recomendacion.vote_count}</td>
                            </tr>
                            <tr>
                                <td>Fecha:</td>
                                <td className="datos_recomendacion_celda">{this.state.recomendacion.release_date}</td>
                            </tr>
                            <tr>
                                <td>Género:</td>
                                <td className="datos_recomendacion_celda">{this.state.recomendacion.genre_ids}</td>
                            </tr>
                        </table>                        
                    </FrontSide>

                    <BackSide
                        style={{ backgroundColor: '#fff'}}>

                        <textarea disabled className="overview">{this.state.recomendacion.overview}</textarea>

                    </BackSide>
                </Flippy>
                
                
            </div>
            
        );
    }
    
}

export default Recomendacion;