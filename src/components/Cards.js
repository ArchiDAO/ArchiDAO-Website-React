import React from "react";
import '../styles/Cards.css';

const Cards = () => {

    return (
        <div>
            <section className="cards">
                <article className="card">
                    <picture className="thumbnail">
                        <img className="category__01" src="./logo.jpg" alt="Project 1" />
                    </picture>
                    <div className="card-content">
                        <p className="category category__01">Metaverse</p>
                        <h2>Metaverse Project 1</h2>
                        <p>3D model is imported into the Decentraland Metaverse</p>
                    </div>
                    <footer>
                        Add links to footer
                    </footer>
                </article>
            </section>
        </div>
    )
}

export default Cards;