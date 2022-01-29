import {useState,createContext} from 'react'
// 1. create context
const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme,setTheme] = useState('dark')
    const toggleTheme = ()=>{
        setTheme(theme==='dark'?'light':'dark')
    }
    const value = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext , ThemeProvider}