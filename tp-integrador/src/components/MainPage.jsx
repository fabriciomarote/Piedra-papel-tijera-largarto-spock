import img from '../juego-logo.png';


const MainPage = () => {

    return (
        <>
          <div className='mainPage-container'>
            <div className='title'>
            Piedra, Papel, Tijera, Lagarto o Spock
            </div>
            <div className='image-juego'>
                <img src={img} alt="imagen"/>
            </div>
            <div className='buttons'>
            </div>
          </div>
        </>
      )
}
    
export default MainPage;