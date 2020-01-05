import React from 'react';
import { Ring } from 'react-awesome-spinners';
import ListaNegra from './ListaNegra.js';

let test_token = process.env.REACT_APP_TEST_TOKEN;

class ListaNegraRecomendaciones extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            peliculasNR: [],
            seriesNR : [],
            isLoading: false,
        };

        this.handleDeleteListaNegra = this.handleDeleteListaNegra.bind(this);
    }    
    
    componentDidMount(){
        this.setState({ isLoading: true });        
        //window.alert("test token: " + test_token);

        const url_api = (process.env.REACT_APP_URL_API_RECOMENDADOR); // http://localhost:3000/recomendador/v1/

        var urlListaNegraPeliculas = "";
        var urlListaNegraSeries    = "";

        urlListaNegraPeliculas = url_api + 'listaNegra/peliculas';
        urlListaNegraSeries    = url_api + 'listaNegra/series';
        Promise.all([
            fetch(urlListaNegraPeliculas, {
                method: 'GET', // or 'PUT'
                headers:{
                  'Content-Type': 'application/json',
                  'authorization' : test_token
                }
            }),
            fetch(urlListaNegraSeries, {
                method: 'GET', // or 'PUT'
                headers:{
                  'Content-Type': 'application/json',
                  'authorization' : test_token
                }
            })
        ])
        .then(([res11, res22]) => Promise.all([res11.json(), res22.json()]))
        .then(([data11, data22]) => this.setState({
            peliculasNR: data11.results, 
            seriesNR: data22.results,
            isLoading: false
        }));
    }

    handleDeleteListaNegra(idElemento, tipo){
        var idElemento = idElemento;
        var tipoRec = tipo;
        //window.alert("id recurso: " + id_recomendacion + ", tipo: " + tipo);        

        if (tipoRec == 1){
            // pelicula
            if (window.confirm('¿Estás seguro que desea eliminar la película de la lista de no recomendadas?')) {
                // Save it!
                this.deletePeliculaListaNegra(idElemento);
            } else {
                // Do nothing!
            }
            
        } else if (tipoRec == 2){
            // serie
            if (window.confirm('¿Estás seguro que desea eliminar la serie de la lista de no recomendadas?')) {
                // Save it!
                this.deleteSerieListaNegra(idElemento);
            } else {
                // Do nothing!
            }
                        
        } else {
            // error
            window.alert("Lo sentimos! Se ha producido un error inesperado. No se puede eliminar de la lista de no recomendadas. Inténtelo de nuevo más tarde.");
        }
    }

    deletePeliculaListaNegra(idPelicula){
        const urlAPI = "http://localhost:3000/recomendador/v1/listaNegra/pelicula/" + idPelicula;
        var data = {username: 'example'};
        //window.alert(urlAPI);
            
        fetch(urlAPI, {
            method: 'DELETE', // or 'PUT'
            //body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json',
              'authorization' : test_token
            }
          }).then(res => res.json())          
          .then(response => {
                //window.alert('Success:', response)
                const newState = this.state;
                const index = newState.peliculasNR.findIndex(a => a.idTmdb === idPelicula);

                if (index === -1) return;
                newState.peliculasNR.splice(index, 1);

                this.setState(newState); // This will update the state and trigger a rerender of the components
                window.alert("Pelicula eliminada de la lista no recomendadas!");
          })
          .catch(error => window.alert('Error:', error));      

    }

    deleteSerieListaNegra(idSerie){
        const urlAPI = "http://localhost:3000/recomendador/v1/listaNegra/serie/" + idSerie;
        var data = {username: 'example'};
        //window.alert(urlAPI);

        fetch(urlAPI, {
            method: 'DELETE', // or 'PUT'
            //body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json',
              'authorization' : test_token
            }
          }).then(res => res.json())
          .catch(error => window.alert('Error:', error))
          .then(response => {
              //window.alert('Success:', response)
              const newState = this.state;
              const index = newState.seriesNR.findIndex(a => a.idTmdb === idSerie);

              if (index === -1) return;
              newState.seriesNR.splice(index, 1);

              this.setState(newState); // This will update the state and trigger a rerender of the components
              window.alert("Serie eliminada de la lista no recomendadas!");
          }); 
    }

    render(){
                 
        if (this.state.isLoading) {
            return (
                <div>
                    <p>Cargando lista de películas y series no recomendadas...</p>
                    <Ring />
                </div>                                
            );
        }

        return (
                <div id="lista_negra_table">                 
                    <h3>Lista de películas no recomendadas:</h3>
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
                                <ListaNegra key = {peli.idTmdb} elemento = {peli} tipo = "1" deleteFromListaNegra={this.handleDeleteListaNegra}/>
                            )
                        }

                    </table>

                    <hr></hr>
                    
                    <h3>Lista de series no recomendadas:</h3>
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
                                <ListaNegra key = {serie.idTmdb} elemento = {serie} tipo = "2" deleteFromListaNegra={this.handleDeleteListaNegra}/>
                            )
                        }

                    </table>

            </div>
        );
       
    }
    
}

export default ListaNegraRecomendaciones;