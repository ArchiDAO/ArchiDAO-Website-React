// semantic-ui CDN in index.html
import React from "react";
import NavBar from "./components/NavBar";
import GetMetamask from "./components/getMetaMask";

const App = () => {

    return (
        <div className="ui container" >
            <NavBar />
            <GetMetamask />
        </div>
    )
}

export default App;