import React, { useState } from 'react';

const Componente = () => {
  const initialState = 0;
  const [contador, setContador] = useState(initialState); // o useState é um hook do react que recebe um array com 2 elementos: 1 = o valor do estado, 2 = funcao que atualiza o estado. e, dentro do useState, voce coloca o valor inicial do estado

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1> Contador: {contador} </h1>
      <button type="button" onClick={incrementarContador}> Incrementar </button>
    </div>
  );
};

export default Componente;

// OBS *** *** ***
// Nem sempre iremos usar o useState para controlar coisas a serem incrementadas. Geralmente, importaremos dados de, por exemplo, um Model, e iremos colocar o objeto como
// parâmetro do Componente(x)
