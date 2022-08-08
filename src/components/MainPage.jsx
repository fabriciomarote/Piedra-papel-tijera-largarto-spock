import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { rock, paper, scissors, lizard, spock } from './Selections';
import Mistery from '../media/tie.webm'
import useSound from 'use-sound';
import '../styles/MainPage.css';

const MainPage = () => {

  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(true);
  const goSinglePlayer = () => navigate('/singlePlayer');
  const goMultiPlayer = () => navigate('/multiPlayer');

  const [play, { stop: stop }] = useSound(Mistery, {
    volume: 0.5, duration: 1,
   });

  const playSound = () =>  {
    if(!isMuted) {
      play();
    }
  }

  const stopSound = () =>  {
    if(isMuted) {
      stop();
    }
  }

  const iconSound = () => {
    if (isMuted) {
      return (
        <>
          <div className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-volume-mute-fill" viewBox="0 0 16 16" onClick={ () => isMuted ? setIsMuted(false) : setIsMuted(true)}>
              <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
            </svg>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-volume-up-fill" viewBox="0 0 16 16" onClick={ () => isMuted ? setIsMuted(false) : setIsMuted(true)}>
              <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
              <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
              <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
            </svg>
          </div>
        </>
      );
    }
  }

  useEffect(() => {
    playSound();
    stopSound();  
}, [isMuted]);

    return (
        <>
          <div className='mainPage-container'>
            {iconSound()}
            <div className='box-container'>
              <div className='images-game'>
                <div className='box-top-images'>
                  <img className='img-mp' src={rock.src2} alt="imagen"/>
                  <img className='img-mp' src={paper.src2} alt="imagen"/>
                </div>
                <div className='box-medium-images'>
                  <img className='img-mp' src={scissors.src2} alt="imagen"/>
                </div>
                <div className='box-bottom-images'>
                  <img className='img-mp' src={lizard.src2} alt="imagen"/>
                  <img className='img-mp' src={spock.src2} alt="imagen"/>
                </div>
              </div>
              <div className='buttons'>
                <a type="button" className="btn-mp" id="modal" data-toggle="modal" data-target="#exampleModalCenter">REGLAS</a>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Reglas del juego</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <ul>
                          <li>Tijera corta a Papel</li>
                          <li>Papel tapa a Piedra</li>
                          <li>Piedra aplasta a Lagarto</li>
                          <li>Lagarto envenena a Spock</li>

                          <li>Spock rompe a Tijera</li>
                          <li>Tijera decapita a Lagarto</li>
                          <li>Papel desautoriza a Spock</li>
                          <li>Spock vaporiza a Piedra</li>
                          <li>y como siempre, Piedra aplasta a Tijera</li>
                        </ul>
                      </div>
                      <div className="modal-footer">
                        <a type="button" className="btn-mp" data-dismiss="modal">Aceptar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='buttons-content'>
                <a onClick={goSinglePlayer} className="btn-mp">UN JUGADOR</a> 
                <a onClick={goMultiPlayer} className="btn-mp">MULTIJUGADOR</a>
              </div>
            </div>
          </div>
        </>
      );
};
    
export default MainPage;