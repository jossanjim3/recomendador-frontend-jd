import React from 'react';

function ListaNegra(props){
    return(
        <tr>
            <td>{props.elemento.idTmdb}</td>
            <td></td>
            <td><button className="btn btn-primary" onClick={() => props.deleteFromListaNegra(props.elemento.idTmdb, props.tipo) }>Eliminar</button></td>
            <td>{props.tipo}</td>
        </tr>
    );
}

export default ListaNegra;