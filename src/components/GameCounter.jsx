import '../styles/GameCounter.css';

const GameCounter = (props) => {

    const { player1, player2, namePlayer1, namePlayer2 } = props;

    return (
        <>
            <div className='counter-total-container'>
                <div className='counter-total'>
                    <div className='counter-top'> 
                        <p className='title-counter-total'>Contador Total</p>
                    </div>
                    <div className='counter-bottom'> 
                        <div className='counter-total-left'> 
                            <p className='point'>{namePlayer1}</p>
                            <p className='point-total'>{player1}</p>
                        </div>
                        <div className='counter-total-right'> 
                            <p className='point-total'>{player2}</p>
                            <p className='point'>{namePlayer2}</p>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    );
};

export default GameCounter;