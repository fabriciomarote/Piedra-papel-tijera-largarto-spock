import imgRock1 from '../images/rock-user.jpeg';
import imgRock2 from '../images/rock-comp.jpeg';
import imgPaper1 from '../images/paper-user.jpeg';
import imgPaper2 from '../images/paper-comp.jpeg';
import imgScissors1 from '../images/scissors-user.jpeg';
import imgScissors2 from '../images/scissors-comp.jpeg';
import imgLizard1 from '../images/lizard-user.jpeg';
import imgLizard2 from '../images/lizard-comp.jpeg';
import imgSpock1 from '../images/spock-user.jpeg';
import imgSpock2 from '../images/spock-comp.jpeg';
import win from '../images/winner.png';
import lose from '../images/loser.png';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/GamePage.css';

const GamePage = () => {

    const [counterUser, setCounterUser] = useState(0);
    const [counterComp, setCounterComp] = useState(0);
    const [userSelection, setUserSelection] = useState(null);
    const [compSelection, setCompSelection] = useState(null);
    const [msgOutput, setMsgOutput] = useState("");
    const [state, setState] = useState(false);

    const navigate = useNavigate();
    const goBack = () => navigate('/');

    const rockUser = {
        name: "Rock",
        win: ["Lizard", "Scissors"],
        src: imgRock1
    };
    const rockComp = {
        name: "Rock",
        win: ["Lizard", "Scissors"],
        src: imgRock2
    };
    const paperUser = {
        name: "Paper",
        win: ["Rock", "Spock"],
        src: imgPaper1 
    };
    const paperComp = {
        name: "Paper",
        win: ["Rock", "Spock"],
        src: imgPaper2
    };
    const scissorsUser = {
        name: "Scissors",
        win: ["Paper", "Lizard"],
        src: imgScissors1
    };
    const scissorsComp = {
        name: "Scissors",
        win: ["Paper", "Lizard"],
        src: imgScissors2
    };
    const lizardUser = {
        name: "Lizard",
        win: ["Spock", "Paper"],
        src: imgLizard1
    };
    const lizardComp = {
        name: "Lizard",
        win: ["Spock", "Paper"],
        src: imgLizard2
    };
    const spockUser = {
        name: "Spock",
        win: ["Scissors", "Rock"],
        src: imgSpock1 
    };
    const spockComp = {
        name: "Spock",
        win: ["Scissors", "Rock"],
        src: imgSpock2 
    };

    const selectionUser = [rockUser, paperUser, scissorsUser, lizardUser, spockUser];
    const selectionComp = [rockComp, paperComp, scissorsComp, lizardComp, spockComp];

    const randomChoice = () => {
        const randomSelection =
        selectionComp[Math.floor(Math.random() * selectionComp.length)];
          setCompSelection(randomSelection);
      };

    const resetCounter = () => {
        setCounterUser(0);
        setCounterComp(0);
        setUserSelection(null);
        setCompSelection(null);
        setMsgOutput("");
        setState(false);
    };

    const clickHandler = (value) => {
        setUserSelection(value);
        randomChoice();
    };

    const startingHandler = () => {
        setState(true);
    }

    const compareAndSetStates = (selection1, selection2) => {
        if (selection1.win.includes(selection2.name)) {
            setCounterUser(counterUser + 1);
            setMsgOutput("Ganaste el punto");
        } else if ( selection1.name == selection2.name) {
            setMsgOutput("Han empatado el punto");
        } else {
            setCounterComp(counterComp + 1);
            setMsgOutput("Perdiste el punto");
        }
    };

    const renderCounter = () => {
        return (
            <>
                <div className='counter-container'>
                    <div className='counter'> 
                        <div className='counter-left'> 
                            <p className='player'>USER</p>
                            <p className='point'>{counterUser}</p>
                        </div>
                        <p className='title-game'>-</p>
                        <div className='counter-right'> 
                            <p className='point'>{counterComp}</p>
                            <p className='player'>COMP</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const renderStarting  = () => {
        if (state) {
             if (counterUser == 3) {
                return (
                    <>
                        {renderCounter()}
                        <div className='box-end-game'>
                            <div className='box-content'>
                                <img className='winner-image' src={win} alt="imagen"/>
                                <p className='msg-end'>Ganaste la partida!</p>
                            </div>
                        </div> 
                    </>
                )
            }
            else if (counterComp == 3) {
                return (
                    <>
                        {renderCounter()}
                        <div className='box-end-game'>
                            <div className='box-content'>
                                <img className='loser-image' src={lose} alt="imagen"/>
                                <p className='msg-end'>Perdiste la partida!</p>
                            </div>  
                        </div>      
                    </>
                )
            }
            else {
                return (
                    <>
                        {renderCounter()}
                        <div className='game-container'>
                            <div className='box-buttons-content'>
                                {selectionUser.map((select, index) => (
                                    <img key={index} className='img' onClick={() => clickHandler(select)} src={select.src} alt="imagen"/>
                                ))}
                            </div>
                        </div>
                        {renderSelections()}
                    </>
                )
            }
        }
    };

    const renderSelections = () => {
        if (userSelection != null && compSelection != null) {
            return (
                <>
                    <div className='box-selections-content'>
                        <div className='box-buttons-selected-content'>
                            <img className='selection-image' src={userSelection.src} alt="imagen"/>
                            <img className='selection-image' src={compSelection.src} alt="imagen"/>
                        </div>
                        <div className='msg-output'>
                            <p className='msg'>{msgOutput}</p>
                        </div>
                    </div>
                </>
            )
        } 
    };

    useEffect(() => {
        if (userSelection != null && compSelection != null) {
            compareAndSetStates(userSelection, compSelection)
        } 
    }, [userSelection, compSelection]);

    return (
        <>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 gamePage-container'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 navbar'>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 navbar-left'>
                        <button onClick={goBack} className="btn-btn btn-info btn-gp">Salir</button>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 navbar-medium'>
                        <button onClick={startingHandler} className="btn-btn btn-info btn-gp">Iniciar Partida</button>
                    </div>    
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 navbar-right'>
                        <button onClick={resetCounter} className="btn-btn btn-info btn-gp">Reiniciar Partida</button> 
                    </div> 
                </div> 
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 content-game'>
                    {renderStarting()}
                </div>    
            </div>
        </>
    );
}

export default GamePage;
