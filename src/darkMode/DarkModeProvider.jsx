/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"

const DarkModeContext = createContext()
export const useDarkMode = () => useContext(DarkModeContext)

const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider