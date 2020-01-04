import React from 'react';
import Slider from './Slider';
import { Ring } from 'react-awesome-spinners';

let test_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNTc4MTUxNjg1LCJleHAiOjE1NzgxNTUyODV9.joGz9ESDocPsb2Jj3wtikgBcIzEq3OLi_erHJf4IduI';

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

        //var url_api = (process.env.URL_API_RECOMENDADOR || 'http://localhost:3000/);
        //window.alert("test token: " + test_token);

        Promise.all([
            //fetch('https://api.themoviedb.org/3/movie/popular?api_key=18268e82edbd92497a6d18853ddf8c57&language=es-ES'),
            //fetch('https://api.themoviedb.org/3/tv/popular?api_key=18268e82edbd92497a6d18853ddf8c57&language=es-ES')

            fetch('http://localhost:3000/recomendador/v1/aleatorio/peliculas', {
                method: 'GET', // or 'PUT'
                headers:{
                  'Content-Type': 'application/json',
                  'authorization' : test_token
                }
            }),
            fetch('http://localhost:3000/recomendador/v1/aleatorio/series', {
                method: 'GET', // or 'PUT'
                headers:{
                  'Content-Type': 'application/json',
                  'authorization' : test_token
                }
            })
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