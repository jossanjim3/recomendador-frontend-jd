import React from 'react';
import Slider from './Slider';

class Recomendaciones extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            errorInfo : null,
            recomendaciones: this.props.recomendaciones,
            selector : this.props.selector
        };
    }
    
    render(){
        return (
            <div id="recomendacion_slides"> 
                <Slider recomendacionesSlide = {this.state.recomendaciones} selector = {this.state.selector}></Slider>
            </div>
            
        );
    }
    
}

export default Recomendaciones;