import React from 'react';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Movies from './components/Movies';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
            <div>Movie Card Project</div>
        </header>

        <main className="main">
        <Route path="/" exact={true} component={Movies} />
        </main>

        <footer className="footer">
            footer
        </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
