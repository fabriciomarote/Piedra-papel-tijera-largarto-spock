import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { selections } from './Selections';
import win from '../media/winner.png';
import lose from '../media/loser.png';
import Ganador from '../media/ganador.mp3'
import Perdedor from '../media/derrota.mp3'
import Empate from '../media/empate.mp3'
import useSound from 'use-sound';
import Counter from './Counter';
import GameCounter from './GameCounter';
import Footer from './Footer';
import '../styles/SinglePlayer.css';
import '../styles/Footer.css';

const SinglePlayer = () => {

    const [counterTotalUser, setCounterTotalUser] = useState(0);
    const [counterTotalComp, setCounterTotalComp] = useState(0);
    const [counterUser, setCounterUser] = useState(0);
    const [counterComp, setCounterComp] = useState(0);
    const [userSelection, setUserSelection] = useState(null);
    const [compSelection, setCompSelection] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [playGanador, { stop: stopGanador }] = useSound(Ganador, {
        volume: 0.5,
       }); 
    const [playPerdedor, { stop: stopPerdedor }] = useSound(Perdedor, {
        volume: 0.5,
       }); 
    const [playEmpate, { stop: stopEmpate }] = useSound(Empate, {
        volume: 0.5,
       }); 
    const [msgOutput, setMsgOutput] = useState("");
    const [state, setState] = useState(false);

    const navigate = useNavigate();
    const goBack = () => navigate('/');

    const randomChoice = () => {
        const randomSelection = selections[Math.floor(Math.random() * selections.length)];
        setCompSelection(randomSelection);
    };

    const resetFullCounter = () => {
        setCounterTotalUser(0);
        setCounterTotalComp(0);
        setCounterUser(0);
        setCounterComp(0);
        setUserSelection(null);
        setCompSelection(null);
        stopGanador();
        stopPerdedor();
        stopEmpate();
        setMsgOutput("");
        setState(false);
    };

    const resetCounter = () => {
        setCounterUser(0);
        setCounterComp(0);
        setUserSelection(null);
        setCompSelection(null);
        stopGanador();
        stopPerdedor();
        stopEmpate();
        setMsgOutput("");
        if (counterUser === 3) {
            setCounterTotalUser(counterTotalUser + 1)
        } else if (counterComp === 3) {
            setCounterTotalComp(counterTotalComp + 1)
        }
    };

    const clickHandler = (value) => {
        setUserSelection(value);
        randomChoice();
    };

    const startingHandler = () => {
        setState(true);
    };

    const changeIsMuted = () => {
        if (isMuted) {
            setIsMuted(false);
        } else {
            setIsMuted(true);
            stopGanador();
            stopPerdedor();
            stopEmpate();
        }
    };

    const iconSound = () => {
        if (isMuted) {
          return (
            <>
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-volume-mute-fill" viewBox="0 0 16 16" onClick={ () => changeIsMuted()}>
                  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-volume-up-fill" viewBox="0 0 16 16" onClick={ () => changeIsMuted()}>
                  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                  <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                </svg>
              </div>
            </>
          );
        }
    };

    const compareAndSetStates = (selection1, selection2) => {
        if (selection1.win.includes(selection2.name)) {
            setCounterUser(counterUser + 1);
            setMsgOutput("Ganaste el punto");
            if (!isMuted){
                playGanador();
            }
        } else if ( selection1.name === selection2.name) {
            setMsgOutput("Han empatado");
            if (!isMuted){
                playEmpate();
            }
        } else {
            setCounterComp(counterComp + 1);
            setMsgOutput("Perdiste el punto");
            if (!isMuted){
                playPerdedor();
            }
        }
    };

    const renderStarting = () => {
        if (state) {
             if (counterUser === 3) {
                return (
                    <>
                        <Counter player1={counterUser} player2={counterComp}/>
                        <div className='box-end-game'>
                            <div className='box-content'>
                                <img className='winner-image' src={win} alt="imagen"/>
                                <p className='msg-end'>¡Ganaste la partida!</p>
                            </div>
                        </div> 
                    </>
                );
            }
            else if (counterComp === 3) {
                return (
                    <>
                        <Counter player1={counterUser} player2={counterComp}/>
                        <div className='box-end-game'>
                            <div className='box-content'>
                                <img className='loser-image' src={lose} alt="imagen"/>
                                <p className='msg-end'>¡Perdiste la partida!</p>
                            </div>  
                        </div>      
                    </>
                ) ;     
            }
            else {
                return (
                    <>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <Counter player1={counterUser} player2={counterComp}/>
                        </div> 
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 game-container-singlePlayer'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 box-buttons-content'>
                                    {selections.map((select, index) => (
                                        <img key={index} className='img' onClick={() => clickHandler(select)} src={select.src1} alt="imagen"/>
                                    ))}
                                </div>
                            </div>
                            {renderSelections()}
                        </div>
                    </>
                );
            }
        } else {
            return (
                <>
                    <div className='title'>
                        <span>PIEDRA</span>
                        <span>PAPEL</span>
                        <span>TIJERA</span>
                        <span>LAGARTO</span>
                        <span>SPOCK</span>
                    </div>
                </>
            );
        }
    };

    const renderSelections = () => {
        if (userSelection != null && compSelection != null) {
            return (
                <>
                    <div className='box-selections-content'>
                        <div className='box-buttons-selected-content'>
                            <img className='selection-image' src={userSelection.src1} alt="imagen"/>
                            <img className='selection-image' src={compSelection.src2} alt="imagen"/>
                        </div>
                        <div className='msg-output'>
                            <p className='msg'>{msgOutput}</p>
                        </div>
                    </div>
                </>
            );
        };
    };

    const renderByState = () => {
        if (state) {
            if (counterComp === 3 || counterUser === 3) {
                return (
                    <>
                        <a onClick={resetCounter} className="btn-gp" id='btn-navbar'>JUGAR OTRA PARTIDA</a>   
                    </>
                );
            };
            return (
                <>
                    <a onClick={resetFullCounter} className="btn-gp">REINICIAR JUEGO</a>   
                </>
            );
        } else {
            return (
                <>
                    <a onClick={startingHandler} className="btn-gp">INICIAR PARTIDA</a>   
                </>
            );
        };
    };

    useEffect(() => {
        if (userSelection != null && compSelection != null) {
            compareAndSetStates(userSelection, compSelection);
        }
    }, [userSelection, compSelection]);

    return (
        <>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 gamePage-container'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 navbar'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 navbar-top'>
                        <GameCounter player1={counterTotalUser} player2={counterTotalComp} namePlayer1={"USER"} namePlayer2={"COMP"} />
                    </div>    
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 navbar-bottom'>
                        <a onClick={goBack} className="btn-gp">SALIR</a>
                        {renderByState()}
                        {iconSound()}
                    </div> 
                </div> 
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 content-game'>
                    {renderStarting()}
                </div>   
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 footer'>
                    <Footer/> 
                </div>   
            </div>
            
        </>
    );
};

export default SinglePlayer;
