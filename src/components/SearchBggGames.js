import React, { useState } from 'react'
import GameService from '../services/GameService'
import { useNavigate } from 'react-router-dom'

const SearchBggGames = () => {

    const [gameName, setgameName] = useState('');
    const navigate = useNavigate();

    const searchGame = (e) => {
        e.preventDefault()
        const game = {gameName}
        GameService.searchBggGame(gameName).then((response) => {
            navigate('/searched-games', {state: response.data})
        }
        ).catch((error) => {
            console.log(error);
        }
        )
    }

  return (
    <div>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Search Games</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className='form-label'>Game Name :</label>
                                <input
                                    type="text"
                                    placeholder="Game Name" 
                                    name="gameName" className="form-control" 
                                    value={gameName}
                                    onChange={e => setgameName(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className="btn btn-primary" onClick={(e) => searchGame(e)} >Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBggGames