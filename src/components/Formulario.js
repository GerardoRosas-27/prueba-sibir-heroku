import React, { Component } from 'react';

class Formulario extends Component {
    constructor() {
        super();
        this.state = {
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: ''
        }
        //Hacer referencia que este metodo pertenece a este metode de este componente
        this.EscuchaInput = this.EscuchaInput.bind(this);
        this.CapturaForm = this.CapturaForm.bind(this);
    }
    EscuchaInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        //console.log(this.state);
    }
    CapturaForm(e){
        e.preventDefault();
        console.log(this.state);
        this.props.onAgregarTarea(this.state);
    }

    render() {
        return (

            <div className="col-md-4 mx-auto">
                <h4 className="text-center">Registro</h4>
                <div className="card">
                    <form className="card-body" onSubmit={ this.CapturaForm }>
                        <div className="form-group">
                            <input
                                onChange={this.EscuchaInput}
                                type="text"
                                name="titulo"
                                className="form-control"
                                placeholder="titulo" />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.EscuchaInput}
                                type="text"
                                className="form-control"
                                name="responsable"
                                placeholder="responsable"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.EscuchaInput}
                                type="text"
                                className="form-control"
                                name="descripcion"
                                placeholder="descripcion" />
                        </div>
                        <div className="form-group">
                            <select
                                onChange={this.EscuchaInput}
                                className="form-control"
                                name="prioridad">
                                <option value="">Ninguno</option>
                                <option value="baja">Baja</option>
                                <option value="media">Media</option>
                                <option value="alta">Alta</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success btn-block">Guardar</button>
                        </div>


                    </form>
                 

                </div>
            </div>
        )
    }

}
export default Formulario;
