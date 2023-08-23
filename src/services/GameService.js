import axios from "axios";

const GAME_API_BASE_URL = "http://localhost:8080";

class GameService {
    getAllGames() {
        return axios.get(GAME_API_BASE_URL + "/show-games");
    }
    searchBggGame(gameName) {
        return axios.get(GAME_API_BASE_URL + "/search-bgg-game?name=" + gameName);
    }
    showBggGame(gameId) {
        return axios.get(GAME_API_BASE_URL + "/show-bgg-game?id=" + gameId);
    }
    saveGameByIdObject(objectId) {
        return axios.get(GAME_API_BASE_URL + "/save-bgg-game?objectId=" + objectId);
    }
    deleteGame(id) {
        return axios.get(GAME_API_BASE_URL + "/delete-game-by-id?id=" + id);
    }
    getGame(objectId) {
        return axios.get(GAME_API_BASE_URL + "/show-game?gameId=" + objectId);
    }
}

export default new GameService();