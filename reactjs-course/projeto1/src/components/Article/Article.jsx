import React from "react";

import articleImg from '../../assets/images/article1.png'

export class Article extends React.Component {
    render() {
        return (
            <article>
                <img src={articleImg} alt="" />

                <div className="article-infos">
                    <h2>Designing Dashboards</h2>
                    <h3>NASA</h3>

                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </article>
        )
    }
}

// export default Article; exportar a class junto