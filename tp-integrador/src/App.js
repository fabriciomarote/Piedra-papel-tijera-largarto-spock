import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamePage from './components/GamePage';
import MainPage from './components/MainPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/game" element={<GamePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
