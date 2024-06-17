import React from "react";
import logoImg from './assets/images/logo.png'

import './styles/App.css'

// Componente em classe é uma classe que herda a classe componente do REACT, e retorna HTML dentro do método render.

class App extends React.Component {

  render () {
    // Método responsável por renderizar o conteúdo HTML do nosso componente
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt="logo flight news" />
            <h1>Space Flight News</h1>
          </div>

          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Trending</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">About Us</a></li>
          </ul>



        </nav>
      </header>

    );
  }
}

export default App;
