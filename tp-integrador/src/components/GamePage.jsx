import imgPiedra from '../images/rock.svg';
import imgPapel from '../images/paper.svg';
import imgTijera from '../images/scissors.svg';
import imgLagarto from '../images/lizard.svg';
import imgSpock from '../images/spock.svg';
import { useState } from 'react';
import '../styles/GamePage.css';

const GamePage = () => {

    const [contadorPlayer, setContadorPlayer] = useState(0)
    const [contadorComp, setContadorComp] = useState(0)

    const piedra = {
        name: "Piedra",
        ganaA: "Tijera",
        src: imgPiedra
    }

    const papel = {
        name: "Papel",
        ganaA: "Piedra",
        src: imgPapel 
    }

    const tijera = {
        name: "Tijera",
        ganaA: "Papel",
        src: imgTijera
    }

    const lagarto = {
        name: "Piedra",
        ganaA: "Tijera",
        src: imgLagarto
    }

    const spock = {
        name: "Spock",
        ganaA: "Tijera",
        src: imgSpock 
    }

    return (
        <>
            <div className='gamePage-container'>
                <div className='header'>
                    <p className='title-game'>Piedra, Papel, Tijera, Lagarto o Spock</p>
                </div>
                <div className='game-container'>
                    <div className='buttons-container'>
                        <img className='img' src={piedra.src} alt="imagen"/>
                        <img className='img' src={papel.src} alt="imagen"/>
                        <img className='img' src={tijera.src} alt="imagen"/>
                        <img className='img' src={lagarto.src} alt="imagen"/>
                        <img className='img' src={spock.src} alt="imagen"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GamePage;
