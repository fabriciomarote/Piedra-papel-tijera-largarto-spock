import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import OnePlayer from './components/OnePlayer';
import TwoPlayers from './components/TwoPlayers';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/single" element={<OnePlayer/>} />
        <Route exact path="/multiplayer" element={<TwoPlayers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
