import React from 'react'
import { useLocation } from 'react-router-dom'
import GameService from '../services/GameService';
import { useNavigate } from 'react-router-dom'

const ListSearchedGame = () => {
    const location = useLocation();
    const listSearchedGames = location.state || [];
    const navigate = useNavigate();
    
    const showGame = (objectId, e) => {
        e.preventDefault()
        GameService.showBggGame(objectId).then((response) => {
            navigate('/show-bgg-game', {state: response.data})
        }
        ).catch((error) => {
            console.log(error);
        }
        )
    }

    return (
        <div className="container">
          <h2 className="text-center">Games</h2>
          <table className="table table-border table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Published</th>
                <th>URL</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listSearchedGames.map((game) => (
                <tr key={game.id}>
                  <td>{game.name}</td>
                  <td>{game.yearPublished}</td>
                  <td>{game.urlGame}</td>
                  <td><button className="btn btn-primary" onClick={(e) => showGame(game.objectId, e)} >Show</button></td>
                </tr>
              ))}
            </tbody>
          </table> 
        </div>
      )
}

export default ListSearchedGame