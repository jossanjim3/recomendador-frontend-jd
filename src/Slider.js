import React from 'react';
import Recomendacion from './Recomendacion';
import Whirligig from 'react-whirligig';

class Slider extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            errorInfo : null,
            recomendacionesSlide: this.props.recomendacionesSlide,
            slideIndex : 1
        };
    }

    render(){
        return (
            <div id="recomendacion_slides">
                   
                    <div>
                        <Whirligig visibleSlides={3} gutter="1em">
                            {this.state.recomendacionesSlide.map((recomendacion) => 
                            <Recomendacion key = {recomendacion.id} recomendacion = {recomendacion} />
                            )
                        } 
                        </Whirligig>
                    </div>
                    )

            </div>
            
        );
    }
    
}

export default Slider;