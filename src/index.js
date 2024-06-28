import ReactDOM from 'react-dom';
import React from 'react';


const App = () => {
    const appStyles = {
        textAlign: 'center',
        color: '#333',
        padding: '20px',
    };

    return (
        <div style={appStyles}>
            <h1>Hello from App component</h1>
        </div>
    );
}

let rootNode = ReactDOM.createRoot(document.getElementById('root'));
rootNode.render(<App />);
