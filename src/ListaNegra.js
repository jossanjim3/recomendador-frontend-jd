import React from 'react';

function ListaNegra(props){
    return(
        <tr>
            <td>{props.elemento.idTmdb}</td>
            <td></td>
            <td><button className="btn btn-primary">Eliminar</button></td>
            <td>{props.tipo}</td>
        </tr>
    );
}

export default ListaNegra;