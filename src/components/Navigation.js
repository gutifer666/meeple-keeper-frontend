import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Board Game Geek</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/search-bgg-game">Search BGG Game</Link> 
                        <Link className="nav-link" to="/games">Games</Link>
                    </div>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navigation