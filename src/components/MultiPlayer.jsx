import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { selections } from './Selections';
import { FaArrowDown } from "react-icons/fa";
import { useSound }  from 'use-sound';
import Ganador from '../media/ganador.mp3'
import Boton from '../media/botones3.mp3'
import SelectBoton from '../media/botones2.mp3'
import GameCounter from './GameCounter';
import Counter from './Counter';
import '../styles/MultiPlayer.css';

const MultiPlayer = () => {

    const [counterTotalPlayer1, setCounterTotalPlayer1] = useState(0);
    const [counterTotalPlayer2, setCounterTotalPlayer2] = useState(0);
    const [counterPlayer1, setCounterPlayer1] = useState(0);
    const [counterPlayer2, setCounterPlayer2] = useState(0);
    const [player1Selection, setPlayer1Selection] = useState(null);
    const [player2Selection, setPlayer2Selection] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [playGanador, { stop: stopGanador }] = useSound(Ganador, {
        volume: 0.2,
    }); 
    const [playBoton, { stop: stopBoton }] = useSound(Boton, {
        volume: 0.1,
    }); 
    const [playSelectBoton, { stop: stopSelectBoton }] = useSound(SelectBoton, {
        volume: 0.1,
    });  
    const [msgOutput, setMsgOutput] = useState("");
    const [stateOn, setStateOn] = useState(false);
    const [buttonsBlocked, setButtonsBlocked] = useState(false);
    const navigate = useNavigate();
    const goBack = () => {
        if (!isMuted){
            playBoton();
        } 
        navigate('/');
    };

    const resetFullCounter = () => {
        setCounterTotalPlayer1(0);
        setCounterTotalPlayer2(0);
        setCounterPlayer1(0);
        setCounterPlayer2(0);
        resetPoint();
        setStateOn(false);
        if (!isMuted){
            playBoton();
        } 
    };

    const resetCounter = () => {
        setCounterPlayer1(0);
        setCounterPlayer2(0);
        resetPoint();
        if (counterPlayer1 === 3) {
            setCounterTotalPlayer1(counterTotalPlayer1 + 1);
        } else if (counterPlayer2 === 3) {
            setCounterTotalPlayer2(counterTotalPlayer2 + 1);
        }
        if (!isMuted){
            playBoton();
        } 
    };

    const resetPoint = () => {
        setPlayer1Selection(null);
        setPlayer2Selection(null);
        stopGanador();
        stopBoton();
        stopSelectBoton();
        setMsgOutput("");
        setButtonsBlocked(false);
        if (!isMuted){
            playBoton();
        } 
    };

    const clickHandler = (value, selected) => {
        if (!buttonsBlocked) {
            if (!isMuted){
                playSelectBoton();
            } 
            if (selected === player1Selection) {
                setPlayer1Selection(value);
            } else {
                setPlayer2Selection(value);
            }   
        };      
    };
            

    const startingHandler = () => {
        setStateOn(true);
        if (!isMuted){
            playBoton();
        } 
    };

    const compareAndSetStates = (selection1, selection2) => {
        if (selection1.win.includes(selection2.name) ) {
            setCounterPlayer1(counterPlayer1 + 1);
            setMsgOutput("Ganó el punto Jugador 1");
          
        } else if ( selection1.name === selection2.name) {
            setMsgOutput("Han empatado el punto");
        } else {
            setCounterPlayer2(counterPlayer2 + 1);
            setMsgOutput("Ganó el punto Jugador 2");
        }
        if (!isMuted && (counterPlayer1 === 3 || counterPlayer2 === 3)) {
            playGanador();
        }
    };

    const changeIsMuted = () => {
        if (isMuted) {
            setIsMuted(false);
        } else {
            setIsMuted(true);
            stopGanador();
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

    const iconByStateLeft = () => {
        if (player1Selection === null && player2Selection === null) {
            return(
                <>
                    <div className='box-arrow'>
                        <FaArrowDown className='arrow'/>
                    </div>
                </>
            );
        };
    };

    const iconByStateRight = () => {
        if (player1Selection != null && player2Selection === null) {
            return(
               <>
                    <div className='box-arrow'>
                        <FaArrowDown className='arrow'/>
                    </div>
               </>
            );
        };
    };

    const renderStarting = () => {
        if (stateOn) {
            if (counterPlayer1 === 3) {
                if (!isMuted) {
                    playGanador();
                }
                return (
                    <>
                        <div className='counter-multiplayer'>
                            <Counter player1={counterPlayer1} player2={counterPlayer2}/>
                            <div className='box-end-game'>
                                <p className='msg-end-mp'>¡Ganó la partida Jugador 1!</p>
                            </div>
                        </div> 
                    </>
                );
            }
            else if (counterPlayer2 === 3) {
                if (!isMuted) {
                    playGanador();
                }
                return (
                    <>
                        <div className='counter-multiplayer'>
                            <Counter player1={counterPlayer1} player2={counterPlayer2}/>
                            <div className='box-end-game'>
                                <p className='msg-end-mp'>¡Ganó la partida Jugador 2!</p>
                            </div>  
                        </div>   
                    </>
                );
            }
            else {
                return (
                    <>
                        <div className='counter-multiplayer'>
                        <Counter player1={counterPlayer1} player2={counterPlayer2}/> 
                        </div> 
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='game-container-multiplayer'>
                                <div className='game-left'>
                                    <div className='box-buttons-content-multiplayer'>
                                        {iconByStateLeft()}
                                        {selections.map((select, index) => (
                                            <img key={index} className='img-multiplayer' onClick={() => clickHandler(select, player1Selection)} src={select.src1} alt="boton"/>
                                        ))}
                                    </div>
                                </div>
                                <div className='game-medium'>
                                    {renderSelections()}
                                </div>
                                <div className='game-right'>
                                    <div className='box-buttons-content-multiplayer'>
                                        {iconByStateRight()}
                                        {selections.map((select, index) => (
                                            <img key={index} className='img-multiplayer' onClick={() => clickHandler(select, player2Selection)} src={select.src2} alt="boton"/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            };
        } 
        else {
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
        };
    };

    const renderSelections = () => {
        if (player1Selection != null && player2Selection != null) {
            return (
                <>
                    <div className='box-selections-content'>
                        <div className='msg-output'>
                            <p className='msg-mp'>{msgOutput}</p>
                        </div>
                        <div className='box-buttons-selected-content'>
                            <img className='selection-image-mp' src={player1Selection.src1} alt="imagen"/>
                            <img className='selection-image-mp' src={player2Selection.src2} alt="imagen"/>
                        </div>
                        <div className='msg-output'>
                            <a onClick={resetPoint} className="btn-gp" id='btn-multi'>JUGAR SIGUIENTE PUNTO</a> 
                        </div>
                    </div>
                </>
            );
        };
    };

    const renderByState = () => {
        if (stateOn) {
            if (counterPlayer1 === 3 || counterPlayer2 === 3) {
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
        if (player1Selection != null && player2Selection != null) {
            compareAndSetStates(player1Selection, player2Selection);
            setButtonsBlocked(true);
        };
    }, [player1Selection, player2Selection]);

    return (
        <>
            <div className='gamePage-container-multiplayer'>
                <div className='navbar'>
                    <div className='navbar-top'>
                        <GameCounter player1={counterTotalPlayer1} player2={counterTotalPlayer2} namePlayer1={"JUG 1"} namePlayer2={"JUG 2"}/>
                    </div>    
                    <div className='navbar-bottom'>
                        <a onClick={goBack} className="btn-gp">SALIR</a>
                        {renderByState()}
                        {iconSound()}
                    </div> 
                </div> 
                <div className='content-game-multiplayer'>
                    {renderStarting()}
                </div>    
            </div>
        </>
    );
};

export default MultiPlayer;
