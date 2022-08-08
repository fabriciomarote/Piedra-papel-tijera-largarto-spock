import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { selections } from './Selections';
import win from '../media/winner.png';
import lose from '../media/loser.png';
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
        setMsgOutput("");
        setState(false);
    };

    const resetCounter = () => {
        setCounterUser(0);
        setCounterComp(0);
        setUserSelection(null);
        setCompSelection(null);
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

    const compareAndSetStates = (selection1, selection2) => {
        if (selection1.win.includes(selection2.name)) {
            setCounterUser(counterUser + 1);
            setMsgOutput("Ganaste el punto");
        } else if ( selection1.name === selection2.name) {
            setMsgOutput("Han empatado");
        } else {
            setCounterComp(counterComp + 1);
            setMsgOutput("Perdiste el punto");
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
