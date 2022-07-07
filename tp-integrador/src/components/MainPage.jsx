import { useContext } from 'react';
import Modal from "./Modal"
import imgRock from '../images/rock-user.jpeg';
import imgPaper from '../images/paper-user.jpeg';
import imgScissors from '../images/scissors-user.jpeg';
import imgLizard from '../images/lizard-user.jpeg';
import imgSpock from '../images/spock-user.jpeg';
import '../styles/MainPage.css';
import { Context } from './Context';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const MainPage = () => {

  const navigate = useNavigate();
  const goSinglePlayer = () => navigate('/singlePlayer')
  const goMultiPlayer = () => navigate('/multiPlayer')

    return (
        <>
          <div className='mainPage-container'>
            <div className='box-container'>
              <div className='images-game'>
                <div className='box-top-images'>
                  <img className='img-mp' src={imgRock} alt="imagen"/>
                  <img className='img-mp' src={imgPaper} alt="imagen"/>
                </div>
                <div className='box-medium-images'>
                  <img className='img-mp' src={imgScissors} alt="imagen"/>
                </div>
                <div className='box-bottom-images'>
                  <img className='img-mp' src={imgLizard} alt="imagen"/>
                  <img className='img-mp' src={imgSpock} alt="imagen"/>
                </div>
              </div>
              <div className='buttons'>
                <a onClick={goSinglePlayer} className="btn-mp">REGLAS</a>
              </div>
              <div className='buttons-content'>
                <a onClick={goSinglePlayer} className="btn-mp">UN JUGADOR</a> 
                <a onClick={goMultiPlayer} className="btn-mp">MULTIJUGADOR</a>
              </div>
            </div>
          </div>
        </>
      )
}
    
export default MainPage;