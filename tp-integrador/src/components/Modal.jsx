import { useContext } from 'react';
import { Context } from './Context';

const Modal = () => {

    const [state, setState] = useContext(Context);
  
    return ( 
      <>
        <div className='modalContainer'>
          <div className='modalHeader'>
            <p className='modal-title'>SIGN IN </p> 
          </div>
          <div className='modalForm'>
            hola
            hola
            hola
          </div>
          <div className='modalFooter'>
              
          </div>
        </div>
      </>
    )
  }
  export default Modal;