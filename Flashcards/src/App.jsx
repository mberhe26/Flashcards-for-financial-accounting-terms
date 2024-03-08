import React from 'react';
import Flashcards from './Comp/data'; // Import the Flashcards component
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <h1>10 Professional Financial <br/>Accounting Terms</h1>
            <h3>Number of cards: 10</h3>
            <Flashcards /> {/* Render the Flashcards component */}
        </div>
    );
};

export default App;