import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();
const useGlobal = () => useContext(GlobalContext);
const GlobalProvider = ({children}) => {
    const navigate = useNavigate();
    const [lang, setLang] = useState('English');
    const handleLearnMore = () => {
        navigate('/');
    }

    return (
        <GlobalContext.Provider value={{handleLearnMore, lang, setLang}}>
            {children}
        </GlobalContext.Provider>
    );
}

export { useGlobal, GlobalProvider };