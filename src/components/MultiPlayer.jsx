import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { selections } from './Selections';
import { FaArrowDown } from "react-icons/fa";
import win from '../media/winner.png';
import Counter from './Counter';
import GameCounter from './GameCounter';
import Footer from './Footer';
import '../styles/MultiPlayer.css';
import '../styles/Footer.css';

const MultiPlayer = () => {

    const [counterTotalPlayer1, setCounterTotalPlayer1] = useState(0);
    const [counterTotalPlayer2, setCounterTotalPlayer2] = useState(0);
    const [counterPlayer1, setCounterPlayer1] = useState(0);
    const [counterPlayer2, setCounterPlayer2] = useState(0);
    const [player1Selection, setPlayer1Selection] = useState(null);
    const [player2Selection, setPlayer2Selection] = useState(null);
    const [msgOutput, setMsgOutput] = useState("");
    const [state, setState] = useState(false);
    const [buttonsBlocked, setButtonsBlocked] = useState(false);
    const navigate = useNavigate();
    const goBack = () => navigate('/');

    const resetFullCounter = () => {
        setCounterTotalPlayer1(0);
        setCounterTotalPlayer2(0);
        setCounterPlayer1(0);
        setCounterPlayer2(0);
        resetPoint();
        setState(false);
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
    };

    const resetPoint = () => {
        setPlayer1Selection(null);
        setPlayer2Selection(null);
        setMsgOutput("");
        setButtonsBlocked(false);
    };

    const clickHandler = (value, selected) => {
        if (!buttonsBlocked) {
            if (selected === player1Selection) {
                setPlayer1Selection(value);
            } else {
                setPlayer2Selection(value);
            }   
        };       
    };
            

    const startingHandler = () => {
        setState(true);
    };

    const compareAndSetStates = (selection1, selection2) => {
        if (selection1.win.includes(selection2.name)) {
            setCounterPlayer1(counterPlayer1 + 1);
            setMsgOutput("Ganó el punto jugador 1");
        } else if ( selection1.name === selection2.name) {
            setMsgOutput("Han empatado el punto");
        } else {
            setCounterPlayer2(counterPlayer2 + 1);
            setMsgOutput("Ganó el punto jugador 2");
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

    const renderStarting  = () => {
        if (state) {
             if (counterPlayer1 === 3) {
                return (
                    <>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 counter-multiplayer'>
                            <Counter player1={counterPlayer1} player2={counterPlayer2}/>
                            <div className='box-end-game'>
                                <div className='box-content'>
                                    <img className='winner-image-multi' src={win} alt="imagen"/>
                                    <p className='msg-end-mp'>¡Ganó la partida JUGADOR 1!</p>
                                </div>
                            </div>
                        </div> 
                    </>
                );
            }
            else if (counterPlayer2 === 3) {
                return (
                    <>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 counter-multiplayer'>
                            <Counter player1={counterPlayer1} player2={counterPlayer2}/>
                            <div className='box-end-game'>
                                <div className='box-content-mp'>
                                    <img className='winner-image-multi' src={win} alt="imagen"/>
                                    <p className='msg-end-mp'>¡Ganó la partida JUGADOR 2!</p>
                                </div>
                            </div>  
                        </div>   
                    </>
                );
            }
            else {
                return (
                    <>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 counter-multiplayer'>
                        <Counter player1={counterPlayer1} player2={counterPlayer2}/> 
                        </div> 
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='game-container-multiplayer'>
                                <div className='col-lg-4 col-md-4 col-sm-4col-xs-1 game-left'>
                                    <div className='box-buttons-content-multiplayer'>
                                        {iconByStateLeft()}
                                        {selections.map((select, index) => (
                                            <img key={index} className='img-multiplayer' onClick={() => clickHandler(select, player1Selection)} src={select.src1} alt="imagen"/>
                                        ))}
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-10 game-medium'>
                                    {renderSelections()}
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-1 game-right'>
                                    <div className='box-buttons-content-multiplayer'>
                                        {iconByStateRight()}
                                        {selections.map((select, index) => (
                                            <img key={index} className='img-multiplayer' onClick={() => clickHandler(select, player2Selection)} src={select.src2} alt="imagen"/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            };
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
        if (state) {
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
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 gamePage-container'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 navbar'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 navbar-top'>
                    <GameCounter player1={counterTotalPlayer1} player2={counterTotalPlayer2} namePlayer1={"JUG 1"} namePlayer2={"JUG 2"}/>
                    </div>    
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 navbar-bottom'>
                        <a onClick={goBack} className="btn-gp">SALIR</a>
                        {renderByState()}
                    </div> 
                </div> 
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 content-game-multiplayer'>
                    {renderStarting()}
                </div>    
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 footer'>
                    <Footer/> 
                </div>  
            </div>
        </>
    );
};

export default MultiPlayer;
