import React from 'react';
import Recomendacion from './Recomendacion';

class Recomendaciones extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            errorInfo : null,
            recomendaciones: this.props.recomendaciones,
        };
    }

    render(){
        return (
            <div id="recomendacion_slides">
                {this.state.recomendaciones.map((recomendacion) => 
                    <Recomendacion key = {recomendacion.id} recomendacion = {recomendacion} />
                    )
                }         
            </div>
            
        );
    }
    
}

export default Recomendaciones;