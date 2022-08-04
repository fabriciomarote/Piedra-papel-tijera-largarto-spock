import '../styles/Counter.css';

const Counter = (props) => {

    const { player1, player2 } = props;

    return (
        <>
            <div className='counter-container'>
                <div className='counter'>
                    <div className='counter-top'> 
                        <p className='title-counter'>Contador de Partida</p>
                    </div>
                    <div className='counter-bottom'> 
                        <div className='counter-left'> 
                            <p className='point'>{player1}</p>
                        </div>
                        <div className='counter-right'> 
                            <p className='point'>{player2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Counter;