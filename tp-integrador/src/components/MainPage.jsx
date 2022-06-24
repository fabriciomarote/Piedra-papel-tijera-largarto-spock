import { useState } from 'react';
import img2 from '../juego.png';
import ModalRules from "./Modal"
import '../styles/MainPage.css';


const MainPage = () => {

    const [modelState, setModelState] = useState(false);

    return (
        <>
        <div className='modalOpened' >
            {modelState  && <ModalRules/>}
        </div>
          <div className='mainPage-container'>
            <div className='box-container'>
                <div className='title'>
                Piedra, Papel, Tijera, Lagarto o Spock
                </div>
                <div className='image-juego'>
                    <img className='imagen' src={img2} alt="imagen"/>
                </div>
                <div className='buttons'>
                <button type="submit" className="btn-btn btn-info btn-mp">Jugar!</button>
                <button onClick={() => {setModelState(true)}} className="btn-btn btn-info btn-mp">Reglas</button>
                </div>
            </div>
          </div>
        </>
      )
}
    
export default MainPage;