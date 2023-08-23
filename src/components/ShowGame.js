import React from 'react'
import { useLocation } from 'react-router-dom'

const ShowGame = () => {
    const location = useLocation();
    const game = location.state || [];
  return (
    <div>
        <h2 className="text-center">Game</h2>
        <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
                <p>Name: {game.name}</p>
                <p>Year Published: {game.yearPublished}</p>
                <p>Designer: {game.designer}</p>
                <p>Playing Time: {game.playingTime}</p>
            </div>
        </div>
    </div>
  )
}

export default ShowGame