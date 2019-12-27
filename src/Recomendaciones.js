import React from 'react';
import Slider from './Slider';

class Recomendaciones extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            errorInfo : null,
            recomendaciones: this.props.recomendaciones,        
            titulo : this.props.titulo    
        };
    }    

    render(){
        
        return (
            <div id="recomendacion_slides">                 
                <Slider recomendacionesSlide = {this.state.recomendaciones} titulo = {this.state.titulo}></Slider>
            </div>
            
        );
    }
    
}

export default Recomendaciones;