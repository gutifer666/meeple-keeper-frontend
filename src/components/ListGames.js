import React, { useState, useEffect } from 'react'
import GameService from '../services/GameService'
import {useNavigate} from 'react-router-dom'

const ListGames = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    GameService.getAllGames().then((response) => {
      setGames(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  const navigate = useNavigate();

  const deleteGame = (id, e) => {
    e.preventDefault()
    GameService.deleteGame(id).then((response) => {
      setGames(games.filter(game => game.id !== id));
    }).catch((error) => {
      console.log(error);
    })
  }

  const showGame = (objectId, e) => {
    e.preventDefault()
    GameService.getGame(objectId).then((response) => {
      navigate('/show-game', {state: response.data})
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="container">
      <h2 className="text-center">Games</h2>
      <table className="table table-border table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Published</th>
            <th>Designer</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.name}</td>
              <td>{game.yearPublished}</td>
              <td>{game.designer}</td>
              <td>{game.playingTime}</td>
              <td><button className="btn btn-danger" onClick={(e) => deleteGame(game.id, e)} >Delete</button></td>
              <td><button className="btn btn-primary" onClick={(e) => showGame(game.objectId, e)} >Show</button></td>
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  )
}
export default ListGames;
