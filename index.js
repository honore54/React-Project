import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import App from './App';

export default function MyApp(){
    return (
        <div>
            <App />
        </div>
    )
}
ReactDOM.render(<MyApp />,document.getElementById("root"))





