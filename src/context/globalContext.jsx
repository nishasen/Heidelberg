import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const GlobalContext = createContext();
  
const useGlobal = () => useContext(GlobalContext);
const GlobalProvider = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [param]=useSearchParams();
    const [lang, setLang] = useState('English');
    const [openOverlay, setOpenOverlay] = useState(false);
    const handleLearnMore = () => {
        navigate('/');
    }

    const handleLanguage = (lang) => {
        setLang(lang);
    }

    const handleOpenOverlay = (key) => {
        setOpenOverlay(true);
        navigate(`${location.pathname}?overlay=${key}`)
    }

    const handleCloseOverlay = () => {
        navigate(location.pathname);
        setOpenOverlay(false);
    }

    useEffect(() => {
        if(param.size > 0) {
            navigate(`${location.pathname}?overlay=${param.get('overlay')}`)
            setOpenOverlay(true);
        } else {
            setOpenOverlay(false);
        }
    }, [param])
    
    return (
        <GlobalContext.Provider value={{handleLearnMore, 
                                        lang, 
                                        setLang, 
                                        handleLanguage,
                                        handleOpenOverlay,
                                        openOverlay,
                                        handleCloseOverlay}}>
            {children}
        </GlobalContext.Provider>
    );
}

export { useGlobal, GlobalProvider };