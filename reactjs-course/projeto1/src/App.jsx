// CONTROLA O QUE APARECE NA APLICAÇÃO

import React from "react";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar"; // POSSO DAR QUALQUER NOME QUANDO EU IMPORTAR


import './styles/App.css'


// Componente em classe é uma classe que herda a classe componente do REACT, e retorna HTML dentro do método render.

// fragment <> </>

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render () {
    return (
      <>
        <Navbar />

        <section id="articles">
          <Article />
        </section>
      </>
    );
  }
}

export default App;
