import React from 'react';
import Slider from './Slider';

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
                <Slider recomendacionesSlide = {this.props.recomendaciones}></Slider>
            </div>
            
        );
    }
    
}

export default Recomendaciones;