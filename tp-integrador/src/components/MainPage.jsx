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
                <a type="button" classname="btn-mp" id="modal" data-toggle="modal" data-target="#exampleModalCenter">REGLAS</a>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Reglas del juego</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
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
                      <div class="modal-footer">
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
      )
}
    
export default MainPage;