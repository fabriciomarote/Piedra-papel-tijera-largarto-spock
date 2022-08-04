import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePlayer from './components/SinglePlayer';
import MultiPlayer from './components/MultiPlayer';
import MainPage from './components/MainPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/singlePlayer" element={<SinglePlayer/>} />
        <Route exact path="/multiplayer" element={<MultiPlayer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
