import React from "react";
import '../styles/Project.css';

const Project = () => {
    return (
        <>
        <div className="project-container">
        {/* 3D ANIMATED SECTION SHOWING THE BEST OF OUR PROJECTS - COULD BE PARALLAX LIKE EFFECT */}
            <div className="project a">
                <div>Project A Image</div>
                <div className="a">Project A Description</div>
            </div>
            <div className="project b">
                <div>Project B Image</div>
                <div className="b">Project B Description</div>
            </div>
            <div className="project c">
                <div>Project C Image</div>
                <div className="c">Project C Description</div>
            </div>

        </div>

        </>
        )
}

export default Project;