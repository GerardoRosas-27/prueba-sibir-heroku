import React, { Component } from 'react';
import './Navegacion.css';
 
class Navegacion extends Component {
  render() {
    return (
      <nav id="menuPrincipal" className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">{this.props.titulo}</a>
        <span className="badge badge-pill badge-light ml-2">
          {this.props.cantidad}
        </span>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/link">Link</a>
            </li>
           
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}
export default Navegacion;

