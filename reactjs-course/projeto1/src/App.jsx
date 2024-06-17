import React from "react";


import './styles/App.css'
import Navbar from "./components/Navbar/Navbar";



// Componente em classe é uma classe que herda a classe componente do REACT, e retorna HTML dentro do método render.

class App extends React.Component {
  render () {
    // Método responsável por renderizar o conteúdo HTML do nosso componente
    return <Navbar />;
  }
}

export default App;
