import { useContext } from 'react';
import img from '../images/juego.png';
import Modal from "./Modal"
import '../styles/MainPage.css';
import { Context } from './Context';
import { useNavigate } from "react-router-dom";

const MainPage = () => {

  const navigate = useNavigate();
  const goPlayGame = () => navigate('/game')

    return (
        <>
          <div className='mainPage-container'>
            <div className='box-container'>
              <div className='title'>
                Rock Paper Scissors Lizard Spock
              </div>
              <div className='image-juego'>
                <img className='imagen' src={img} alt="imagen"/>
              </div>
              <div className='buttons'>
                <button type="submit" onClick={goPlayGame} className="btn-btn btn-info btn-mp">Play!</button>
                <button type="submit" onClick={goPlayGame} className="btn-btn btn-info btn-mp">Reglas</button>
              </div>
            </div>
          </div>
        </>
      )
}
    
export default MainPage;