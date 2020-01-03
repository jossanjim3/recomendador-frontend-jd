import React from 'react';
import { Ring } from 'react-awesome-spinners';
import ListaNegra from './ListaNegra.js';

class ListaNegraRecomendaciones extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            peliculasNR: [],
            seriesNR : [],
            isLoading: false,
        };
    }    
    
    componentDidMount(){
        this.setState({ isLoading: true });

        Promise.all([
            //fetch('https://api.themoviedb.org/3/movie/popular?api_key=18268e82edbd92497a6d18853ddf8c57&language=es-ES'),
            //fetch('https://api.themoviedb.org/3/tv/popular?api_key=18268e82edbd92497a6d18853ddf8c57&language=es-ES')

            fetch('http://localhost:3000/recomendador/listaNegra/peliculas'),
            fetch('http://localhost:3000/recomendador/listaNegra/series')
        ])
        .then(([res11, res22]) => Promise.all([res11.json(), res22.json()]))
        .then(([data11, data22]) => this.setState({
            peliculasNR: data11.results, 
            seriesNR: data22.results,
            isLoading: false
        }));
    }

    render(){
                 
        if (this.state.isLoading) {
            return (
                <div>
                    <p>Loading Lista de Películas y Series no recomendadas...</p>
                    <Ring />
                </div>                                
            );
        }

        return (
                <div id="lista_negra_table">                 

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id Pelicula</th>
                                <th>Nombre Pelicula</th>
                                <th></th>
                                <th>Tipo</th>
                            </tr>
                        </thead>

                        {this.state.peliculasNR.map((peli) => 
                                <ListaNegra key = {peli.idTmdb} elemento = {peli} tipo = "1"/>
                            )
                        }

                    </table>

                    <hr></hr>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id Serie</th>
                                <th>Nombre Serie</th>
                                <th></th>
                                <th>Tipo</th>
                            </tr>
                        </thead>

                        {this.state.seriesNR.map((serie) => 
                                <ListaNegra key = {serie.idTmdb} elemento = {serie} tipo = "2"/>
                            )
                        }

                    </table>

            </div>
        );
       
    }
    
}

export default ListaNegraRecomendaciones;