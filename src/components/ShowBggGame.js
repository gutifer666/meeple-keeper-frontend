import React from 'react'
import { useLocation } from 'react-router-dom'
import GameService from '../services/GameService';
import { useNavigate } from 'react-router-dom'

const ShowBggGame = () => {
    const location = useLocation();
    const game = location.state || [];
    const navigate = useNavigate();
    
    const saveGame = (objectId, e) => {
        e.preventDefault()
        GameService.saveGameByIdObject(objectId).then((response) => {
            console.log(response.data);
            navigate('/games')
        }
        ).catch((error) => {
            console.log(error);
        }
        )

    }

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
            <button className="btn btn-primary" onClick={(e) => saveGame(game.objectId, e)} >Save</button>
        </div>

    </div>
  )
}

export default ShowBggGame