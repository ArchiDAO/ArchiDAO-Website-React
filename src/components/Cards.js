import React from "react";
import '../styles/Cards.css';
import projects from './Projects.json';

const Cards = () => {
    console.log(projects);
    const cards = projects.Projects.map((project) => {
        return (    
                <section className="cards" key={project.id}>
                    <article className="card">
                        <picture className="thumbnail">
                            <img className="category__01" src="./logo.jpg" alt="Project" />
                        </picture>
                        <div className="card-content">
                            <p className="category category__01">{project.category}</p>
                            <h2>{project.name}</h2>
                            <p className="description">{project.description}</p>
                        </div>
                        <footer>
                            Add links to footer
                        </footer>
                    </article>
                </section> 
            )   
        })

    return (
        <div>
            {cards}
        </div>
    )
}

export default Cards;