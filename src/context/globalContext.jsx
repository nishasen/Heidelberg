import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();
const useGlobal = () => useContext(GlobalContext);
const GlobalProvider = ({children}) => {
    const navigate = useNavigate();
    
    const handleLearnMore = () => {
        navigate('/');
    }

    return (
        <GlobalContext.Provider value={{handleLearnMore}}>
            {children}
        </GlobalContext.Provider>
    );
}

export { useGlobal, GlobalProvider };