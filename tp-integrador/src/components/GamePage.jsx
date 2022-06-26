import imgRock from '../images/rock-user.jpeg';
import imgPaper from '../images/paper-user.jpeg';
import imgScissors from '../images/scissors-user.jpeg';
import imgLizard from '../images/lizard-user.jpeg';
import imgSpock from '../images/spock-user.jpeg';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/GamePage.css';

const GamePage = () => {

    const [countUser, setCountUser] = useState(0)
    const [countComp, setCountComp] = useState(0)
    const [userSelection, setUserSelection] = useState(null)
    const [compSelection, setCompSelection] = useState(null)

    const rock = {
        name: "Rock",
        win: ["Lizard", "Scissors"],
        src: imgRock
    }

    const paper = {
        name: "Paper",
        win: ["Rock", "Spock"],
        src: imgPaper 
    }

    const scissors = {
        name: "Scissors",
        win: ["Paper", "Lizard"],
        src: imgScissors
    }

    const lizard = {
        name: "Lizard",
        win: ["Spock", "Paper"],
        src: imgLizard
    }

    const spock = {
        name: "Spock",
        win: ["Scissors", "Rock"],
        src: imgSpock 
    }

    const tirosDeComp = [rock, paper, scissors, lizard, spock]

    const tiroDeComp = () => {
        return tirosDeComp.random()
    }

    const reserCount = () => {
        setCountUser(0);
        setCountComp(0);
    }

    const clickHandler = (value) => {
        setUserSelection(value);
        console.log(value)
    }

    const realizarJugada = (elem) => {
        if (elem.win.includes(tiroDeComp.name)) {
            console.log(elem)
            console.log("elem")
            setCountUser(countUser + 1);
        } else if ( elem.name == tiroDeComp.name) {
            //empate
        } else {
            setCountComp(countComp + 1)
        }
    }

    const navigate = useNavigate();
    const goBack = () => navigate('/')

    return (
        <>
            <div className='gamePage-container'>
                <div className='col-lg-2 col-md-12 col-sm-12 col-xs-12 container-left'>
                    <button type="submit" onClick={goBack} className="btn-btn btn-info btn-mp">Exit</button>
                </div>
                <div className='col-lg-8 col-md-12 col-sm-12 col-xs-12 container-medium'>
                    <div className='contador-container'>
                    <div className='contador'> 
                        <div className='contador-left'> 
                            <p className='title-game'>USER</p>
                            <p className='point'>{countUser}</p>
                        </div>
                        <p className='title-game'>-</p>
                        <div className='contador-right'> 
                            <p className='point'>{countComp}</p>
                            <p className='title-game'>COMP</p>
                        </div>
                    </div>
                    </div>
                    <div className='game-container'>
                        <div className='buttons-container'>
                            <img className='img' onClick={() => clickHandler(rock)} src={rock.src} alt="imagen"/>
                            <img className='img' onClick={() => clickHandler(paper)} src={paper.src} alt="imagen"/>
                            <img className='img' onClick={() => clickHandler(scissors)} src={scissors.src} alt="imagen"/>
                            <img className='img' onClick={() => clickHandler(lizard)} src={lizard.src} alt="imagen"/>
                            <img className='img' onClick={() => clickHandler(spock)} src={spock.src} alt="imagen"/>
                        </div>
                    </div>
                </div>    
                <div className='col-lg-2 col-md-12 col-sm-12 col-xs-12 container-right'>
                    <button type="submit" onClick={reserCount} className="btn-btn btn-info btn-mp">Reset</button>
                </div>
            </div>
        </>
    );
}

export default GamePage;
