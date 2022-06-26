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
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/GamePage.css';

const GamePage = () => {

    const [countUser, setCountUser] = useState(0);
    const [countComp, setCountComp] = useState(0);
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

    const reserCount = () => {
        setCountUser(0);
        setCountComp(0);
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
            setCountUser(countUser + 1);
            setMsgOutput("Ganaste");
        } else if ( selection1.name == selection2.name) {
            setMsgOutput("Empate");
        } else {
            setCountComp(countComp + 1);
            setMsgOutput("Perdiste");
        }
    };

    const renderStarting  = () => {
        if (state) {
             if (countUser == 3) {
                return (
                    <>
                        <div className='contador-container'>
                            <div className='contador'> 
                                <div className='contador-left'> 
                                    <p className='player'>USER</p>
                                    <p className='point'>{countUser}</p>
                                </div>
                                <p className='title-game'>-</p>
                                <div className='contador-right'> 
                                    <p className='point'>{countComp}</p>
                                    <p className='player'>COMP</p>
                                </div>
                            </div>
                        </div>
                        <p className='player'>Ganaste la partida!</p>
                    </>
                )
            }
            else if (countComp == 3) {
                return (
                    <>
                        <div className='contador-container'>
                            <div className='contador'> 
                                <div className='contador-left'> 
                                    <p className='player'>USER</p>
                                    <p className='point'>{countUser}</p>
                                </div>
                                <p className='title-game'>-</p>
                                <div className='contador-right'> 
                                    <p className='point'>{countComp}</p>
                                    <p className='player'>COMP</p>
                                </div>
                            </div>
                        </div>
                        <p className='player'>Perdiste la partida!</p>
                    </>
                )
            }
            else {
                return (
                    <>
                        <div className='contador-container'>
                            <div className='contador'> 
                                <div className='contador-left'> 
                                    <p className='player'>USER</p>
                                    <p className='point'>{countUser}</p>
                                </div>
                                <p className='title-game'>-</p>
                                <div className='contador-right'> 
                                    <p className='point'>{countComp}</p>
                                    <p className='player'>COMP</p>
                                </div>
                            </div>
                        </div>
                        <div className='game-container'>
                            <div className='buttons-container'>
                                {selectionUser.map((select, index) => (
                                    <img key={index} className='img' onClick={() => clickHandler(select)} src={select.src} alt="imagen"/>
                                ))}
                            </div>
                        </div>
                        <div className='selections-content'>
                            <div className='buttons-container'>
                                {renderSelections()}
                            </div>
                        </div>
                    </>
                )
            }
        }
    };

    const renderSelections = () => {
        if (userSelection != null && compSelection != null) {
            return (
                <>
                    <div className='selections-content'>
                        <div className='buttons-container'>
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
                        <button type="submit" onClick={goBack} className="btn-btn btn-info btn-gp">Salir</button>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 navbar-medium'>
                        <button type="submit" onClick={startingHandler} className="btn-btn btn-info btn-gp">Iniciar Partida</button>
                    </div>    
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 navbar-right'>
                        <button type="submit" onClick={reserCount} className="btn-btn btn-info btn-gp">Reiniciar Partida</button> 
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
