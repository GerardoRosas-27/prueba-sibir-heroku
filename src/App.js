import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './components/Navegacion';
import Formulario from './components/Formulario';
import { tareas } from './tareas.json';
import Tareas from './components/Tareas';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas
    }
    this.agregarTarea = this.agregarTarea.bind(this);
    this.eliminarTarea = this.eliminarTarea.bind(this);
  }
  agregarTarea(tarea) {
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }
  eliminarTarea(key) {
    if(window.confirm('Quieres eliminar este dato')){
      this.setState({
        tareas: this.state.tareas.filter((e, i) => {
          return i !== key
        })
      })
    }
  }

  

  render() {

    return (
      <div className="App">
        <Navegacion cantidad={this.state.tareas.length} titulo="React App" />
        <Formulario onAgregarTarea={this.agregarTarea} />
        <div className="container">
          <div className="row mt-4">
            <Tareas tareas={ this.state.tareas } onEliminarTarea={this.eliminarTarea} ></Tareas>
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
      </div>
    )
  }
}

export default App;
