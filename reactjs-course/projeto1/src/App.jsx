// CONTROLA O QUE APARECE NA APLICAÇÃO

import React from "react";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar"; // POSSO DAR QUALQUER NOME QUANDO EU IMPORTAR
import { Counter } from "./components/Counter/Counter";


import './styles/App.css'

import article1Img from './assets/images/article1.png'
import article2Img from './assets/images/article2.png'
import article3Img from './assets/images/article3.png'



// Componente em classe é uma classe que herda a classe componente do REACT, e retorna HTML dentro do método render.

// fragment <> </>

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render () {
    return (
      <>
        <Navbar />

        {/* <Counter /> */}

        <section id="articles">
          <Article title="Designing Dashboards" provider="NASA" description="1 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={article1Img} />

          <Article title="Vibrant Portraits of 2020" provider="SpaceNews" description="2 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={article2Img} />

          <Article title="36 Days of Malayalam type" provider="Spaceflight Now" description="3 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={article3Img} />

          <Article title="Designing Dashboards" provider="NASA" description="4 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={article1Img} />

        </section>
      </>
    );
  }
}

export default App;
