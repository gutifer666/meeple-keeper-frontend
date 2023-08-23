import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListGames from './components/ListGames';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBggGames from './components/SearchBggGames';
import ListSearchedGame from './components/ListSearchedGame';
import ShowBggGame from './components/ShowBggGame';
import Home from './components/Home';
import ShowGame from './components/ShowGame';

function App() {
  return (
    <div>
      <Router>
        <Header />
          <div className="container">
            <Routes>
              <Route path="*" element={<Home />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/search-bgg-game" element={<SearchBggGames />}></Route>
              <Route path="/games" element={<ListGames />}></Route>
              <Route path="/searched-games" element={<ListSearchedGame />}></Route>
              <Route path="/show-bgg-game" element={<ShowBggGame />}></Route>
              <Route path="/show-game" element={<ShowGame />}></Route>
            </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
