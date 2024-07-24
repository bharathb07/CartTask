import { useState, createContext } from 'react';

const ContextAPI = createContext();

//Contex Provider used to encapsulate only the components that needs the state in this context
export const ContextAPIProvider = ({ children }) => {
    const [data, setData] = useState(null)
    const [cartData, setCartData] = useState(null)
    const [counter, setCounter] = useState(1);
 
    return (
        <ContextAPI.Provider value={{ data, setData, cartData, setCartData, counter, setCounter}}>
            {children}
        </ContextAPI.Provider>
    )
}

export default ContextAPI;