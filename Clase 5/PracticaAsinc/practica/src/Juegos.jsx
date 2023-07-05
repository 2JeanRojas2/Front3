import React from "react";

class Juegos extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Nombre: {this.props.nombre}</h2>
                <ul>
                    <li>Tipo: {this.props.tipo}</li>
                    <li>Tamaño: {this.props.tamaño} </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default Juegos;  