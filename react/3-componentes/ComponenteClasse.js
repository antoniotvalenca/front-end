import React, { Component } from 'react';
// import './Componente.css'; ***

class Componente extends Component {
  state = { // o state guarda os dados volateis daquele front-end
    novaTarefa: '',
  };

  handleChange = (e) => { // método que é chamado no return "onChange"
    this.setState({ // o setState indica o valor que vai ser guardado
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>{novaTarefa}</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit"> enviar </button>
        </form>

      </div>
    );
  }
}

export default Componente;
