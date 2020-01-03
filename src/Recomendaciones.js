import React from 'react';
import Slider from './Slider';
import { Ring } from 'react-awesome-spinners';

class Recomendaciones extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            peliculas: [],
            series : [],
            isLoading: false,
        };
    }    

    /* // solo una llamada
    componentDidMount(){
        this.setState({ isLoading: true });

        //fetch('http://localhost:3000/recomendador/aleatorio/peliculas')
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=18268e82edbd92497a6d18853ddf8c57&language=es-ES')

        .then(response => response.json())
        .then(data => this.setState({ peliculas: data.results, isLoading: false }));
    } */
    
    componentDidMount(){
        this.setState({ isLoading: true });

        Promise.all([
            //fetch('https://api.themoviedb.org/3/movie/popular?api_key=18268e82edbd92497a6d18853ddf8c57&language=es-ES'),
            //fetch('https://api.themoviedb.org/3/tv/popular?api_key=18268e82edbd92497a6d18853ddf8c57&language=es-ES')

            fetch('http://localhost:3000/recomendador/aleatorio/peliculas'),
            fetch('http://localhost:3000/recomendador/aleatorio/series')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            peliculas: data1.results, 
            series: data2.results,
            isLoading: false
        }));
    }

    render(){
                 
        if (this.state.isLoading) {
            return (
                <div>
                    <p>Loading Películas y Series...</p>
                    <Ring />
                </div>                                
            );
        }

        return (
                <div id="recomendacion_slides">                 
                <Slider recomendacionesSlide = {this.state.peliculas} titulo = "Películas" tipo = "1"></Slider>
                <Slider recomendacionesSlide = {this.state.series} titulo = "Series" tipo = "2"></Slider>
            </div>
        );
       
    }
    
}

export default Recomendaciones;