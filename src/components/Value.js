import React from "react";
import GetMetamask from "./GetMetaMask";
import '../styles/Value.css';

const Value = () => {
    return (
        <>
        <div className="value-container">
            <h1> Value Proposition </h1>
            <div className="value-proposition">
                <p>
                    This the the value proposition that ArchiDAO offers.
                    What is ArchiDAO's value proposition

                </p>
            </div>
            <button className="value-btn">More Info</button>
        
        {/* <GetMetamask /> */}
        </div>

        </>
        )
}

export default Value;