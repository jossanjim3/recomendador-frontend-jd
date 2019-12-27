import React from 'react';
import Recomendacion from './Recomendacion';
import Whirligig from 'react-whirligig';

class Slider extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            errorInfo : null,
            recomendacionesSlide: this.props.recomendacionesSlide,
            value: 5,
            slideIndex : 1
        };
    }

    _handleChange = (event) => {
        this.setState({ value: event.target.value })
      }

    render(){
        return (
            <div id="slider">
                <select onChange={this._handleChange} className="ant-input selectBox" style={{width: 100}}
                                placeholder="Select number of..."  ref={ref => {
                                                                    this._select = ref
                                                                    }}
                                defaultValue={this.state.value}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>

                <Whirligig visibleSlides={this.state.recomendacionesSlide.length / 4} gutter="1em">
                    {this.state.recomendacionesSlide.slice(0,this.state.value).map((recomendacion) => 
                        <Recomendacion key = {recomendacion.id} recomendacion = {recomendacion} />
                    )
                } 
                </Whirligig>

            </div>
            
        );
    }
    
}

export default Slider;