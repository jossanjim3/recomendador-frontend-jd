import React from 'react';
import Recomendacion from './Recomendacion';
import Whirligig from 'react-whirligig';

class Slider extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            errorInfo : null,
            recomendacionesSlide: this.props.recomendacionesSlide, // listado de peliculas o series
            value: 5, // por defecto 5
            titulo : this.props.titulo, // titulo del slider
            slideIndex : 1, // indice del slice, comienza por el primer elemento
            tipo : this.props.tipo // tipo 1 => pelicula, tipo 2 => serie
        };
    }

    _handleChange = (event) => {
        this.setState({ value: event.target.value })
      }

    render(){
        return (
            <div id="slider" className="slider">
                
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <select className="browser-default custom-select" onChange={this._handleChange} style={{width: "4em", marginLeft:"1em"}}
                                        placeholder="Select number of..."  ref={ref => {
                                                                            this._select = ref
                                                                            }}
                                        defaultValue={this.state.value}>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                </select>
                            </td>
                            <td className="tituloSlider">
                                {this.state.titulo}
                            </td>
                        </tr>
                    </tbody>
                </table>                                                   

                <Whirligig visibleSlides={this.state.recomendacionesSlide.length / 4} gutter="1em">
                    {this.state.recomendacionesSlide.slice(0,this.state.value).map((recomendacion) => 
                        <Recomendacion key = {recomendacion.id} recomendacion = {recomendacion} tipo = {this.state.tipo}/>
                    )
                } 
                </Whirligig>

            </div>
            
        );
    }
    
}

export default Slider;