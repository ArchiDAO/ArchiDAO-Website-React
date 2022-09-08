import React from 'react';
import ReactDOM from "react-dom/client";//SS import ReactDOM from 'react-dom';
import App from './App';

// import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"))

    root.render (
        <div className="ui container">
            <App />
        </div>
    )

//SS DEPRECATED
// ReactDOM.render(<App />, document.querySelector('#root'));
