import React from 'react';
import Slider from './Slider';
import { Ring } from 'react-awesome-spinners';

let test_token = process.env.REACT_APP_TEST_TOKEN;

class Recomendaciones extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            recomendaciones : [],
            isLoading: false,
            tipoRecomendacion : this.props.tipoRecomendacion, // 1 -> aleatorio, 2 -> por similitud
            categoria : this.props.categoria, // 1 -> peliculas, 2 -> series
            idRecomendacion : this.props.idRecomendacion,
            titulo : "",
            visibleSlides : this.props.visibleSlides // numero de recomendaciones visibles en el scroll
        };
    }    
    
    // solo una llamada
    componentDidMount(){

        //window.alert("test token ENV: " + process.env.REACT_APP_TEST_TOKEN);

        this.setState({ isLoading: true });
        
        var categoria = this.state.categoria;
        //window.alert("categoria: " + categoria);

        var tipoRecomendacion = this.state.tipoRecomendacion;
        //window.alert("tipoRecomendacion: " + tipoRecomendacion);

        var idRecomendacion = this.state.idRecomendacion;
        //window.alert("idRecomendacion: " + idRecomendacion);

        var url_api = (process.env.REACT_APP_URL_API_RECOMENDADOR); // http://localhost:3000/recomendador/v1/
        //window.alert("REACT_APP_URL_API_RECOMENDADOR: " + url_api);
        
        // transformamos la url
        if (tipoRecomendacion == "2"){ // por similitudes
            if(categoria == "1"){ // peliculas
                url_api = url_api + 'porSimilitudes/pelicula/' + idRecomendacion;
                this.setState({ titulo : 'Películas similares recomendadas' });
            } else if (categoria == "2") { // series
                url_api = url_api + 'porSimilitudes/serie/' + idRecomendacion;
                this.setState({ titulo : 'Series similares recomendadas' });
            }

        } else { // aleatorio
            if(categoria == "1"){ // peliculas
                url_api = url_api + 'aleatorio/peliculas';
                this.setState({ titulo : 'Películas aleatorias recomendadas' });
            } else if (categoria == "2") { // series
                url_api = url_api + 'aleatorio/series'; 
                this.setState({ titulo : 'Series aleatorias recomendadas' });
            }
        }

        //window.alert("url_api: " + url_api);
                
        //fetch('https://api.themoviedb.org/3/movie/popular?api_key=18268e82edbd92497a6d18853ddf8c57&language=es-ES')
        //fetch('http://localhost:3000/recomendador/aleatorio/peliculas')
        fetch(url_api, {
            method: 'GET', // or 'PUT'
            headers:{
              'Content-Type': 'application/json',
              'authorization' : test_token
            }
        })
        .then(response => response.json())
        .then(data => this.setState({ recomendaciones: data.results, isLoading: false }));
    }        

    render(){
                 
        if (this.state.isLoading) {
            return (
                <div>
                    <p>Cargando recomendaciones...</p>
                    <Ring />
                </div>                                
            );
        }

        return (
                <div id="recomendacion_slides">                 
                <Slider recomendacionesSlide = {this.state.recomendaciones} titulo = {this.state.titulo} tipo = {this.state.categoria} visibleSlides = {this.state.visibleSlides}></Slider>
            </div>
        );
       
    }
    
}

export default Recomendaciones;