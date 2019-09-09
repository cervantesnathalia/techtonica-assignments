import React, {Component} from 'react';
import {CategoriasConsumer} from "../context/CategoriasContext";
import {EventosConsumer} from "../context/EventosContext";

class Formulario extends Component{
    state = {
        nombre: '',
        categoria: ''
    };

    obtenerDatosEvento = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    render() {
        return(
            <EventosConsumer>
                {(value)=>{
                    return (
                        <form onSubmit={(e)=>{e.preventDefault(); value.obtenerEventos(this.state)}}>
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                   Search your Events
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="nombre"
                                        className="uk-input"
                                        placeholder="keyword or event name "
                                        type="text"
                                        onChange={this.obtenerDatosEvento}
                                    />
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <select name="categoria" className="uk-select" onChange={this.obtenerDatosEvento}>
                                        <option value="">-- Select a Category  --</option>
                                        <CategoriasConsumer>
                                            {(value)=>{
                                                return (
                                                    value.categorias.map(categoria => (
                                                        <option key={categoria.id} value={categoria.id} data-uk-form-select>
                                                            {categoria.name_localized}
                                                        </option>
                                                    ))
                                                )
                                            }}
                                        </CategoriasConsumer>
                                    </select>
                                </div>
                                <div>
                                    <input type="submit" className="uk-button" value="Search Events"/>
                                </div>

                            </div>
                        </form>
                    );
                }}
            </EventosConsumer>
        );
    }
}
export default Formulario;
