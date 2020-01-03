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
        this.handleListaNegra = this.handleListaNegra.bind(this);
    }

    _handleChange = (event) => {
        this.setState({ value: event.target.value })
      }
    
    handleListaNegra(idRecomendacion, tipo){
        var id_recomendacion = idRecomendacion;
        var tipoRec = tipo;
        //window.alert("id recurso: " + id_recomendacion + ", tipo: " + tipo);

        if (tipoRec == 1){
            // pelicula
            this.addPeliculaListaNegra(id_recomendacion);

        } else if (tipoRec == 2){
            // serie
            this.addSerieListaNegra(id_recomendacion);

        } else {
            // error
            window.alert("Lo sentimos! Se ha producido un error inesperado. No se puede añadir a la lista de no recomendaciones. Inténtelo de nuevo más tarde.");
        }

        // OPCIONAL: crear una vista donde aparezcan todas las peliculas o series de la lista negra
    }

    addPeliculaListaNegra(idPelicula){
        const urlAPI = "http://localhost:3000/recomendador/listaNegra/pelicula/" + idPelicula;
        var data = {username: 'example'};
        //window.alert(urlAPI);
        
        fetch(urlAPI, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => window.alert('Error:', error))
          .then(response => {
              //window.alert('Success:', response)
              this.removeRecomendacionFromArray(idPelicula);
              window.alert("Pelicula añadida a la lista no recomendada!");
          });      

    }

    addSerieListaNegra(idSerie){
        const urlAPI = "http://localhost:3000/recomendador/listaNegra/serie/" + idSerie;
        var data = {username: 'example'};
        //window.alert(urlAPI);
        
        fetch(urlAPI, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => window.alert('Error:', error))
          .then(response => {
              //window.alert('Success:', response)
              this.removeRecomendacionFromArray(idSerie);
              window.alert("Serie añadida a la lista no recomendada!");
          }); 
    }
    

    removeRecomendacionFromArray(id){
        const newState = this.state;
        const index = newState.recomendacionesSlide.findIndex(a => a.id === id);

        if (index === -1) return;
        newState.recomendacionesSlide.splice(index, 1);

        this.setState(newState); // This will update the state and trigger a rerender of the components
  
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

                <Whirligig id="sliderComponent" visibleSlides={5} gutter="1em">
                    {this.state.recomendacionesSlide.slice(0,this.state.value).map((recomendacion) => 
                        <Recomendacion key = {recomendacion.id} recomendacion = {recomendacion} tipo = {this.state.tipo} clickAddListaNegra={this.handleListaNegra}/>
                    )
                } 
                </Whirligig>

            </div>
            
        );
    }
    
}

export default Slider;