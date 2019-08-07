import React, { Component } from 'react';
class Tareas extends Component{
    constructor(){
        super();
     
    }
    pasarkeyEliminar(key){
        console.log(key);
        this.props.onEliminarTarea(key);
    }
    render(){
        console.log(this.props.tareas);// antes de renderizar Mostrar las tareas
   
       const data_tareas = this.props.tareas.map((tarea, i) => {
            return (
              <div key={i} className="col-md-4">
                <div className="card mt-4">
                  <div className="card-header">
                    <h3>{tarea.titulo}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                      {tarea.prioridad}
                    </span>
                  </div>
                  <div className="card-body">
                    <p>{tarea.descripcion}</p>
                    <p>{tarea.responsable}</p>
                  </div>
                  <div className="card-footer">
                  <button onClick={this.pasarkeyEliminar.bind(this, i)}
                     className="btn btn-danger">
                     Eliminar</button>
                  </div>
                </div>
              </div>
            )
          });
          return data_tareas
    }
   
}
export default Tareas;