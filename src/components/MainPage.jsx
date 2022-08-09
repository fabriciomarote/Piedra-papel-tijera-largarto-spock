import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { rock, paper, scissors, lizard, spock } from './Selections';
import Music from '../media/music.mp3'
import useSound from 'use-sound';
import '../styles/MainPage.css';

const MainPage = () => {

  const navigate = useNavigate();
  const goSinglePlayer = () => navigate('/singlePlayer');
  const goMultiPlayer = () => navigate('/multiPlayer');

    return (
        <>
          <div className='mainPage-container'>
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