import React, { useState } from "react";

export const Context = React.createContext();

const ModalContext = ({children, other}) => {

    const [state, setState] = useState(false);

    return(
        <>
            <Context.Provider value = {[state, setState]}>{children}</Context.Provider>
        </>
    )
}

export default ModalContext;